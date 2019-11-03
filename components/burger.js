import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles(theme => ({
  burgerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "50px",
    cursor: "pointer",
    transform: "rotate(0deg)",
    transition: "all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99)",
    userSelect: "none"
  },
  burgerContainerOpen: {
    transform: "rotate(90deg)"
  },
  burger: {
    width: "24px",
    height: "12px",
    position: "relative",
    display: "block"
  },
  bar: {
    width: "100%",
    height: "1px",
    display: "block",
    position: "relative",
    background: "#000",
    transition: "all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99)",
    transitionDelay: "0s"
  },
  barOpen: {
    transition: "all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99)",
    transitionDelay: "0.2s"
  },
  topBar: {
    transform: "translateY(0px) rotate(0deg)"
  },
  topBarOpen: {
    transform: "translateY(4px) rotate(45deg)"
  },
  bottomBar: {
    transform: "translateY(6px) rotate(0deg)"
  },

  bottomBarOpen: {
    transform: "translateY(3px) rotate(-45deg)"
  }
}));

export default function Burger(props) {
  const { className, onClick } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(value => !value);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={clsx(classes.burgerContainer, {
        [classes.burgerContainerOpen]: open
      })}
      onClick={handleClick}
    >
      <div className={classes.burger}>
        <div
          className={clsx(
            classes.bar,
            classes.topBar,
            {
              [classes.barOpen]: open,
              [classes.topBarOpen]: open
            },
            className
          )}
        ></div>
        <div
          className={clsx(classes.bar, classes.bottomBar, {
            [classes.barOpen]: open,
            [classes.bottomBarOpen]: open
          })}
        ></div>
      </div>
    </div>
  );
}
