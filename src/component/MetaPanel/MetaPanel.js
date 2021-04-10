import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Avatar,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useSelector, useDispatch, connect } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import firebase from "../../firebase";
import { changeTheme } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  appBarP: {
    zIndex: theme.zIndex.drawer + 1,
    background: "#3F0E40",
    transition: "background 1s ease",
  },
  appBarB: {
    zIndex: theme.zIndex.drawer + 1,
    background: "black",
    transition: "background 1s ease",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
function MetaPanel() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const isMenuOpen = Boolean(anchorEl);
  const user = useSelector((state) => state.user.currentUser);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleSignout = () => {
    setAnchorEl(null);
    firebase
      .auth()
      .signOut()
      .then(() => console.log("sign out"));
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => console.log(user)}
        style={{ color: "gray" }}
      >{`Signed in us ${user.displayName}`}</MenuItem>
      <MenuItem>Change Avatar</MenuItem>
      <MenuItem onClick={handleSignout}>Sign Out</MenuItem>
    </Menu>
  );
  return (
    <>
      <AppBar
        position="fixed"
        className={theme ? classes.appBarP : classes.appBarB}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Slack
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit" onClick={() => dispatch(changeTheme())}>
              {theme ? (
                <Brightness4Icon fontSize="default" />
              ) : (
                <Brightness7Icon fontSize="default" />
              )}
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar alt="name" src={user.photoURL} />
              <div>
                <Typography>{user.displayName}</Typography>
                <ArrowDropDownIcon />
              </div>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </>
  );
}

export default connect(null, { changeTheme })(MetaPanel);
