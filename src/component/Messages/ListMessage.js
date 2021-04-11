import React from "react";
import "./ListMessage.css";
import ReactEmoji from "react-emoji";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, List } from "@material-ui/core";

const useStyles = makeStyles({
  messageArea: {
    height: "56vh",
    overflowY: "auto",
  },
});

function ListMessage({ user, messages }) {
  const classes = useStyles();

  const isOwnMessage = (message, user) => {
    return message.user.id === user.uid;
  };
  const timeFromNow = (timestamp) => moment(timestamp).fromNow();
  return (
    <Grid item xs={12}>
      <List className={classes.messageArea}>
        {messages.length > 0 ? (
          messages.map((message) => (
            <div
              key={message.timestamp}
              className={`messageContainer ${
                isOwnMessage(message, user) ? "justifyEnd" : "justifyStart"
              } `}
            >
              <p className="sentText pr-10">{message.user.name}</p>

              <div
                className={`messageBox ${
                  isOwnMessage(message, user)
                    ? "backgroundBlue"
                    : "backgroundLight"
                }`}
              >
                <p
                  className={`messageText ${
                    isOwnMessage(message, user) ? "colorWhite" : "colorDark"
                  }`}
                >
                  {message.content}
                </p>
              </div>
              {/* <p>{timeFromNow(message.timestamp)}</p> */}
            </div>
          ))
        ) : (
          <p className="sentText pr-10">chat is empti</p>
        )}
      </List>
    </Grid>
  );
}

export default ListMessage;
