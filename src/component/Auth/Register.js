import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import md5 from "md5";
import {
  Avatar,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Typography,
  TextField,
  Container,
  Button,
  Grid,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import firebase from "../../firebase";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        color="inherit"
        to="https://www.facebook.com/bogdan.veretelnik/"
      >
        B_Veretelnik
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "purple",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    textDecoration: "none",
  },
}));

function Register() {
  const classes = useStyles();

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    errors: [],
    loading: false,
    usersRef: firebase.database().ref("users"),
  });

  const isFormValid = () => {
    let errors = [];
    let error;

    if (isFormEmpty(state)) {
      error = { message: "Fill an all fields" };
      setState({ ...state, errors: errors.concat(error) });
      return false;
    } else if (!isPassswordValid(state)) {
      error = { message: "Password is invalid" };
      setState({ ...state, errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };
  const isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
    return (
      !username.length ||
      !email.length ||
      !password.length ||
      !passwordConfirmation.length
    );
  };

  const isPassswordValid = ({ password, passwordConfirmation }) => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  };
  const displayErrors = (errors) =>
    errors.map((error, i) => (
      <Typography style={{ color: "red" }} component="h3" variant="h5" key={i}>
        {error.message}
      </Typography>
    ));
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      setState({ ...state, errors: [], loading: true });
      firebase
        .auth()
        .createUserWithEmailAndPassword(state.email, state.password)
        .then((createdUser) => {
          console.log(createdUser);
          createdUser.user
            .updateProfile({
              displayName: state.username,
              photoURL: `http://gravatar.com/avatar/${md5(
                createdUser.user.email
              )}?d=identicon`,
            })
            .then(() => {
              saveUser(createdUser).then(() => {
                console.log("user saved");
              });
            })
            .catch((err) => {
              console.log(err);
              setState({
                ...state,
                errors: state.errors.concat(err),
                loading: false,
              });
            });
        })
        .catch((err) => {
          console.log(err);
          setState({
            ...state,
            errors: state.errors.concat(err),
            loading: false,
          });
        });
    }
  };

  const saveUser = (createdUser) => {
    return state.usersRef.child(createdUser.user.uid).set({
      name: createdUser.user.displayName,
      avatar: createdUser.user.photoURL,
    });
  };

  const {
    username,
    email,
    password,
    passwordConfirmation,
    errors,
    loading,
  } = state;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        {errors.length > 0 && displayErrors(errors)}
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User name"
            name="username"
            autoFocus
            onChange={handleChange}
            value={username}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
            value={email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
            value={password}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="passwordConfirmation"
            label="Confirm password"
            type="password"
            id="passwordConfirmation"
            autoComplete="current-password"
            onChange={handleChange}
            value={passwordConfirmation}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            disabled={loading}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign up
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link className={classes.link} to="/login" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Register;
