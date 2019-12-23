import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Table from './Components/Table/Table';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      companies: null,
      direction: {
        id: 'asc',
      },
      filter: '',
    }
    this.inputFilter = this.inputFilter.bind(this);
    this.sortById = this.sortById.bind(this);
  }
  
  componentDidMount() {   
    axios.get("https://recruitment.hal.skygate.io/companies")
    .then(res => {
      this.setState({companies: res.data});
    })
  }

  inputFilter(event) {
    this.setState({ filter: event.target.value });
  }

  sortById() {
    this.setState({
      companies: this.state.companies.sort( (a, b) => (
        this.state.direction.id === 'asc'
        ? a.id - b.id
        : b.id - a.id
      )),
      direction: {
        id: this.state.direction.id === 'asc'
        ? 'desc'
        : 'asc'
      }
    })
  }

  render() {
    return (
      <div>
        <Header 
          inputOnChange={this.inputFilter}
        />
        <Table 
          companies={this.state.companies} 
          direction={this.state.direction} 
          filter={this.state.filter} 
          sortById={this.sortById} 
        />
      </div>
    )
  }
}

export default App;
