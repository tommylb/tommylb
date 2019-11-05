import { Container, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";

const useStyles = makeStyles(theme => ({
  main: {
    position: "relative"
  }
}));

export default function Layout(props) {
  const { children } = props;

  const classes = useStyles();

  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(true);
  });

  return (
    <>
      <Nav />
      <Container className={classes.main} component="main">
        <Fade in={show}>
          <Container maxWidth={false}>{children}</Container>
        </Fade>
      </Container>
      <Footer />
    </>
  );
}
