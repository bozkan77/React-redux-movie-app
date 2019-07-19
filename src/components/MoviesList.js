import React from 'react';
import PropTypes from 'prop-types';

const MovieList =({ movies }) => {

  const emptyMessage = (
    <p>Hiç film bulunamadı.</p>
  ); 

  const moviesList = (
    <div>
      movie list
    </div>
  );

  return (
    <div>
      { movies.length === 0 ? emptyMessage : moviesList }
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
}

export default MovieList;