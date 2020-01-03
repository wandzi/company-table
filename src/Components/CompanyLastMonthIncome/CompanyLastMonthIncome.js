import React, { Component } from 'react';
import axios from 'axios';

class CompanyLastMonthIncome extends Component {
    constructor(props){
        super(props);
        this.state = {
            companyID: props.companyID,
            companiesIncome: '',
        }
    }

    componentDidMount() {  
       
        axios.get(`https://recruitment.hal.skygate.io/incomes/${this.state.companyID}`) 
        .then(res => {
            this.setState({companiesIncome: res.data.incomes});
        })

    }
    
    render() {
        const today = new Date();
        let lastMonth = today.getMonth() - 1;
        let relevantYear = today.getYear();
        
        if (lastMonth === -1) {
          relevantYear--;
          lastMonth = 11;
        }
        
        const lastMonthTotalIncome = this.state.companiesIncome && this.state.companiesIncome
        .filter(i => {
            const date = new Date(i.date);
            return date.getMonth() === lastMonth && date.getYear() === relevantYear;
          })
        .reduce((prev, curr) => prev + parseFloat(curr.value), 0);
        
        const lastMonthTotalIncomeValue = Number(lastMonthTotalIncome);
        let roundedValue = lastMonthTotalIncomeValue.toFixed(2);
        roundedValue = Number(roundedValue);

        if(roundedValue === 0) {
            roundedValue = '-';
        }

        return(
            <>
                <th>{roundedValue}</th>
            </>
        )
    }
}

export default CompanyLastMonthIncome