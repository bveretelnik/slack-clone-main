import { Divider, Drawer, Toolbar } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import ListMain from "./ListMain";
import Channels from "./Channels";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaperP: {
    width: drawerWidth,
    background: "#350d36",
    transition: "background 1s ease",
  },
  drawerPaperB: {
    width: drawerWidth,
    background: "black",
    transition: "background 1s ease",
  },
  drawerContainerP: {
    overflow: "auto",
    background: "#350d36",
    transition: "background 1s ease",
    color: "white",
  },
  drawerContainerB: {
    overflow: "auto",
    background: "black",
    transition: "background 1s ease",
    color: "white",
  },
}));

function SidePanel() {
  const classes = useStyles();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: theme ? classes.drawerPaperP : classes.drawerPaperB,
      }}
    >
      <Toolbar />
      <div
        className={theme ? classes.drawerContainerP : classes.drawerContainerB}
      >
        <ListMain />
        <Divider />
        <Channels />
        <Divider />
      </div>
    </Drawer>
  );
}

export default SidePanel;
