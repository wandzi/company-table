import React, { Component } from 'react';
import './CompanyTotalIncome.css';
import axios from 'axios';

class CompanyIncome extends Component {
    constructor(props){
        super(props);
        this.state = {
            companyID: props.companyID,
            companiesIncome: null,
        }
    }

    componentDidMount() {  
        if (this.state.companyID === 1) { // If statement becouse of I don't have pagination in app yet.. I won't burn my computer.
            axios.get(`https://recruitment.hal.skygate.io/incomes/1`) 
            .then(res => {
                this.setState({companiesIncome: res.data['incomes']});
            })
        } else {
            console.log('Nie jestem id 1');
        }
    }

    render() {
        let incomes = this.state.companiesIncome;
        let totalIncomes = incomes.reduce(function(prev, cur) {
            return prev + cur.value;
          }, 0);
          
        return(
            <>
                    <th>{totalIncomes}</th>
            </>
        )
    }
}

export default CompanyIncome