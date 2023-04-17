import constants from "./constants";

const api_Link = () => {
    if (constants.API_MODE == "dev") {
        return process.env.X_API_LOCAL_SERVER
    }
    else if (constants.API_MODE == "staging") {
        return process.env.X_API_STAGING
    } 
     else {
        return process.env.X_API_SERVER
    }
}

const appLink = {
    "LOGIN": "/login",
    "REGISTER": "/register",
    "PARTNERS": "/partners",
    "PARTNER_PROFILE": "/partners/profile",
    "HOME": "/home",
    "DASHBOARD": "/dashboard",
    "LOANDETAILS": "/loandetails",
    "API_URL": api_Link(),
    "COINRABBIT_API": process.env.X_API_COINRABBIT,
    "COINGECKO_API": process.env.X_API_COINGECKO
}

export default appLink;