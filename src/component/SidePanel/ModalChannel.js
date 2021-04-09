import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: "15px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function ModalChannel({ handleClose, open }) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Add Channel</h2>
            <form className={classes.form}>
              <TextField
                style={{ margin: "10px" }}
                id="standard-basic"
                label="Name of Channel"
              />
              <TextField
                style={{ margin: "10px" }}
                id="standard-basic"
                label="About the Channel"
              />
            </form>
            <div className={classes.button}>
              <Button
                onClick={handleClose}
                style={{ color: "red", margin: "5px" }}
                variant="outlined"
              >
                Cancel
              </Button>
              <Button
                variant="outlined"
                style={{ color: "green", margin: "5px" }}
              >
                Add
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalChannel;
