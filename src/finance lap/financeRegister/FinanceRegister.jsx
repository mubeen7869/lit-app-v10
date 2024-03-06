import React, { useState } from "react";

import "./FinanceRegister.css";

// import { vendorDetails } from "../http-common";

export default function FinanceRegister() {
  const [Finance_serno, SetFinance_serno] = useState("");

  const [Discription, SetDiscription] = useState("");

  const [BaseAmount, SetBaseamount] = useState("");

  const [Gstvalue, SetGstvalue] = useState("");

  const [Tdsvalue, SetTdsValve] = useState("");

  const [emailId, SetEmailid] = useState("");

  const [InvoiceName, SetInvoicename] = useState("");

  const [BankAccNO, SetBankAccNO] = useState("");

  const [IfscCode, SetIfscCode] = useState("");

  const [TotalAmount, SetTotalAmount] = useState("");

  const [AdditionalDoc, SetAdditionalDoc] = useState(null);

  const [UploadInvoice, SetUploadInvoice] = useState(null);

  const [successMessage, setSuccessMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = () => {};

  const resetFormFields = () => {};

  return (
    <div className="financemain">
            <h4 className="heading">Finance Registration</h4>     {" "}
      {/* Section: Registration */}     {" "}
      <div className="form-section">
               {" "}
        <form onSubmit={handleFormSubmit}>
                   {" "}
          <div className="firstsix">
                       {" "}
            <div className="leftcol">
                           {" "}
              <div className="side_by_side">
                               {" "}
                <div>
                                   {" "}
                  <label htmlFor="vendorId">Invoice Serial no</label>           
                     {" "}
                </div>
                               {" "}
                <div style={{ marginLeft: "-90px" }}>
                                   {" "}
                  <input
                    type="text"
                    name="vendorId"
                    id="vendorId"
                    value={Finance_serno}
                    onChange={(e) => SetFinance_serno(e.target.value)}
                    pattern="[0-9]*"
                    title="Vendor ID must contain only numbers"
                    required
                  />
                                 {" "}
                </div>
                             {" "}
              </div>
                           {" "}
              <div className="side_by_side">
                               {" "}
                <div>
                                   {" "}
                  <label htmlFor="candidateName">Invoice Name</label>           
                     {" "}
                </div>
                               {" "}
                <div style={{ marginLeft: "-90px" }}>
                                   {" "}
                  <input
                    type="text"
                    name="candidateName"
                    id="candidateName"
                    value={InvoiceName}
                    onChange={(e) => SetInvoicename(e.target.value)}
                    pattern="[A-Za-z\s]+"
                    title="Candidate Name must contain only letters"
                    required
                  />
                                 {" "}
                </div>
                             {" "}
              </div>
                           {" "}
              <div className="side_by_side">
                               {" "}
                <div>
                                   {" "}
                  <label htmlFor="rateCard">Description</label>               {" "}
                </div>
                               {" "}
                <div style={{ marginLeft: "-90px" }}>
                                   {" "}
                  <input
                    type="text"
                    name="rateCard"
                    id="rateCard"
                    value={Discription}
                    onChange={(e) => SetDiscription(e.target.value)}
                    pattern="[0-9]*"
                    title="Rate card must contain only numbers"
                    required
                  />
                                 {" "}
                </div>
                             {" "}
              </div>
                           {" "}
              <div className="side_by_side">
                               {" "}
                <div>
                                   {" "}
                  <label htmlFor="firstReviewed">Base Amount</label>           
                     {" "}
                </div>
                               {" "}
                <div style={{ marginLeft: "-90px" }}>
                                   {" "}
                  <input
                    type="text"
                    name="firstReviewed"
                    id="firstReviewed"
                    value={BaseAmount}
                    onChange={(e) => SetBaseamount(e.target.value)}
                    pattern="[A-Za-z\s]+"
                    title="firstReviewed must contain only letters"
                    required
                  />
                                 {" "}
                </div>
                             {" "}
              </div>
                           {" "}
              <div className="side_by_side">
                               {" "}
                <div>
                                    <label htmlFor="jobType">GST 18%</label>   
                             {" "}
                </div>
                               {" "}
                <div style={{ marginLeft: "-90px" }}>
                                   {" "}
                  <input
                    type="text"
                    name="jobType"
                    id="jobType"
                    value={Gstvalue}
                    onChange={(e) => SetGstvalue(e.target.value)}
                    pattern="[A-Za-z\s]+"
                    title="jobType must contain only letters"
                    required
                  />
                                 {" "}
                </div>
                             {" "}
              </div>
                           {" "}
              <div className="side_by_side">
                               {" "}
                <div>
                                    <label htmlFor="payRoll">TDS 2%</label>     
                           {" "}
                </div>
                               {" "}
                <div style={{ marginLeft: "-90px" }}>
                                   {" "}
                  <input
                    type="text"
                    name="payRoll"
                    id="payRoll"
                    value={Tdsvalue}
                    onChange={(e) => SetTdsValve(e.target.value)}
                    pattern="[0-9]*"
                    title="Rate card must contain only numbers"
                    required
                  />
                                 {" "}
                </div>
                             {" "}
              </div>
                           {" "}
              <div className="side_by_side">
                               {" "}
                <div>
                                    <label htmlFor="jobType">Email Id</label>   
                             {" "}
                </div>
                               {" "}
                <div style={{ marginLeft: "-90px" }}>
                                   {" "}
                  <input
                    type="text"
                    name="jobType"
                    id="jobType"
                    value={emailId}
                    onChange={(e) => SetEmailid(e.target.value)}
                    pattern="[A-Za-z\s]+"
                    title="jobType must contain only letters"
                    required
                  />
                                 {" "}
                </div>
                             {" "}
              </div>
                           {" "}
              <div className="side_by_side">
                               {" "}
                <div>
                                    <label htmlFor="jobType">Bank Acc No</label>
                                 {" "}
                </div>
                               {" "}
                <div style={{ marginLeft: "-90px" }}>
                                   {" "}
                  <input
                    type="text"
                    name="jobType"
                    id="jobType"
                    value={BankAccNO}
                    onChange={(e) => SetBankAccNO(e.target.value)}
                    pattern="[A-Za-z\s]+"
                    title="jobType must contain only letters"
                    required
                  />
                                 {" "}
                </div>
                             {" "}
              </div>
                           {" "}
              <div className="side_by_side">
                               {" "}
                <div>
                                    <label htmlFor="jobType">IFSC Code</label> 
                               {" "}
                </div>
                               {" "}
                <div style={{ marginLeft: "-90px" }}>
                                   {" "}
                  <input
                    type="text"
                    name="jobType"
                    id="jobType"
                    value={IfscCode}
                    onChange={(e) => SetIfscCode(e.target.value)}
                    pattern="[A-Za-z\s]+"
                    title="jobType must contain only letters"
                    required
                  />
                                 {" "}
                </div>
                             {" "}
              </div>
                           {" "}
              <div className="side_by_side">
                               {" "}
                <div>
                                   {" "}
                  <label htmlFor="jobType">Total Amount</label>               {" "}
                </div>
                               {" "}
                <div style={{ marginLeft: "-90px" }}>
                                   {" "}
                  <input
                    type="text"
                    name="jobType"
                    id="jobType"
                    value={TotalAmount}
                    onChange={(e) => SetTotalAmount(e.target.value)}
                    pattern="[A-Za-z\s]+"
                    title="jobType must contain only letters"
                    required
                  />
                                 {" "}
                </div>
                             {" "}
              </div>
                           {" "}
              <div className="side_by_side">
                               {" "}
                <div>
                                   {" "}
                  <label htmlFor="cvFormat" style={{ width: "200px" }}>
                                        Invoice Pdf                  {" "}
                  </label>
                                 {" "}
                </div>
                               {" "}
                <div style={{ marginLeft: "-90px" }}>
                                   {" "}
                  <input
                    type="file"
                    name="cvFormat"
                    id="cvFormat"
                    accept=".doc, .docx"
                    onChange={(e) => {
                      const file = e.target.files[0];

                      const fileName = file ? file.name.toLowerCase() : "";

                      const allowedExtensions = [".doc", ".docx"];

                      const extension = fileName.substring(
                        fileName.lastIndexOf(".")
                      );

                      if (!allowedExtensions.includes(extension)) {
                        e.target.value = ""; // Clear the file input

                        setErrorMessage(
                          "Please upload a Word document (.doc or .docx) only."
                        );

                        return;
                      }

                      SetUploadInvoice(file);

                      setErrorMessage("");
                    }}
                    required
                  />
                                   {" "}
                  {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
                                 {" "}
                </div>
                             {" "}
              </div>
                           {" "}
              <div className="side_by_side">
                               {" "}
                <div>
                                   {" "}
                  <label htmlFor="cvFormat" style={{ width: "200px" }}>
                                        Aditional Documents                  {" "}
                  </label>
                                 {" "}
                </div>
                               {" "}
                <div style={{ marginLeft: "-90px" }}>
                                   {" "}
                  <input
                    type="file"
                    name="cvFormat"
                    id="cvFormat"
                    accept=".doc, .docx"
                    onChange={(e) => {
                      const file = e.target.files[0];

                      const fileName = file ? file.name.toLowerCase() : "";

                      const allowedExtensions = [".doc", ".docx"];

                      const extension = fileName.substring(
                        fileName.lastIndexOf(".")
                      );

                      if (!allowedExtensions.includes(extension)) {
                        e.target.value = ""; // Clear the file input

                        setErrorMessage(
                          "Please upload a Word document (.doc or .docx) only."
                        );

                        return;
                      }

                      SetAdditionalDoc(file);

                      setErrorMessage("");
                    }}
                    required
                  />
                                   {" "}
                  {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
                                 {" "}
                </div>
                             {" "}
              </div>
                         {" "}
            </div>
                        <div className="rightcol"></div>         {" "}
          </div>
                    <br />         {" "}
          <button type="submit" className="vendorsubmit">
                        Submit          {" "}
          </button>
                 {" "}
        </form>
             {" "}
      </div>
           {" "}
      {successMessage && <p className="success-message">{successMessage}</p>}   
        {errorMessage && <p className="error-message">{errorMessage}</p>}   {" "}
    </div>
  );
}


