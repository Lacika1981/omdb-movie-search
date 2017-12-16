import React, {Component} from 'react';

const Information = (props) => {
      console.log(props);
      if (Object.keys(props.value).length === 0) {
            return <div>Loading...</div>
      }
      if (props.value.Response && props.value.Response === "False") {
            return (
                  <div>
                        <h1>Sorry there is no movie with that title</h1>
                  </div>
            )
      }

      this.handleColor = (e) => {
            let colorBackValue;
            (e > 41 && e < 60)
                  ? colorBackValue = 'rgb(255, 153, 0)'
                  : (e > 61 && e < 80)
                        ? colorBackValue = 'rgb(255, 214, 51)'
                        : e > 81
                              ? colorBackValue = 'rgb(0, 179, 60)'
                              : colorBackValue = 'rgb(153, 0, 0)';
            return colorBackValue;
      }

      const styles = {
            width: (((props.value.imdbRating) * 10) / 2) + "%",
            background: this.handleColor((props.value.imdbRating) * 10)
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
                              <div className="row">
                                    <div className="col information-col-one">
                                          <div>
                                                <h4>Actors:</h4>
                                                <p>{props.value.Actors !== 'N/A' && props.value.Actors}</p>
                                          </div>
                                          <div>
                                                <h4>Director:</h4>
                                                <p>{props.value.Director !== 'N/A' && props.value.Director}</p>
                                          </div>
                                          <div>
                                                <h4>Metascore:</h4>
                                                <p>{props.value.Metascore !== 'N/A' && props.value.Metascore}</p>
                                          </div>
                                          <div>
                                                <h4>Production:</h4>
                                                <p>{props.value.Production !== 'N/A' && props.value.Production}</p>
                                          </div>
                                          <div>
                                                <h4>Released:</h4>
                                                <p>{props.value.Released !== 'N/A' && props.value.Released}</p>
                                          </div>
                                          <div>
                                                <h4>imdbRating:</h4>
                                                <p
                                                      className="progress-bar"
                                                      role="progressbar"
                                                      style={styles}
                                                      aria-valuenow="75"
                                                      aria-valuemin="0"
                                                      aria-valuemax="100">{props.value.imdbRating}</p>
                                          </div>
                                          <div>
                                                <h4>Plot:</h4>
                                                <p>{props.value.Plot !== 'N/A' && props.value.Plot}</p>
                                          </div>
                                          <div>
                                                <h4>Awards:</h4>
                                                <p>{props.value.Awards !== 'N/A' && props.value.Awards}</p>
                                          </div>
                                          <div className="poster-image">
                                                <img src={props.value.Poster} className="img-fluid" alt={props.value.Title}/>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Information;