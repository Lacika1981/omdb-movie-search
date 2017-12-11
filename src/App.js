import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import Information from './Information'

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.handleSearch = this
      .handleSearch
      .bind(this);
    this.state = {}
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
      .catch(error => alert(`Error ${error}`));
  }

  handleResetState(e){
    e.preventDefault();
    this.setState = {};
  }

  render() {
    return (
      <div>
        <Header/>
        <Search handleSearch={this.handleSearch}/>
        <Information value={this.state}/>
      </div>
    );
  }

}

export default App;
