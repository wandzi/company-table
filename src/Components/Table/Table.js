import React, { Component } from 'react';
import CompanyTotalIncome from '../CompanyTotalIncome/CompanyTotalIncome';
import './Table.css';
import axios from 'axios';

class Table extends Component {
  constructor(props){
      super(props);
      this.state = {
        companies: null,
      }
  }
    
  componentDidMount() {   
    axios.get("https://recruitment.hal.skygate.io/companies")
    .then(res => {
      this.setState({companies: res.data});
    })
  }

  render() {
    const CompaniesRow = this.state.companies && this.state.companies.map( company => {
        return (
          <tr key={company.id}>
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
