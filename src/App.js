import React, {Component} from 'react';
import Header from './Header';
import Search from './Search';
import Information from './Information'
import './styles/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.handleSearch = this
      .handleSearch
      .bind(this);
    this.state = {
      data: {}
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
      .catch(error => alert(`Error ${error}`));
  }

  render() {
    return (
      <div>
      <div className="container">
        <Header/>
        </div>
        <Search handleSearch={this.handleSearch}/>
        <Information value={this.state.data}/>
      </div>
    );
  }

}

export default App;
