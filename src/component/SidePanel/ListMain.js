import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import React from "react";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

function ListMain() {
  return (
    <>
      <List>
        {["Threads", "All DMs"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon style={{ color: "#E5DDD1" }}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} style={{ color: "#E5DDD1" }} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  );
}

export default ListMain;
