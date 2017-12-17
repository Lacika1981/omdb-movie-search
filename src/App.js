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
      this.handleDetail = this
      .handleDetail
      .bind(this);
    this.state = {
      data: [],
      selectedMovie: null
    }
    };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?s=alien&apikey=7f555475`)
      .then(response => response.json())
      .then(data => this.setState({data: data, selectedMovie: data.Search[0]}))
  }

  handleSearch(e) {
    e.preventDefault();
    const option = e.target.elements.option.value;
    fetch(`http://www.omdbapi.com/?s=${option}&apikey=7f555475`)
      .then(response => response.json())
      .then(data => this.setState({data: data, selectedMovie: data.Search[0]}))
      .catch(error => alert(`Error ${error}`));
  }

  handleDetail(e){
    e.preventDefault();
    console.log(e.target.alt);
  }

  render() {
    return (
      <div>
      <div className="container">
        <Header/>
        </div>
        <Search handleSearch={this.handleSearch}/>
        <Information value={this.state.selectedMovie}
        handleDetail={this.handleDetail}/>
      </div>
    );
  }

}

export default App;
