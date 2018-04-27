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
                        <div className="col text-center">
                              {props
                                    .moviePosters
                                    .Search
                                    .map(e => <img
                                          src={e.Poster}
                                          className="img-thumbnail"
                                          alt={e.Title}
                                          key={e.imdbID}
                                          onClick={props.handleDetail}/>)}
                        </div>
                  </div>

            </div>
      )
}

export default Information;