import React, { Component } from 'react';
import CompanyTotalIncome from '../CompanyTotalIncome/CompanyTotalIncome';
import './Table.css';
import axios from 'axios';

class Table extends Component {
  constructor(props){
    super(props);
    this.state = {
      companies: null,
      direction: {
        id: 'asc',
      }
    }
    this.sortBy = this.sortById.bind(this);
  }
    
  componentDidMount() {   
    axios.get("https://recruitment.hal.skygate.io/companies")
    .then(res => {
      this.setState({companies: res.data});
    })
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
    const CompaniesRow = this.state.companies && this.state.companies.map( company => {
        return (
          <tr>
              <th>{company.id}</th>
              <th>{company.name}</th>
              <th>{company.city}</th>
              <CompanyTotalIncome companyID={company.id}/>
              <th>Average income</th>
              <th>Last month income</th>
          </tr>
        )
    })
    return (
      <table className="table">
      <thead>
          <tr>
            <th onClick={() => this.sortById()}> 
              ID
            </th>
            <th>Name</th>
            <th>Cities</th>
            <th>Total income</th>
            <th>Average income</th>
            <th>Last month income</th>
          </tr>
      </thead>
          {CompaniesRow}
      </table>
    );
  }  
}

export default Table;
