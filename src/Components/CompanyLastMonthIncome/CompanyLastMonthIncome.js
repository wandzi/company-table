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
        return(
            <>
                <th>-</th>
            </>
        )
    }
}

export default CompanyLastMonthIncome