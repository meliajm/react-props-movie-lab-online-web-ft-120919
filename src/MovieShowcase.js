import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map( (movieDatum, index) => 
      <MovieCard 
      key={index} 
      genres={movieDatum.genres} 
      title={movieDatum.title} 
      poster={movieDatum.poster}
      IMDBRating={movieDatum.IMDBRating}/>
      // {this.props.title = movieDatum.title}
      )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
