import React, { Component } from 'react';
import styled from 'styled-components';
import { useState } from "react";

const CompanySearch = ({ setCompanyInfoObj }) => {
        

    const [NipNumber, setNipNumber] = useState('');
    const [Date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const request = { NipNumber, Date, };

        console.log(request);

        fetch('https://localhost:44333/api/company', {
            mode: 'cors',    
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(request)
        })
        .then( response => response.json())
        .then(data => {
            console.log(data);
            setCompanyInfoObj(data.result.companyInfo);
        });
    }

    return(
        <CompanyInfoContainer>
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-5 text-center">
                        <label>Numer NIP</label>
                        <input type="text" value={NipNumber} onChange={(e) => setNipNumber(e.target.value)} />
                    </div>
                    <div className="col-md-4 text-center">
                        <label>Data</label>
                        <input type="text" placeholder="2023-05-12" value={Date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div className="col-md-3 text-center button-container">
                        <button>Szukaj</button>
                    </div>
                </div>
                <hr />
            </form>
        </div>
        </CompanyInfoContainer>
    )
}

export default CompanySearch;

const CompanyInfoContainer = styled.div`
.container{
    margin-top: 50px;
}

h3 {
    padding: 10px;
}
input{
    width: 100%;
    background: none;
    padding: 10px;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 3px;
}

.error{
    color: red;
}

.button-container{
    display: flex;
    align-items: flex-end;

}

.hide-class{
    display: none;
}

button{
    width: 100%;
    height: 46px;
    border-radius: 3px;
    background-color: black;
    color: rgb(255, 242, 0);
    font-weight : bold ;
    border: 1px solid rgb(0, 0, 0);
    cursor: pointer;
}
button:hover{
    color: white;
    transition: linear 300ms;
}
`