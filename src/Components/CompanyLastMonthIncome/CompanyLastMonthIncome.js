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
        /*
        // Calculations to get last month
        const currentDate = new Date();
        const month = currentDate.getMonth();
        currentDate.setMonth(currentDate.getMonth() - 1);
        while (currentDate.getMonth() === month) {
            currentDate.setDate(currentDate.getDate() - 1);
        }
        // Last month date in miliseconds
        let lastMonthInMiliseconds = currentDate.getTime();
        //Current Date in miliseconds
        let currentDateInMiliseconds = new Date();
        currentDateInMiliseconds.getTime();

        const totalIncome = this.state.companiesIncome && this.state.companiesIncome;

            totalIncome.filter(({date}) => date.getTime() >= lastMonthInMiliseconds)
            .reduce((prev, cur) => prev + cur.value);
        */
        return(
            <>
                <th>-</th>
            </>
        )
    }
}

export default CompanyLastMonthIncome