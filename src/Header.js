import React, {Component} from 'react';

const Header = (props) => {
      console.log(props);
      return (
            <div>
                  <h1>Welcome here</h1>
                  <h3>Search for movies</h3>
                  <h4>Movie title:</h4><h3>{props.value.data.Title}</h3>
                  <img src={props.value.data.Poster} alt='poster'/>
            </div>
      )
}

export default Header;