import React, {Component} from 'react';

const Information = (props) => {
      if (Object.keys(props.value).length === 0) {
            return <div>Loading...</div>
      }
      if (props.value.data.Response && props.value.data.Response === "False") {
            return (
                  <div>
                        <h1>Sorry there is no movie with that title</h1>
                  </div>
            )
      }

      this.handleColor = () => {
            return 'red';
      }

      const styles = {
            width: ((props.value.data.imdbRating) * 10) +"%",
            background: this.handleColor()
      }

      return (
            <div className="container information">
                  <div className="row">
                        <div className="col-md-9">
                              <div className="text-center movieTitle">
                                    <h4>Movie title:</h4>
                                    <p className="pInline">{props.value.data.Title}</p>
                                    <p className="pInline">({props.value.data.Year})</p>
                              </div>
                              <div className="row">
                                    <div className="col-md-6 information-col-one">
                                          <h4>Actors:</h4>
                                          <p>{props.value.data.Actors}</p>
                                          <h4>Director:</h4>
                                          <p>{props.value.data.Director}</p>
                                          <h4>Metascore:</h4>
                                          <p>{props.value.data.Metascore}</p>
                                          <h4>Production:</h4>
                                          <p>{props.value.data.Production}</p>
                                          <h4>Released:</h4>
                                          <p>{props.value.data.Released}</p>
                                          <h4>imdbRating:</h4>
                                          <p className="progress-bar" role="progressbar" style={styles} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{props.value.data.imdbRating}</p>
                                    </div>
                                    <div className="col-md-6 information-col-two">
                                          <h4>Plot:</h4>
                                          <p className="text-justify">{props.value.data.Plot}</p>
                                          <h4>Awards:</h4>
                                          <p>{props.value.data.Awards}</p>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <img src={props.value.data.Poster} className="img-fluid" alt='poster'/>
                        </div>
                  </div>
            </div>
      )
}

export default Information;