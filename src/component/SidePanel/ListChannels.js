import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import AdjustIcon from "@material-ui/icons/Adjust";
import React from "react";

function ListChannels({ channels, changeChannel }) {
  return (
    <>
      <List>
        {channels.length > 0 &&
          channels.map((channel) => (
            <ListItem
              button
              onClick={() => changeChannel(channel)}
              key={channel.id}
            >
              <ListItemIcon>
                <AdjustIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary={channel.name} />
            </ListItem>
          ))}
      </List>
    </>
  );
}

export default ListChannels;
