import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { green, orange, purple } from "@material-ui/core/colors";

import firebase from "../../firebase";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  container: {
    padding: "8px",
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: purple,
  },
  background: {
    paper: orange,
  },
});

function InputMessage({ messageRef, user, channel }) {
  const initialState = {
    message: "",
    loading: false,
    errors: [],
  };
  const classes = useStyles();

  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: [e.target.value] });
  };

  const createMessage = () => {
    const message = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      user: {
        id: user.uid,
        name: user.displayName,
        avatar: user.photoURL,
      },
      content: state.message,
    };
    return message;
  };

  const sendMessage = () => {
    const { message } = state;

    if (message) {
      setState({ ...state, loading: true });
      messageRef
        .child(channel.id)
        .push()
        .set(createMessage())
        .then(() => {
          setState({ ...state, loading: false, message: "", errors: [] });
        })
        .catch((e) => {
          console.error(e);
          setState({ loading: false, errors: state.errors.concat(e) });
        });
    } else {
      setState({
        errors: state.errors.concat({ message: "Add a message" }),
      });
    }
  };
  const { loading, message } = state;
  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs={11}>
          <form>
            <TextField
              name="message"
              onChange={handleChange}
              value={message}
              style={{ margin: 8 }}
              placeholder="Some messages..."
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </form>
        </Grid>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            background="paper"
            className={classes.margin}
          >
            <EmojiEmotionsIcon />
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.margin}
          >
            Upload files &nbsp;
            <AddCircleOutlineIcon />
          </Button>
          <Button
            onClick={sendMessage}
            disabled={loading}
            variant="contained"
            color="secondary"
            className={classes.margin}
          >
            Send messages &nbsp;
            <SendIcon />
          </Button>
        </ThemeProvider>
      </Grid>
    </>
  );
}

export default InputMessage;
