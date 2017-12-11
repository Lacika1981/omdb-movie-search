import React, {Component} from 'react';

const Information = (props) => {
      console.log(Object.keys(props.value).length);
      if(Object.keys(props.value).length === 0){
            return <div>Loading...</div>
      }
      return (
            <div>
                  <h4>Movie title:</h4><p>{props.value.data.Title}</p>
                  <h4>Actors:</h4><p>{props.value.data.Actors}</p>
                  <h4>Director:</h4><p>{props.value.data.Director}</p>
                  <h4>Metascore:</h4><p>{props.value.data.Metascore}</p>
                  <h4>Production:</h4><p>{props.value.data.Production}</p>
                  <h4>Released:</h4><p>{props.value.data.Released}</p>
                  <h4>Year:</h4><p>{props.value.data.Year}</p>
                  <h4>imdbRating:</h4><p>{props.value.data.imdbRating}</p>
                  <h4>Plot:</h4><p>{props.value.data.Plot}</p>
                  <h4>Awards:</h4><p>{props.value.data.Awards}</p>
                  <img src={props.value.data.Poster} alt='poster'/>
            </div>
      )
}

export default Information;