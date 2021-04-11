import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Toolbar } from "@material-ui/core";
import ListMessage from "./ListMessage";
import InputMessage from "./InputMessage";
import HeaderMessage from "./HeaderMessage";
import { useSelector } from "react-redux";
import firebase from "../../firebase";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
}));
function Messages() {
  const initialState = {
    messageRef: firebase.database().ref("messages"),
    messages: [],
    messagesLoading: true,
  };
  const user = useSelector((state) => state.user.currentUser);
  const channel = useSelector((state) => state.channel.currentChannel);
  const [state, setState] = useState(initialState);
  const classes = useStyles();

  useEffect(() => {
    if (channel && user) {
      addListener(channel.id);
      console.log(state.messages);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channel]);

  const addListener = (channelId) => {
    addMessageListener(channelId);
  };
  const addMessageListener = (channelId) => {
    let loadedMessages = [];
    state.messageRef.child(channelId).on("child_added", (snap) => {
      loadedMessages.push(snap.val());
    });
    setState({
      ...state,
      messages: loadedMessages,
      messagesLoading: false,
    });
  };
  const { messageRef, messages } = state;
  return (
    <main className={classes.content}>
      <Toolbar />
      <HeaderMessage />
      <ListMessage messages={messages} user={user} />
      <Divider />
      <InputMessage user={user} channel={channel} messageRef={messageRef} />
    </main>
  );
}

export default Messages;
