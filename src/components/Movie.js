import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css"; 

function Movie({title, year, summary, poster, genres}){
return (
    <div className = "movie">
        <img src={poster} alt={title} title = {title}/>

        <div className = "movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                    {genres.map((genre, index) => (
                    <li key ={index} className="genres__genre">{genre}</li>
                    ))}
            </ul>
                    <p className = "movie__summary">{summary.slice(0.140)}...</p>
        </div>
    </div>
);
}

Movie.prototype = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired
}

export default Movie;