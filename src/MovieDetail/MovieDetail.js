import React, {Component} from 'react';

class MovieDetail extends Component {

  render() {
    const {movieId} = this.props.routeParams;
    const {showData: {movies}} = this.props.route;
    const selectedMovie = movies.filter((movie)=>{
      return movie.title === movieId;
    })[0];

    const {
      title,
      rating,
      description
    } = selectedMovie;

    return (
      <div>
        <h1>{title}</h1>
        <p>Rating: {rating}</p>
        {description.split('\n\n').map(function(paragraph, i){
          return <p>{paragraph}</p>;
        })}
      </div>
    );
  }
}

export default MovieDetail;
