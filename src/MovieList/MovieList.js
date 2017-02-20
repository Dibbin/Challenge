import React, {Component} from 'react';
import { Link } from 'react-router';
import './MovieList.css';

class App extends Component {
  render() {
    const {
      date,
      theatre,
      movies
    } = this.props.route.showData;

    return (
      <div className="MovieList">
        <input className="search" placeholder="Search..."/>
        <br/>
        {theatre.name}
        <br/>
        {theatre.address}
        <br/>
        <h2>SHOWINGS {date}</h2>
        <ul>
          {movies.map(function(movie, i){
            return <li key={i} ><Link to={"/movie/"+movie.title}>{movie.title}</Link></li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
