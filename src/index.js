import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, HashRouter, MemoryRouter, NavLink } from 'react-router-dom';

import Home from './components/home';
import Posts from './components/post';
import Profile from './components/profile';
import PostItem from './components/post_item';


const App = () => {
  return (
    <BrowserRouter>
    <header>
      <NavLink to="/" exact activeStyle={{ color: 'red'}} activeClassName="selected">Home</NavLink><br/>
      <NavLink to="/posts" exact activeStyle={{ color: 'red'}} activeClassName="selected">Posts</NavLink><br/>
      <NavLink to="/profile" exact activeStyle={{ color: 'red'}} activeClassName="selected">Profile</NavLink><br/>
      <br/><br/>
    </header>

    <Route path="/" exact component={Home}/>
    <Route path="/posts" exact component={Posts}/>
    <Route path="/posts/:id" component={PostItem}/>
    <Route path="/profile" exact component={Profile}/>
  </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);