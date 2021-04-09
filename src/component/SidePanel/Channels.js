import React, { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ModalChannel from "./ModalChannel";
function Channels() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <List>
        <ListItem>
          <ListItemIcon style={{ color: "#E5DDD1" }}>
            <ExpandMoreIcon style={{ cursor: "pointer" }} />
          </ListItemIcon>
          <ListItemText primary={"Channels"} style={{ color: "#E5DDD1" }} />
          <ListItemIcon style={{ color: "#E5DDD1" }}>
            <AddIcon onClick={handleOpen} style={{ cursor: "pointer" }} />
          </ListItemIcon>
        </ListItem>
      </List>
      <ModalChannel handleClose={handleClose} open={open} />
    </>
  );
}

export default Channels;
