import React, { Component } from 'react';
import axios from 'axios';

class CompanyTotalIncome extends Component {
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
        });

    }
    
    render() {
        const totalIncome = this.state.companiesIncome && this.state.companiesIncome.reduce(function(prev, cur) {
            return parseInt(prev) + parseInt(cur.value) ;
          }, 0);
        return(
            <>
                <th>{totalIncome}</th>
            </>
        )
    }
}

export default CompanyTotalIncome