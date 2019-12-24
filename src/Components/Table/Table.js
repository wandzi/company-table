import React, { Component } from 'react';
import CompanyTotalIncome from '../CompanyTotalIncome/CompanyTotalIncome';
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
        return company.name.indexOf(filter) >= 0
      })
      .map( company => {
        return (

          <tr className="hover-row" key={company.id}>
              <th>{company.id}</th>
              <th>{company.name}</th>
              <th>{company.city}</th>
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
            </tr>
        </thead>
        {companiesRowList}
      </table>
    );
  }  
}

export default Table;
