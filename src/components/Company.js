import React, { Component } from 'react';
import CompanySearch from './CompanySearch'
import CompanyInfo from './CompanyInfo'
import { useState } from "react";

const Company = () => {
    
    const [companyInfoObj, setCompanyInfoObj] = useState({});
    
    return(
        <React.Fragment>
            <CompanySearch setCompanyInfoObj={setCompanyInfoObj} />
            <CompanyInfo companyInfoObj={companyInfoObj} />
        </React.Fragment>
    )
}

export default Company;