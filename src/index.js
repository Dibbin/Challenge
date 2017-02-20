import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList/MovieList';
import MovieDetail from './MovieDetail/MovieDetail.js';
import './index.scss';
import { Router, Route, browserHistory } from 'react-router';
import fetch from 'isomorphic-fetch';

fetch('/showtimes.json').then((response) => {
  return response.json();
}).then((showData)=>{
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={MovieList} showData={showData}>
      </Route>
      <Route path="/movie/:movieId" component={MovieDetail} showData={showData}/>
    </Router>,
    document.getElementById('root')
  );
}).catch(()=>{
  console.log("fetch error");
})

