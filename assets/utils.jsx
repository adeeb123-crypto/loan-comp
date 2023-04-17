import axios from "axios"
import Swal from "sweetalert2";
import appLink from "./urls";

const qs = require('qs');

const enable2fa = (email, loan_id) => {
    var config = {
        method: 'POST',
        url: appLink.API_URL + 'customers/get_customer_2fa',
        data: {
            'email': email,
            'loan_id': loan_id
        },
    };
    return axios(config);
}

const verify2fa = (otp, email, loan_id) => {
    var config = {
        method: 'POST',
        url: appLink.API_URL + 'customers/verify_the_code',
        data: {
            'code': otp,
            'email': email,
            'loan_id': loan_id
        },
    };
    return axios(config);
}

const loanstoreData = (data) => {
    var config = {
        method: 'POST',
        url: appLink.API_URL + 'mstloan/save_loan',
        data: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },

    };
    return axios(config);
}

const verifyEmail = (sendOTP = false, otpcode = null, userEmail = "") => {
    let config = {}

    if (sendOTP) {
        config = {
            method: 'POST',
            url: appLink.API_URL + "customers/send_token",
            data: {
                'email': userEmail,
            },
        };
    } else {
        config = {
            method: 'POST',
            url: appLink.API_URL + 'customers/verify_otp_email',
            data: {
                'email': userEmail,
                'token': otpcode
            },
        };
    }
    return axios(config);
}

const updateLoan = (loan_id, loanData, emailStatus) => {
    if (loan_id && loan_id != 0 && loanData) {
        var data = qs.stringify({
            'email': "",
            'loan_id': loan_id,
            'loanDetails': JSON.stringify(loanData),
            'email_status': emailStatus
        });
        var config = {
            method: 'POST',
            url: appLink.API_URL + "mstloan/update_loan",
            data: data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },

        };
        return axios(config);
    }
}

function getOTP(id, walletAddress) {
    var data = qs.stringify({
        'wallet_address': walletAddress,
        'loan_id': id
    });
    var config = {
        method: 'POST',
        data: data,
        url: appLink.API_URL + "customers/customer_repay",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    };
    return axios(config);
}

function sendOTP(id, otp) {
    var data = qs.stringify({
        'token': otp,
        'loan_id': id
    });
    var config = {
        method: 'POST',
        data: data,
        url: appLink.API_URL + "customers/customer_verify_token",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    };
    return axios(config);
}

const getNewMstLoanData = (token) => {
    var config = {
        method: 'POST',
        url: appLink.API_URL + "mstloan/get_new_mst_loan_by_token",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': token,
        },
    };
    return axios(config);
}

const Loan_History_Email = (email) => {
    if(email.length == 0) {
      return
    }
    var data = qs.stringify({
      'email': email,

    });
    var config = {
      method: 'POST',
      url: appLink.API_URL + "mstloan/Loan_History_Email",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };
    return axios(config);
}

const getSweetAlert = (title = "", text = "", icon = "", showCancelButton = true, confirmButtonText = "Yes, Go Back!") => {
    return Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: showCancelButton,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmButtonText
    })
}

const iniFrame = () => {
      
    if(window !== window.parent) {
        // !== operator checks whether the operands
        // are of not equal value or not equal type
        return true
    }
    else {
        return false
    }
}
  

const Utils = {
    "enable2fa": enable2fa,
    "verify2fa": verify2fa,
    "loanstoreData": loanstoreData,
    "verifyEmail": verifyEmail,
    "updateLoan": updateLoan,
    "getOTP": getOTP,
    "sendOTP": sendOTP,
    "getNewMstLoanData":getNewMstLoanData,
    "Loan_History_Email": Loan_History_Email,
    "getSweetAlert": getSweetAlert,
    "iniFrame": iniFrame
}

export default Utils
