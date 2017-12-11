import React, {Component} from 'react';
import Header from './Header';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Search:</h1>
        <div>
          <form onSubmit={this.props.handleSearch}>
            <input type='text' name='option'/>
            <button>Search for movie</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Search;