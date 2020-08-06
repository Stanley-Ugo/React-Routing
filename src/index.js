import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

import Home from "./components/home";
import Posts from "./components/post";
import Profile from "./components/profile";
import PostItem from "./components/post_item";
import NotFound from './components/404';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <NavLink
          to="/"
          exact
          activeStyle={{ color: "red" }}
          activeClassName="selected"
        >
          Home
        </NavLink>
        <br />
        <NavLink
          to="/posts"
          exact
          activeStyle={{ color: "red" }}
          activeClassName="selected"
        >
          Posts
        </NavLink>
        <br />
        <NavLink
          to="/profile"
          exact
          activeStyle={{ color: "red" }}
          activeClassName="selected"
        >
          Profile
        </NavLink>
        <br />
        <br />
        <br />
      </header>

      <Switch>
        <Route path="/posts/:id" component={PostItem} />
        <Route path="/posts" component={Posts} />
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Home} />
        <Route path={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
