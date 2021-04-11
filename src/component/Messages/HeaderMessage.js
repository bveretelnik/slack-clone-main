import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import React from "react";

const useStyles = makeStyles({
  container: {
    background: "#FAF9EE",
    height: "55px",
    width: "100vh",
    margin: "1px 1px",
    boxShadow: "3px 3px 3px grey",
  },
  users: {
    color: "gray",
  },
});

function HeaderMessage() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div style={{ display: "flex" }}>
        <Typography variant={"h5"}>{"React"}</Typography>
        <StarBorderIcon />
      </div>
      <Typography className={classes.users} variant={"subtitle1"}>
        {" 2 User"}
      </Typography>
    </Container>
  );
}

export default HeaderMessage;
