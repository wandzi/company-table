import React, { Component } from 'react';
import CompanyTotalIncome from '../CompanyTotalIncome/CompanyTotalIncome';
import './Table.css';


class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const companiesRowList = this.props.companies && this.props.companies.map( company => {
        return (
          <tr className="hover-row" key={company.id}>
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
              <th onClick={this.props.sortById}>ID</th>
              <th>Name</th>
              <th>Cities</th>
              <th>Total income</th>
              <th>Average income</th>
              <th>Last month income</th>
            </tr>
        </thead>
        {companiesRowList}
      </table>
    );
  }  
}

export default Table;
