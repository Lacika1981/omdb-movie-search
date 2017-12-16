import React, {Component} from 'react';
import Header from './Header';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="d-flex flex-column align-items-center mt-5 mb-5">
        <h1>Search:</h1>
        <div>
          <form className="d-flex flex-column" onSubmit={this.props.handleSearch}>
            <input type='text' name='option'/>
            <button className="mt-1">Search for movie</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Search;