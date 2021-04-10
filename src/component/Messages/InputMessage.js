import { Fab, Grid, TextField } from "@material-ui/core";
import React from "react";
import SendIcon from "@material-ui/icons/Send";

function InputMessage() {
  return (
    <>
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
    </>
  );
}

export default InputMessage;
