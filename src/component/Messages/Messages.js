import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Toolbar } from "@material-ui/core";
import ListMessage from "./ListMessage";
import InputMessage from "./InputMessage";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
function Messages() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Toolbar />
      <ListMessage />
      <Divider />
      <InputMessage />
    </main>
  );
}

export default Messages;
