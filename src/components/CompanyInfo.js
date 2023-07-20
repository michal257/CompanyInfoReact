const CompanyInfo = ({companyInfoObj}) => {
    
    
    
    return(
        <div className="container">
            <div className="row>">
                <div className="col-sm-12">
                    <table className="table  table-striped">
                        <thead>
                            <tr>
                                <th className="col-md-3"></th>
                                <th className="col-md-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="col-md-3">Nazwa:</td>
                                <td className="col-md-8 text-center">{companyInfoObj.name}</td>
                            </tr>
                            <tr>
                                <td className="col-md-3">Adres:</td>
                                <td className="col-md-8 text-center">{companyInfoObj.workingAddress}</td>
                            </tr>
                            <tr>
                                <td className="col-md-3">NIP:</td>
                                <td className="col-md-8 text-center">{companyInfoObj.nip}</td>
                            </tr>
                            <tr>
                                <td className="col-md-3">Regon:</td>
                                <td className="col-md-8 text-center">{companyInfoObj.regon}</td>
                            </tr>
                            <tr>
                                <td className="col-md-3">KRS:</td>
                                <td className="col-md-8 text-center">{companyInfoObj.krs}</td>
                            </tr>
                            <tr>
                                <td className="col-md-3">Status VAT:</td>
                                <td className="col-md-8 text-center">{companyInfoObj.statusVat}</td>
                            </tr>
                            <tr>
                                <td className="col-md-3">Data rejestracji:</td>
                                <td className="col-md-8 text-center">{companyInfoObj.registrationLegalDate?.slice(0, 10) || ''}</td>
                            </tr>
                            <tr>
                                <td className="col-md-3">Data werfikacji:</td>
                                <td className="col-md-8 text-center">{companyInfoObj.requestDateTime?.slice(0, 10) || ''}</td>
                            </tr>
                            <tr>
                                <td className="col-md-3">Identyfikator werfikacji:</td>
                                <td className="col-md-8 text-center">{companyInfoObj.requestId}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default CompanyInfo;