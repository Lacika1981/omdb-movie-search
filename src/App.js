import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.handleSearch = this
      .handleSearch
      .bind(this);
  }
  state = {
    data: {
      Title: 'Undefined'
    }
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?t=alien&apikey=7f555475`)
      .then(response => response.json())
      .then(data => this.setState({data}))
  }

  handleSearch(e) {
    e.preventDefault();
    const option = e.target.elements.option.value;
    fetch(`http://www.omdbapi.com/?t=${option}&apikey=7f555475`)
      .then(response => response.json())
      .then(data => this.setState({data}))
      .then(() => console.log(this.state))
  }

  render() {
    return (
      <div>
        <Header value={this.state}/>
        <div>
          <h1>Search:</h1>
          <div>
            <form onSubmit={this.handleSearch}>
              <input type='text' name='option'/>
              <button>Search for movie</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
