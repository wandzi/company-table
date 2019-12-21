import React, { Component } from 'react';
import './Table.css';
import axios from 'axios';

class Table extends Component {
  constructor(props){
      super(props);
      this.state = {
        companies: null,
        companiesIncomes: null,
      }
  }
    
  componentDidMount() {   
    axios.get("https://recruitment.hal.skygate.io/companies")
    .then(res => {
      this.setState({companies: res.data});
    })
  }

  getCompanyIncomes(company) {
    axios.get(`https://recruitment.hal.skygate.io/incomes/${company.id}`)
    .then(res => {
        // this.setState({companiesIncomes: res.data});   
    })
  }

  render() {
    const CompaniesRow = this.state.companies && this.state.companies.map( company => {
        this.getCompanyIncomes(company);
        return (
            <tr key={company.id}>
                <th>{company.id}</th>
                <th>{company.name}</th>
                <th>{company.city}</th>
            </tr>
        )
    })
    return (
        <div className="overflow">
            <table className="table">
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Cities</th>
                <th>Total income</th>
                <th>Average income</th>
                <th>Last month income</th>
                </tr>
            </thead>
                {CompaniesRow}
            </table>
        </div> 
    );
  }  
}

export default Table;
