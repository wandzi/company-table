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
        categoryAscending: true,
      },
      filter: '',
    }
    this.inputFilter = this.inputFilter.bind(this);
    this.sortById = this.sortById.bind(this);
    this.sortByAlphabeticalOrder = this.sortByAlphabeticalOrder.bind(this);
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

  sortByAlphabeticalOrder(key) {
    this.setState({
      companies: this.state.companies.sort( (a, b) => {
        let textA = a[key].toUpperCase();
        let textB = b[key].toUpperCase();
        if (this.state.direction.categoryAscending === true) {
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        } else {
          return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
        }
      }),
      direction: {
        categoryAscending: !this.state.direction.categoryAscending,
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
          sortByAlphabeticalOrder={this.sortByAlphabeticalOrder} 
        />
      </div>
    )
  }
}

export default App;