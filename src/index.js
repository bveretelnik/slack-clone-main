import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/App";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import firebase from "./firebase";
import { Provider, connect, useDispatch, useSelector } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./component/redux/rootReducer";
import { setUser, clearUser } from "./component/redux/actions";
import Spinner from "./component/Spinner";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
function Root() {
  let history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
        history.push("/");
      } else {
        history.push("/login");
        dispatch(clearUser());
      }
    });
  }, [history]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      )}
    </>
  );
}

const mapDispatchToProps = {
  setUser,
  clearUser,
};
connect(null, mapDispatchToProps)(Root);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Root />
    </Router>
  </Provider>,
  document.getElementById("root")
);
