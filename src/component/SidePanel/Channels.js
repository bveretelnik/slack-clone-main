import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import AddIcon from "@material-ui/icons/Add";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ModalChannel from "./ModalChannel";
import firebase from "../../firebase";
import { connect, useSelector, useDispatch } from "react-redux";
import { setCurrentChannel } from "../redux/actions";
import ListChannels from "./ListChannels";
function Channels() {
  const initialState = {
    channels: [],
    channelName: "",
    channelDetails: "",
    channelsRef: firebase.database().ref("channels"),
  };
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(false);
  const [state, setState] = useState(initialState);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    addListener();
    return () => {
      removeListener();
    };
  }, []);

  useEffect(() => {
    setFirstChannel();
  });

  const addListener = () => {
    let loadedChannls = [];
    state.channelsRef.on("child_added", (snap) => {
      loadedChannls.push(snap.val());
      setState({ ...state, channels: loadedChannls });
    });
  };
  const removeListener = () => {
    state.channelsRef.of();
  };
  const setFirstChannel = () => {
    const firstChannel = state.channels[0];
    if (state.channels.length > 0) {
      dispatch(setCurrentChannel(firstChannel));
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: [e.target.value] });
  };
  const changeChannel = (channel) => {
    dispatch(setCurrentChannel(channel));
  };
  const addChannel = () => {
    const { channelsRef, channelName, channelDetails } = state;
    const key = channelsRef.push().key;

    const newChannel = {
      id: key,
      name: channelName,
      details: channelDetails,
      createdBy: {
        name: user.displayName,
        avatar: user.photoURL,
      },
    };

    channelsRef
      .child(key)
      .update(newChannel)
      .then(() => {
        setState({ ...state, channelName: "", channelDetails: "" });
        handleClose();
        console.log("channel added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid(state)) {
      addChannel();
    }
  };
  const isFormValid = ({ channelName, channelDetails }) => {
    return channelName && channelDetails;
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleView = () => {
    setView(!view);
  };

  const { channels } = state;
  return (
    <>
      <List>
        <ListItem>
          <ListItemIcon style={{ color: "#E5DDD1" }}>
            {view ? (
              <ExpandLessIcon
                onClick={handleView}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <ExpandMoreIcon
                onClick={handleView}
                style={{ cursor: "pointer" }}
              />
            )}
          </ListItemIcon>
          <ListItemText primary={"Channels"} style={{ color: "#E5DDD1" }} />
          <ListItemIcon style={{ color: "#E5DDD1" }}>
            <AddIcon onClick={handleOpen} style={{ cursor: "pointer" }} />
          </ListItemIcon>
        </ListItem>
      </List>
      <Divider />
      {view ? (
        <ListChannels changeChannel={changeChannel} channels={channels} />
      ) : null}

      <ModalChannel
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleClose={handleClose}
        open={open}
      />
    </>
  );
}

export default connect(null, { setCurrentChannel })(Channels);
