import React, {Component} from 'react';

const Information = (props) => {
      console.log(props);
      if (props.value === null) {
            return <div>Loading...</div>
      }
      if (props.value.Response && props.value.Response === "False") {
            return (
                  <div>
                        <h1>Sorry there is no movie with that title</h1>
                  </div>
            )
      }

      return (
            <div className="container information">
                  <div className="row">
                        <div className="col">
                              <div className="text-center movieTitle">
                                    <h4>Movie title:</h4>
                                    <p className="pInline">{props.value.Title}
                                          ({props.value.Year})</p>
                              </div>
                        </div>
                  </div>
                  <div className="row">
                        <div className="col d-flex justify-content-center">
                              <div className="poster-image">
                                    <img
                                          src={props.value.Poster}
                                          className="img-fluid"
                                          alt={props.value.Title}
                                          onClick={props.handleDetail}/>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Information;