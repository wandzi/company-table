import React, { Component } from 'react';
import CompanyTotalIncome from '../CompanyTotalIncome/CompanyTotalIncome';
import CompanyAverageIncome from '../CompanyAverageIncome/CompanyAverageIncome';
import CompanyLastMonthIncome from '../CompanyLastMonthIncome/CompanyLastMonthIncome';
import './Table.css';


class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  render() {
    const { companies, filter} = this.props;

    const companiesRowList = companies && companies
      .filter( company => {
        return [company.name.toLowerCase().indexOf(filter.toLowerCase()) && company.city.toLowerCase().indexOf(filter.toLowerCase())]  >= 0
      })
      .map( company => {
        return (

          <tr className="hover-row" key={company.id}>
              <th>{company.id}</th>
              <th>{company.name}</th>
              <th>{company.city}</th>
              <CompanyTotalIncome companyID={company.id}/>
              <CompanyAverageIncome companyID={company.id}/>
              <CompanyLastMonthIncome companyID={company.id}/>
          </tr>

        );
      });

    return (
      <table className="table">
        <thead>
            <tr>
              <th onClick={this.props.sortById}>ID</th>
              <th onClick={() => this.props.sortByAlphabeticalOrder('name')}>Name</th>
              <th onClick={() => this.props.sortByAlphabeticalOrder('city')}>Cities</th>
              <th>Total income</th>
              <th>Average income</th>
              <th>Company last month income</th>
            </tr>
        </thead>
        {companiesRowList}
      </table>
    );
  }  
}

export default Table;
