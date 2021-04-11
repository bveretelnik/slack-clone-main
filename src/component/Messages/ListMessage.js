import React from "react";
import "./ListMessage.css";
import ReactEmoji from "react-emoji";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, List } from "@material-ui/core";

const useStyles = makeStyles({
  messageArea: {
    height: "56vh",
    overflowY: "auto",
  },
});

function ListMessage() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <List className={classes.messageArea}>
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{"bogdan"}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">
              {ReactEmoji.emojify("hello")}
            </p>
          </div>
        </div>
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">
              {ReactEmoji.emojify("sfsfsge  ddfsfsf")}
            </p>
          </div>
          <p className="sentText pl-10 ">{"user"}</p>
        </div>
      </List>
    </Grid>

    //   <Grid item xs={12}>
    //     <List className={classes.messageArea}>
    //       <ListItem key="1">
    //         <Grid container>
    //           <Grid item xs={12}>
    //             <ListItemText
    //               align="right"
    //               primary="Hey man, What's up ?"
    //             ></ListItemText>
    //           </Grid>
    //           <Grid item xs={12}>
    //             <ListItemText align="right" secondary="09:30"></ListItemText>
    //           </Grid>
    //         </Grid>
    //       </ListItem>
    //       <ListItem key="2">
    //         <Grid container>
    //           <Grid item xs={12}>
    //             <ListItemText
    //               align="left"
    //               primary="Hey, Iam Good! What about you ?"
    //             ></ListItemText>
    //           </Grid>
    //           <Grid item xs={12}>
    //             <ListItemText align="left" secondary="09:31"></ListItemText>
    //           </Grid>
    //         </Grid>
    //       </ListItem>
    //       <ListItem key="3">
    //         <Grid container>
    //           <Grid item xs={12}>
    //             <ListItemText
    //               align="right"
    //               primary="Hey, Iam Good! What about you ?"
    //             ></ListItemText>
    //           </Grid>
    //           <Grid item xs={12}>
    //             <ListItemText align="right" secondary="09:31"></ListItemText>
    //           </Grid>
    //         </Grid>
    //       </ListItem>
    //       <ListItem key="4">
    //         <Grid container>
    //           <Grid item xs={12}>
    //             <ListItemText
    //               align="left"
    //               primary="Hey, Iam Good! What about you ?"
    //             ></ListItemText>
    //           </Grid>
    //           <Grid item xs={12}>
    //             <ListItemText align="left" secondary="09:31"></ListItemText>
    //           </Grid>
    //         </Grid>
    //       </ListItem>
    //     </List>
    //   </Grid>
  );
}

export default ListMessage;
