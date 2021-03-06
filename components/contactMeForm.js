import * as React from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm, useFormState } from "react-hook-form";
import { validateEmail } from "../utils/formValidationUtils";
import Button from "./button";
import FormSubmitMessage from "./formSubmitMessage";
import Heading from "./heading";
import { Check, ExclamationCircle, PaperAirplane } from "./icons";
import Text from "./text";
import TextArea from "./textArea";
import TextField from "./textField";

export default function ContactMeForm({ location }) {
  const { handleSubmit, register, control } = useForm();
  const { errors } = useFormState({ control });

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isSubmitSuccessful, setIsSubmitSuccessful] = React.useState(false);
  const [googleReCaptchaVerifyFailure, setGoogleReCaptchaVerifyFailure] = React.useState(false);

  async function onSubmit(values) {
    const result = await executeRecaptcha(location);

    const response = await fetch("/api/googleReCaptchaVerify", {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: result
      })
    });

    const googleReCaptchaVerify = await response.json();

    if (googleReCaptchaVerify.success && googleReCaptchaVerify.score > 0.5) {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });

      setIsSubmitSuccessful(response.status === 202);
    } else {
      setGoogleReCaptchaVerifyFailure(true);
    }
  }

  return (
    <div className="max-w-md self-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading>Contact me</Heading>
        <TextField
          name="name"
          type="text"
          label="Name"
          placeholder="Your name"
          error={errors.name}
          {...register("name", {
            required: true
          })}
        />
        <TextField
          name="email"
          type="email"
          label="Email"
          placeholder="your@domain.com"
          error={errors.email}
          helperText={
            errors.email && errors.email.type === "email" ? errors.email.message : "Required"
          }
          {...register("email", {
            required: true,
            validate: {
              email: value => validateEmail(value) || "Email must be valid. Ex: your@domain.com"
            }
          })}
        />
        <TextArea
          name="message"
          label="Message"
          placeholder="My wishes..."
          error={errors.message}
          {...register("message")}
        />
        <TextField name="location" type="hidden" value={location} {...register("location")} />
        <div>
          <Button type="submit" rightIcon={<PaperAirplane className="h-5 w-5" />}>
            Send
          </Button>
          <Text className="text-xs">
            This page is protected with reCAPTCHA and Google's{" "}
            <a className="underline" href="https://policies.google.com/privacy">
              privacy rules
            </a>
            .{" "}
            <a className="underline" href="https://policies.google.com/terms">
              Terms
            </a>{" "}
            apply.
          </Text>
          {isSubmitSuccessful ? (
            <FormSubmitMessage
              text="I have recieved your inquiry and you'll hear from me soon."
              icon={<Check />}
            />
          ) : null}
          {googleReCaptchaVerifyFailure ? (
            <FormSubmitMessage
              text="reCAPTCHA stopped the message from being sent. If this was an error then please reach out to me via the links in my footer."
              icon={<ExclamationCircle />}
            />
          ) : null}
        </div>
      </form>
    </div>
  );
}
