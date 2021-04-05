import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import ListMessage from "./ListMessage";

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
    </main>
  );
}

export default Messages;
