import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './components/home';
import Posts from './components/post';
import Profile from './components/profile';
import PostItem from './components/post_item';


const App = () => {
  return (
    <BrowserRouter>
    <header>
      <Link to="/">Home</Link><br/>
      <Link to="/posts">Posts</Link><br/>
      <Link to={{
        pathname: '/profile',
        hash: '#francis',
        search: '?profile=true'
      }}>Profile</Link><br/>
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