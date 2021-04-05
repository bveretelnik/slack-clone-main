import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
function Channels() {
  return (
    <>
      <List>
        <ListItem button>
          <ListItemIcon style={{ color: "#E5DDD1" }}>
            <ExpandMoreIcon />
          </ListItemIcon>
          <ListItemText primary={"Channels"} style={{ color: "#E5DDD1" }} />
          <ListItemIcon style={{ color: "#E5DDD1" }}>
            <AddIcon />
          </ListItemIcon>
        </ListItem>
      </List>
    </>
  );
}

export default Channels;
