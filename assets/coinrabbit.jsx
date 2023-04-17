import axios from "axios"
import appLink from "./urls";
const qs = require('qs');

const getAssets = () => {
    var config = {
        method: 'GET',
        url: appLink.API_URL + "loans/assets",
        headers: {
            'Authorization': process.env.X_AUTH
        },
    };
    return axios(config);
}

const getLoanEstimateCol = (data) => {
    var config = {
        method: 'GET',
        url: appLink.API_URL + "loans/estimate?" + data,   
        headers: {
            'Authorization': process.env.X_AUTH
        },  
    };
    return axios(config);
}

const getLoan = (data) => {
    var loanData = qs.stringify({     
        'parameters': JSON.stringify(data),       
    });
    var config = {
        method: 'POST',
        url: appLink.API_URL + "loans/create_loan",
        data: loanData,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': process.env.X_AUTH
        },
    };
    return axios(config);
}

const valiadateWalletAddress = (data) => {
    var config = {
        method: 'POST',
        url: appLink.API_URL + "loans/Validate_Wallet_Address",
        data: data, 
        headers: {
            'Authorization': process.env.X_AUTH
        },      
    };
    return axios(config);
}

const handleLoanConfirm = (loanId, address, userEmail) => {
    var loanData = qs.stringify({     
        'loan_id': loanId, 
        'receive_address' : address,
        'email' :   userEmail   
    });
    var config = {
        method: 'POST',
        data: loanData,
        url: appLink.API_URL + "loans/confirm_loan", 
        headers: {
            'Authorization': process.env.X_AUTH
        },      
    };
    return axios(config);
}

const getLoanStatus = (loanId) => {    
    var loanData = qs.stringify({     
        'loan_id': loanId,        
    });
    var config = {
        method: 'POST',
        url: appLink.API_URL + 'loans/get_loan_status',
        data: loanData,
        headers: {
            'Authorization': process.env.X_AUTH
        },
    };
    return axios(config);
}

const getToken = () => {
    var config = {
        method: 'GET',
        url: appLink.API_URL + 'loans/partner',
        data: {
            'external_id': '1234567890',
        },  
        headers: {
            'Authorization': process.env.X_AUTH
        }     
    };
    return axios(config);
}

const saveUser = (token) => {
    var config = {
        method: 'PUT',
        url: appLink.COINRABBIT_API + 'users',
        data: {
            "subscribe_email": "crypto-loan@lyotrade.com",
            "subscribe_phone": "11111111111"
        },
        headers: {
            'x-api-key': process.env.X_API_KEY,
            'x-user-token': token,
            'Content-Type': 'application/json',
        },
    };
    return axios(config);
}

const repay = (id, walletAddress) => {
    var loanData = qs.stringify({     
        'loan_id': id, 
        'address' : walletAddress,        
    });   

    var config = {
        method: 'POST',
        data: loanData,
        url: appLink.API_URL + 'loans/pledge',
        headers: {
            'Authorization': process.env.X_AUTH
        },
       
    };
    return axios(config);
}

const calculate = (amount, id) => {
    var loanData = qs.stringify({     
        'loan_id': id, 
        'amount' : amount,        
    });
    var config = {
        method: 'POST',
        data: loanData,
        url: appLink.API_URL + 'loans/deposit_estimate', 
        headers: {
            'Authorization': process.env.X_AUTH
        },      
    };
    return axios(config);
}

const sendAmount = (amount, id) => {
    var loanData = qs.stringify({     
        'loan_id': id, 
        'amount' : amount,        
    });
    var config = {
        method: 'POST',
        url: appLink.API_URL + 'loans/save_increase',
        data: loanData, 
        headers: {
            'Authorization': process.env.X_AUTH
        },      
    };
    return axios(config);
}

const Coinrabbit = {
    "getAssets": getAssets,
    "getLoanEstimateCol": getLoanEstimateCol,
    "getLoan": getLoan,
    "valiadateWalletAddress": valiadateWalletAddress,
    "handleLoanConfirm": handleLoanConfirm,
    "getLoanStatus": getLoanStatus,
    "getToken": getToken,
    "saveUser": saveUser,
    "repay": repay,
    "calculate": calculate,
    "sendAmount": sendAmount
}

export default Coinrabbit