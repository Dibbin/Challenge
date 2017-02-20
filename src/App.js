import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      theatre: {
        name: "",
        address: ""
      },
      movies: []
    }
  }

  componentWillMount() {
    fetch('/showtimes.json').then((response) => {
      // console.log("fetch success");
      return response.json();
    }).then((showtimes)=>{
      console.log("fetch success", showtimes, this);
      this.setState(showtimes);
    }).catch(()=>{
      console.log("fetch error");
    })
  }

  render() {
    console.log("render()", this.state);
    const {
      date,
      theatre,
      movies
    } = this.state;

    return (
      <div className="App">
        <input className="search" placeholder="Search..."/>
        <br/>
        {theatre.name}
        <br/>
        {theatre.address}
        <br/>
        <h2>SHOWINGS {date}</h2>
        <ul>
          {movies.map(function(movie, i){
            return <li key={i} >{movie.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
