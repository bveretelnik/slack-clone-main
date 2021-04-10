import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Grid, List, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles({
  messageArea: {
    height: "60vh",
    overflowY: "auto",
  },
});

function ListMessage() {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <List className={classes.messageArea}>
        <ListItem key="1">
          <Grid container>
            <Grid item xs={12}>
              <div>
                <Avatar alignItem="right" style={{ background: "orange" }}>
                  H
                </Avatar>
                <ListItemText
                  align="right"
                  primary="Hey man, What's up ?"
                ></ListItemText>
              </div>
            </Grid>
            <Grid item xs={12}>
              <ListItemText align="right" secondary="09:30"></ListItemText>
            </Grid>
          </Grid>
        </ListItem>
        <ListItem key="2">
          <Grid container>
            <Grid item xs={12}>
              <Avatar align="left">H</Avatar>
              <ListItemText
                align="left"
                primary="Hey, Iam Good! What about you ?"
              ></ListItemText>
            </Grid>
            <Grid item xs={12}>
              <ListItemText align="left" secondary="09:31"></ListItemText>
            </Grid>
          </Grid>
        </ListItem>
        <ListItem key="3">
          <Grid container>
            <Grid item xs={12}>
              <ListItemText
                align="right"
                primary="Hey, Iam Good! What about you ?"
              ></ListItemText>
            </Grid>
            <Grid item xs={12}>
              <ListItemText align="right" secondary="09:31"></ListItemText>
            </Grid>
          </Grid>
        </ListItem>
        <ListItem key="4">
          <Grid container>
            <Grid item xs={12}>
              <ListItemText
                align="left"
                primary="Hey, Iam Good! What about you ?"
              ></ListItemText>
            </Grid>
            <Grid item xs={12}>
              <ListItemText align="left" secondary="09:31"></ListItemText>
            </Grid>
          </Grid>
        </ListItem>
      </List>
    </Grid>
  );
}

export default ListMessage;
