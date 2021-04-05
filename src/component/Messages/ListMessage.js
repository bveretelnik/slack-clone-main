import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Divider,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles({
  messageArea: {
    height: "70vh",
    overflowY: "auto",
  },
});

function ListMessage() {
  const classes = useStyles();
  return (
    <Grid item xs={9}>
      <List className={classes.messageArea}>
        <ListItem key="1">
          <Grid container>
            <Grid item xs={12}>
              <ListItemText
                align="right"
                primary="Hey man, What's up ?"
              ></ListItemText>
            </Grid>
            <Grid item xs={12}>
              <ListItemText align="right" secondary="09:30"></ListItemText>
            </Grid>
          </Grid>
        </ListItem>
        <ListItem key="2">
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
        <ListItem key="3">
          <Grid container>
            <Grid item xs={12}>
              <ListItemText
                align="right"
                primary="Cool. i am good, let's catch up!"
              ></ListItemText>
            </Grid>
            <Grid item xs={12}>
              <ListItemText align="right" secondary="10:30"></ListItemText>
            </Grid>
          </Grid>
        </ListItem>
      </List>
      <Divider />
      <Grid container style={{ padding: "20px" }}>
        <Grid item xs={11}>
          <TextField
            id="outlined-basic-email"
            label="Type Something"
            fullWidth
          />
        </Grid>
        <Grid item xs={1} align="right">
          <Fab color="default" aria-label="add">
            <SendIcon style={{ color: "#3F0E40" }} />
          </Fab>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ListMessage;
