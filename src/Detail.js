import React, {Component} from 'react';

const Detail = (props) => {
   if (props.fullMovieDetail === '') {
      return <div className="text-center mt-4">Click on image for more Information</div>
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
      width: (((props.fullMovieDetail.imdbRating) * 10) / 2) + "%",
      background: this.handleColor((props.fullMovieDetail.imdbRating) * 10)
   }

   return (
      <div className="row">
         <div className="col information-col-one">
            <div>
               <h4>Actors:</h4>
               <p>{props.fullMovieDetail.Actors}</p>
            </div>
            <div>
               <h4>Director:</h4>
               <p>{props.fullMovieDetail.Director}</p>
            </div>
            <div>
               <h4>Metascore:</h4>
               <p>{props.fullMovieDetail.Metascore}</p>
            </div>
            <div>
               <h4>Production:</h4>
               <p>{props.fullMovieDetail.Production}</p>
            </div>
            <div>
               <h4>Released:</h4>
               <p>{props.fullMovieDetail.Released}</p>
            </div>
            <div>
               <h4>imdbRating:</h4>
               <p
                  className="progress-bar"
                  role="progressbar"
                  style={styles}
                  aria-fullMovieDetailnow="75"
                  aria-fullMovieDetailmin="0"
                  aria-fullMovieDetailmax="100">{props.fullMovieDetail.imdbRating}</p>
            </div>
            <div>
               <h4>Plot:</h4>
               <p>{props.fullMovieDetail.Plot}</p>
            </div>
            <div>
               <h4>Awards:</h4>
               <p>{props.fullMovieDetail.Awards}</p>
            </div>
         </div>
      </div>
   )
}

export default Detail;