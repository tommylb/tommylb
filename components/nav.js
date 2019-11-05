import { AppBar, Container, Dialog, MenuItem, MenuList, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Burger from "./burger";
import Link from "./link";

const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow: "none",
    position: "unset"
  },
  toolbar: {},
  toolbarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  link: {},
  menuLink: { width: "100%" },
  dialog: {
    "& .MuiBackdrop-root": {
      display: "none"
    }
  },
  dialogContainer: {
    margin: `${theme.spacing(8)}px auto 0`
  },
  dialogPaper: {
    backgroundColor: "#fff",
    boxShadow: "none"
  }
}));

export default function Nav() {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <AppBar className={classes.appBar} position="relative" color="inherit">
        <Toolbar className={classes.toolbar}>
          <Container className={classes.toolbarContainer} maxWidth="lg">
            <Link className={classes.link} href="/" underline="none">
              Tommy Lunde Barvåg
            </Link>
            <Burger onClick={() => setMenuOpen(value => !value)} />
          </Container>
        </Toolbar>
      </AppBar>
      <Dialog className={classes.dialog} fullScreen keepMounted open={menuOpen} onClose={handleClose} PaperProps={{ className: classes.dialogPaper }}>
        <Container className={classes.dialogContainer} maxWidth="sm">
          <MenuList>
            <MenuItem href="/" onClick={handleClose}>
              <Link className={classes.menuLink} href="/" underline="none">
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link className={classes.menuLink} href="/contact" underline="none">
                Contact
              </Link>
            </MenuItem>
          </MenuList>
        </Container>
      </Dialog>
    </>
  );
}
