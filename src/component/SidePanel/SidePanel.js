import { Divider, Drawer, Toolbar } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListMain from "./ListMain";
import Channels from "./Channels";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#350d36",
  },
  drawerContainer: {
    overflow: "auto",
    background: "#350d36",
    color: "white",
  },
}));

function SidePanel() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <ListMain />
        <Divider />
        <Channels />
        <Divider />
      </div>
    </Drawer>
  );
}

export default SidePanel;
