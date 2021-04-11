import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Toolbar } from "@material-ui/core";
import ListMessage from "./ListMessage";
import InputMessage from "./InputMessage";
import HeaderMessage from "./HeaderMessage";
import firebase from "../../firebase";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
}));
function Messages() {
  let messageRef = firebase.database().ref("messages");
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Toolbar />
      <HeaderMessage />
      <ListMessage />
      <Divider />
      <InputMessage messageRef={messageRef} />
    </main>
  );
}

export default Messages;
