import { AppBar, Dialog, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Burger from "./burger";
import Link from "./link";

const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow: "none"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  link: {},
  dialog: {
    top: "64px !important",
    "& .MuiBackdrop-root": {
      display: "none"
    }
  },
  dialogPaper: {
    backgroundColor: "#fff",
    boxShadow: "none"
  }
}));

export default function Nav() {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <AppBar className={classes.appBar} position="relative" color="inherit">
      <Toolbar className={classes.toolbar}>
        <Link className={classes.link} href="/" underline="none">
          Tommy Lunde Barvåg
        </Link>
        <Burger onClick={() => setMenuOpen(value => !value)} />
      </Toolbar>
      <Dialog
        className={classes.dialog}
        fullScreen
        keepMounted
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        PaperProps={{ className: classes.dialogPaper }}
      >
        <div>Hi</div>
      </Dialog>
    </AppBar>
  );
}
