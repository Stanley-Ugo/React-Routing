import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './components/home';
import Posts from './components/post';
import Profile from './components/profile';


const App = () => {
  return (
    <BrowserRouter>
    <header>
      <Link to="/">Home</Link><br/>
      <Link to="/posts">Posts</Link><br/>
      <Link to="/profile">Profile</Link><br/>
      <br/><br/>
    </header>

    <Route path="/" exact component={Home}/>
    <Route path="/posts" exact component={Posts}/>
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