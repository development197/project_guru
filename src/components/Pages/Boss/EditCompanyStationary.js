import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import OnceHeader from "../OncePages/OnceHeader";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Axios from "axios";

const EditCompanyStationary = () => {
  //---------------------Declaring States----------------------------
  const [inactive, setInactive] = useState(false);
  const [hide, setHide] = useState(false);

  //---------------------Calling API----------------------------

  const {
    state: {
      quotation_header,
      companyName,
      companies_id,
      quotation_footer,
      invoice_header,
      invoice_footer,
      company_logo,
      company_icon,
      signature_image,
      contact_person,
      email_id,
      skype_id,
      address,
      mobile_no,
      invoice_prefix,
      quotation_prefix,
      website,
      price_addition,
      beneficiary_name,
      bank_name,
      bank_account,
      ifsc_code,
      bank_address,
      other_info,
      paypal,
      skill,
    },
  } = useLocation();

  //---------------------Basic Information----------------------------
  // const [companyId, setCompanyId] = useState(companies_id);
  const [quotationHeader, setQuotationHeader] = useState(quotation_header);
  const [quotationFooter, setQuotationFooter] = useState(quotation_footer);
  const [invoiceHeader, setInvoiceHeader] = useState(invoice_header);
  const [invoiceFooter, setInvoiceFooter] = useState(invoice_footer);
  const [companyLogo, setCompanyLogo] = useState(company_logo);
  const [companyIcon, setCompanyIcon] = useState(company_icon);
  const [signatureImage, setSignatureImage] = useState(signature_image);
  const [contactPerson, setContactPerson] = useState(contact_person);
  const [emailId, setEmailId] = useState(email_id);
  const [editAddress, setAddress] = useState(address);
  const [mobileNo, setMobileNo] = useState(mobile_no);
  const [invoicePrefix, setInvoicePrefix] = useState(invoice_prefix);
  const [quotationPrefix, setQuotationPrefix] = useState(quotation_prefix);
  const [skype, setSkype] = useState(skype_id);
  const [edit_website, setWebsite] = useState(website);
  const [priceAddition, setPriceAddition] = useState(price_addition);
  const [beneficiaryName, setBeneficiaryName] = useState(beneficiary_name);
  const [bankName, setBankName] = useState(bank_name);
  const [bankAccountNo, setBankAccountNo] = useState(bank_account);
  const [bankIfscCode, setBankIfscCode] = useState(ifsc_code);
  const [bankAddress, setBankAddress] = useState(bank_address);
  const [otherInfo, setOtherInfo] = useState(other_info);
  const [paypalId, setPaypalId] = useState(paypal);
  const [editSkill, setSkill] = useState(skill);
  //const [currencyUsed, setCurrencyUsed] = useState("");

  //---------------------------------Email Design------------------------------
  const [orangeBorder, setOrangeBorder] = useState("");
  const [whiteBorder, setWhiteBorder] = useState("");
  const [greenBorder, setGreenBorder] = useState("");
  const [borderType, setBorderType] = useState("");
  const [borderWidth, setBorderWidth] = useState("");
  const [letterColour, setLetterColour] = useState("");
  const [fontFamily, setFontFamily] = useState("");
  const [fontColour, setFontColour] = useState("");
  const [fontSize, setFontSize] = useState("");
  const [logoAlignment, setLogoAlignment] = useState("");
  const [signAlignment, setSignAlignment] = useState("");
  const [disclaimerAlignment, setDisclaimerAlignment] = useState("");
  const [signatureField, setSignatureField] = useState([]);

  //---------------------------------wasp letters------------------------------
  const [enquiryStatusD, setEnquiryStatusD] = useState();
  const [enquiryStatusF, setEnquiryStatusF] = useState();
  const [enquiryContent, setEnquiryContent] = useState([]);
  const [offerStatusD, setOfferStatusD] = useState();
  const [offerStatusF, setOfferStatusF] = useState();
  const [offerContent, setOfferContent] = useState([]);
  const [acceptanceStatusD, setAcceptanceStatusD] = useState();
  const [acceptanceStatusF, setAcceptanceStatusF] = useState();
  const [acceptanceContent, setAcceptanceContent] = useState("");
  const [wipStatusD, setWipStatusD] = useState();
  const [wipStatusF, setWipStatusF] = useState();
  const [wipContent, setWipContent] = useState("");
  const [delayStatusD, setDelayStatusD] = useState();
  const [delayStatusF, setDelayStatusF] = useState();
  const [delayContent, setDelayContent] = useState("");
  const [workCheckStatusD, setWorkCheckStatusD] = useState();
  const [workCheckStatusF, setWorkCheckStatusF] = useState();
  const [workCheckContent, setWorkCheckContent] = useState("");
  const [workOrderStatusD, setWorkOrderStatusD] = useState();
  const [workOrderStatusF, setWorkOrderStatusF] = useState();
  const [workOrderContent, setWorkOrderContent] = useState("");
  const [correctionStatusD, setCorrectionStatusD] = useState();
  const [correctionStatusF, setCorrectionStatusF] = useState();
  const [correctionContent, setCorrectionContent] = useState("");
  const [submissionStatusD, setSubmissionStatusD] = useState();
  const [submissionStatusF, setSubmissionStatusF] = useState();
  const [submissionContent, setSubmissionContent] = useState("");
  const [reSubmissionStatusD, setReSubmissionStatusD] = useState();
  const [reSubmissionStatusF, setReSubmissionStatusF] = useState();
  const [reSubmissionContent, setReSubmissionContent] = useState("");
  const [cancelClientStatusD, setCancelClientStatusD] = useState();
  const [cancelClientStatusF, setCancelClientStatusF] = useState();
  const [cancelClientContent, setCancelClientContent] = useState("");
  const [cancelTranslatorStatusD, setCancelTranslatorStatusD] = useState();
  const [cancelTranslatorStatusF, setCancelTranslatorStatusF] = useState();
  const [cancelTranslatorContent, setCancelTranslatorContent] = useState("");
  const [paymentClientStatusD, setPaymentClientStatusD] = useState();
  const [paymentClientStatusF, setPaymentClientStatusF] = useState();
  const [paymentClientContent, setPaymentClientContent] = useState("");
  const [paymentTranslatorStatusD, setPaymentTranslatorStatusD] = useState();
  const [paymentTranslatorStatusF, setPaymentTranslatorStatusF] = useState();
  const [paymentTranslatorContent, setPaymentTranslatorContent] = useState("");
  const [disclaimerStatusD, setDisclaimerStatusD] = useState();
  const [disclaimerStatusF, setDisclaimerStatusF] = useState();
  const [disclaimerContent, setDisclaimerContent] = useState("");
  const [additionalStatusD, setAdditionalStatusD] = useState();
  const [additionalStatusF, setAdditionalStatusF] = useState();
  const [additionalContent, setAdditionalContent] = useState("");
  const [qualityCheckStatusD, setQualityCheckStatusD] = useState();
  const [qualityCheckStatusF, setQualityCheckStatusF] = useState();
  const [qualityCheckContent, setQualityCheckContent] = useState("");

  const editOurCompany = (companies_id) => {
    Axios.post(
      `http://localhost:3001/edit/ourCompany/basicInfo/${companies_id}`,
      {
        quotationHeader: quotationHeader,
        quotationFooter: quotationFooter,
        invoiceHeader: invoiceHeader,
        invoiceFooter: invoiceFooter,
        companyLogo: companyLogo,
        companyIcon: companyIcon,
        signatureImage: signatureImage,
        contactPerson: contactPerson,
        emailId: emailId,
        editAddress: editAddress,
        mobileNo: mobileNo,
        invoicePrefix: invoicePrefix,
        quotationPrefix: quotationPrefix,
        skype: skype,
        edit_website: edit_website,
        priceAddition: priceAddition,
        beneficiaryName: beneficiaryName,
        bankName: bankName,
        bankAccountNo: bankAccountNo,
        bankIfscCode: bankIfscCode,
        bankAddress: bankAddress,
        otherInfo: otherInfo,
        paypalId: paypalId,
        editSkill: editSkill,
      }
    ).then((e) => {
      console.log("success");
      window.alert("Successfully Updated basic info");
    });
  };

  // const editEmailDesign = (companies_id) => {
  //   Axios.post(
  //     `http://localhost:3001/edit/ourCompany/emailDesign/${companies_id}`,
  //     {
  //       orangeBorder: orangeBorder,
  //       whiteBorder: whiteBorder,
  //       greenBorder: greenBorder,
  //       borderType: borderType,
  //       borderWidth: borderWidth,
  //       letterColour: letterColour,
  //       fontFamily: fontFamily,
  //       fontColour: fontColour,
  //       fontSize: fontSize,
  //       logoAlignment: logoAlignment,
  //       signAlignment: signAlignment,
  //       disclaimerAlignment: disclaimerAlignment,
  //       signatureField: signatureField,
  //     }
  //   ).then((e) => {
  //     console.log("success");
  //     window.alert("Successfully Updated basic info");
  //   });
  // };

  // const editWaspLetters = (companies_id) => {
  //   Axios.post(
  //     `http://localhost:3001/edit/ourCompany/waspLetters/${companies_id}`,
  //     {
  //       // enquiryStatusD: enquiryStatusD,
  //       // enquiryStatusF: enquiryStatusF,
  //       enquiryContent: enquiryContent,
  //     }
  //   ).then((e) => {
  //     console.log("success");
  //     window.alert("Successfully Updated");
  //   });
  // };

  const update = (companies_id) => {
    editOurCompany(companies_id);
    // editWaspLetters(companies_id);
  };

  //-----------------------------------Property API's-----------------------------------
  const [propertyData, setPropertyData] = useState([]);
  const [data, setData] = useState();
  const getProperty = (companies_id) => {
    Axios.get(
      `http://localhost:3001/edit/ourCompany/propertyInfo/${companies_id}`
    ).then((response) => {
      setPropertyData(response.data);
    });
  };

  const [property, setProperty] = useState("");
  const addProperty = (companies_id) => {
    Axios.post(
      `http://localhost:3001/edit/ourCompany/addProperty/${companies_id}`,
      {
        property: property,
      }
    ).then(() => {
      console.log("Property Successfully Added");
      // window.location.reload();
    });
  };

  const deleteProperty = (property_id) => {
    Axios.delete(
      `http://localhost:3001/edit/ourCompany/deleteProperty/${property_id}`
    ).then(() => {
      console.log("Property Successfully Deleted");
      window.location.reload();
    });
  };

  //-----------------------------------Wasp letters API's-----------------------------------
  const getWaspLetter = (companies_id) => {
    Axios.post(`http://localhost:3001/waspCompanyLetter/${companies_id}`).then(
      (response) => {
        let inp = document.querySelectorAll("#value_letter");
        inp.forEach((val) => {
          //------------------------Enquiry Letter------------------------
          let enquiryLetter = response.data.find(
            (e) => e.letter_label === "Enquiry Received"
          );
          if (enquiryLetter.letter_type === "D") {
            setEnquiryStatusD(true);
            setEnquiryContent(enquiryLetter.content);
          } else {
            setEnquiryStatusF(true);
            setEnquiryContent(enquiryLetter.content);
          }

          let makeOffer = response.data.find(
            (e) => e.letter_label === "Make Offer"
          );
          if (makeOffer.letter_type === "D") {
            setOfferStatusD(true);
            setOfferContent(makeOffer.content);
          } else {
            setOfferStatusF(true);
            setOfferContent(makeOffer.content);
          }

          let acceptance = response.data.find(
            (e) => e.letter_label === "Accept order"
          );
          if (acceptance.letter_type === "D") {
            setAcceptanceStatusD(true);
            setAcceptanceContent(acceptance.content);
          } else {
            setAcceptanceStatusF(true);
            setAcceptanceContent(acceptance.content);
          }

          let wip = response.data.find(
            (e) => e.letter_label === "Confirmed work in Progress"
          );
          if (wip.letter_type === "D") {
            setWipStatusD(true);
            setWipContent(wip.content);
          } else {
            setWipStatusF(true);
            setWipContent(wip.content);
          }

          let delay = response.data.find(
            (e) => e.letter_label === "Inform Work Delay"
          );
          if (delay.letter_type === "D") {
            setDelayStatusD(true);
            setDelayContent(delay.content);
          } else {
            setDelayStatusF(true);
            setDelayContent(delay.content);
          }

          let work_check = response.data.find(
            (e) => e.letter_label === "Work Check"
          );
          if (work_check.letter_type === "D") {
            setWorkCheckStatusD(true);
            setWorkCheckContent(work_check.content);
          } else {
            setWorkCheckStatusF(true);
            setWorkCheckContent(work_check.content);
          }

          let work_order = response.data.find(
            (e) => e.letter_label === "Work Order"
          );
          if (work_order.letter_type === "D") {
            setWorkOrderStatusD(true);
            setWorkOrderContent(work_order.content);
          } else {
            setWorkOrderStatusF(true);
            setWorkOrderContent(work_order.content);
          }

          let correction = response.data.find(
            (e) => e.letter_label === "Correction to Client"
          );
          if (correction.letter_type === "D") {
            setCorrectionStatusD(true);
            setCorrectionContent(correction.content);
          } else {
            setCorrectionStatusD(true);
            setCorrectionContent(correction.content);
          }

          let submission = response.data.find(
            (e) => e.letter_label === "Submission"
          );
          if (submission.letter_type === "D") {
            setSubmissionStatusD(true);
            setSubmissionContent(submission.content);
          } else {
            setSubmissionStatusF(true);
            setSubmissionContent(submission.content);
          }

          let re_submission = response.data.find(
            (e) => e.letter_label === "Resubmission to Client"
          );
          if (re_submission.letter_type === "D") {
            setReSubmissionStatusD(true);
            setReSubmissionContent(re_submission.content);
          } else {
            setReSubmissionStatusF(true);
            setReSubmissionContent(re_submission.content);
          }

          let cancel_client = response.data.find(
            (e) => e.letter_label === "Cancellation to Client"
          );
          if (cancel_client.letter_type === "D") {
            setCancelClientStatusD(true);
            setCancelClientContent(cancel_client.content);
          } else {
            setCancelClientStatusF(true);
            setCancelClientContent(cancel_client.content);
          }

          let cancel_translator = response.data.find(
            (e) => e.letter_label === "Cancellation to Translator"
          );
          if (cancel_translator.letter_type === "D") {
            setCancelTranslatorStatusD(true);
            setCancelTranslatorContent(cancel_translator.content);
          } else {
            setCancelTranslatorStatusF(true);
            setCancelTranslatorContent(cancel_translator.content);
          }

          let pay_client = response.data.find(
            (e) => e.letter_label === "Cancellation to Translator"
          );
          if (pay_client.letter_type === "D") {
            setPaymentClientStatusD(true);
            setPaymentClientContent(pay_client.content);
          } else {
            setPaymentClientStatusF(true);
            setPaymentClientContent(pay_client.content);
          }

          let pay_translator = response.data.find(
            (e) => e.letter_label === "Payment to Translators"
          );
          if (pay_translator.letter_type === "D") {
            setPaymentTranslatorStatusD(true);
            setPaymentTranslatorContent(pay_translator.content);
          } else {
            setPaymentTranslatorStatusF(true);
            setPaymentTranslatorContent(pay_translator.content);
          }

          let disclaimer = response.data.find(
            (e) => e.letter_label === "Disclaimer"
          );
          if (disclaimer.letter_type === "D") {
            setDisclaimerStatusD(true);
            setDisclaimerContent(disclaimer.content);
          } else {
            setDisclaimerStatusF(true);
            setDisclaimerContent(disclaimer.content);
          }

          let additional = response.data.find(
            (e) => e.letter_label === "Additional"
          );
          if (additional.letter_type === "D") {
            setAdditionalStatusD(true);
            setAdditionalContent(additional.content);
          } else {
            setAdditionalStatusF(true);
            setAdditionalContent(additional.content);
          }

          let quality_check = response.data.find(
            (e) => e.letter_label === "Quality Check"
          );
          if (quality_check.letter_type === "D") {
            setQualityCheckStatusD(true);
            setQualityCheckContent(quality_check.content);
          } else {
            setQualityCheckStatusF(true);
            setQualityCheckContent(quality_check.content);
          }
        });
      }
    );
  };

  const LettersProperty = (companies_id) => {
    getProperty(companies_id);
    getWaspLetter(companies_id);
  };

  return (
    <div
      className={`con ${inactive ? "con-act" : ""}`}
      onLoad={() => LettersProperty(companies_id)}
    >
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <div className="stationary-header">
        <div className="stationary-heading">
          <h1>EDIT OUR COMPANIES & STATIONERY</h1>
        </div>
      </div>
      <div className="inner-container">
        <div className="edit-company-head">
          <h3>EDIT OUR COMPANIES & STATIONERY</h3>
          <Link to="/CompanyStationary">
            {" "}
            <button className="edit-back-btn">
              {" "}
              <span>
                <i className="bi bi-arrow-left"></i>
              </span>{" "}
              Back
            </button>
          </Link>
        </div>
        <div className="search-form">
          <div className="add-heading">
            <h3>BASIC INFORMATION</h3>
          </div>
          <form>
            <div className="search-input">
              <div className="search-inp">
                <label>Company Name</label>
                <input
                  type="text"
                  placeholder="Company Name"
                  value={companyName}
                />
              </div>

              <div className="search-inp">
                <label>Quotation Header</label>
                <br />
                <img src={`../../../../image/${quotation_header}`} />
                <input
                  type="file"
                  className="photo-inp-file"
                  onChange={(e) => setQuotationHeader(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Quotation Footer</label>
                <br />
                <img src={quotation_footer} />
                <input
                  type="file"
                  className="photo-inp-file"
                  onChange={(e) => setQuotationFooter(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Invoice Header</label>
                <br />
                <img src={invoice_header} />
                <input
                  type="file"
                  className="photo-inp-file"
                  onChange={(e) => setInvoiceHeader(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Invoice Footer</label>
                <br />
                <img src={invoice_footer} />
                <input
                  type="file"
                  className="photo-inp-file"
                  onChange={(e) => setInvoiceFooter(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Company Logo</label>
                <br />
                <img src={company_logo} />
                <input
                  type="file"
                  className="photo-inp-file"
                  onChange={(e) => setCompanyLogo(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Company Icon</label>
                <br />
                <img src={company_icon} />
                <input
                  type="file"
                  className="photo-inp-file"
                  onChange={(e) => setCompanyIcon(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Signature Image</label>
                <br />
                <img src={signature_image} />
                <input
                  type="file"
                  className="photo-inp-file"
                  onChange={(e) => setSignatureImage(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Contact Person</label>
                <input
                  type="text"
                  placeholder="Contact Person"
                  defaultValue={contact_person}
                  onChange={(e) => setContactPerson(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Email ID</label>
                <input
                  type="email"
                  placeholder="Email ID"
                  defaultValue={email_id}
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Skype Id</label>
                <input
                  type="text"
                  placeholder="Skype Id"
                  defaultValue={skype_id}
                  onChange={(e) => setSkype(e.target.value)}
                />
              </div>
              <div className="search-inp">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  defaultValue={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="search-inp">
                <label>Mobile No.</label>
                <input
                  type="text"
                  placeholder="Position"
                  defaultValue={mobile_no}
                  onChange={(e) => setMobileNo(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Invoice Prefix</label>
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Invoice Prefix"
                  defaultValue={invoice_prefix}
                  onChange={(e) => setInvoicePrefix(e.target.value)}
                ></textarea>
              </div>

              <div className="search-inp">
                <label>Quotation Prefix</label>
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Quotation Prefix"
                  defaultValue={quotation_prefix}
                  onChange={(e) => setQuotationPrefix(e.target.value)}
                ></textarea>
              </div>

              {/* <div className="search-inp">
                <label>Skype</label>
                <input type="text" placeholder="Skype" />
              </div> */}

              <div className="search-inp">
                <label>Website</label>
                <input
                  type="text"
                  placeholder="Website"
                  defaultValue={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Price Addition</label>
                <input
                  type="text"
                  placeholder="Price Addition"
                  defaultValue={price_addition}
                  onChange={(e) => setPriceAddition(e.target.value)}
                />
              </div>

              <div className="search-inp">
                {/*  <input type="text" placeholder="Google Calander Embed Code" /> */}
              </div>
            </div>

            <div className="add-heading">
              <h3>PAYMENT DETAILS</h3>
            </div>

            <div className="search-input">
              <div className="search-inp">
                <label>Benificiary Name</label>
                <input
                  type="text"
                  placeholder="Benificiary Name"
                  defaultValue={beneficiary_name}
                  onChange={(e) => setBeneficiaryName(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Bank Name</label>
                <input
                  type="text"
                  placeholder="Bank Name"
                  defaultValue={bank_name}
                  onChange={(e) => setBankName(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Bank Account No.</label>
                <input
                  type="text"
                  placeholder="Bank Account No"
                  defaultValue={bank_account}
                  onChange={(e) => setBankAccountNo(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Bank IFSC Code</label>
                <input
                  type="text"
                  placeholder="Bank IFSC Code"
                  defaultValue={ifsc_code}
                  onChange={(e) => setBankIfscCode(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Bank Address</label>
                <textarea
                  placeholder="Bank Address"
                  cols="30"
                  rows="10"
                  defaultValue={bank_address}
                  onChange={(e) => setBankAddress(e.target.value)}
                ></textarea>
              </div>

              <div className="search-inp">
                <label>Other Information</label>
                <input
                  type="text"
                  placeholder="Other Information"
                  defaultValue={other_info}
                  onChange={(e) => setOtherInfo(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>PayPal</label>
                <input
                  type="text"
                  placeholder="-"
                  defaultValue={paypal}
                  onChange={(e) => setPaypalId(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Skill</label>
                <input
                  type="text"
                  placeholder="-"
                  defaultValue={skill}
                  onChange={(e) => setSkill(e.target.value)}
                />
              </div>

              <div className="search-inp">
                {/* <label>PayPal Id</label>
                                 <input type="text" placeholder="PayPal Id" /> */}
              </div>
            </div>

            <div className="add-heading">
              <h3>EMAIL DESIGN</h3>
            </div>

            <div className="search-input">
              <div className="search-inp">
                <label>Orange Border Color :</label>
                <select
                  className="search-select"
                  onChange={(e) => setOrangeBorder(e.target.value)}
                >
                  <option>Select</option>
                  <option value="red">Red</option>
                  <option value="maroon">Maroon</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                  <option value="green">Green</option>
                  <option value="lime">Lime</option>
                  <option value="blue">Blue</option>
                  <option value="purple">Purple</option>
                  <option value="black">Black</option>
                  <option value="gray">Gray</option>
                </select>
              </div>

              <div className="search-inp">
                <label>White Border Color :</label>
                <select
                  className="search-select"
                  onChange={(e) => setWhiteBorder(e.target.value)}
                >
                  <option>Select</option>
                  <option value="red">Red</option>
                  <option value="maroon">Maroon</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                  <option value="green">Green</option>
                  <option value="lime">Lime</option>
                  <option value="blue">Blue</option>
                  <option value="purple">Purple</option>
                  <option value="black">Black</option>
                  <option value="gray">Gray</option>
                </select>
              </div>

              <div className="search-inp">
                <label>Green Border Color :</label>
                <select
                  className="search-select"
                  onChange={(e) => setGreenBorder(e.target.value)}
                >
                  <option>Select</option>
                  <option value="red">Red</option>
                  <option value="maroon">Maroon</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                  <option value="green">Green</option>
                  <option value="lime">Lime</option>
                  <option value="blue">Blue</option>
                  <option value="purple">Purple</option>
                  <option value="black">Black</option>
                  <option value="gray">Gray</option>
                </select>
              </div>

              <div className="search-inp">
                <label>Border Type :</label>
                <select
                  className="search-select"
                  onChange={(e) => setBorderType(e.target.value)}
                >
                  <option>Select</option>
                  <option value="solid">Solid</option>
                  <option value="dotted">Dotted</option>
                  <option value="dashed">Dashed</option>
                </select>
              </div>

              <div className="search-inp">
                <label>Border Width :</label>
                <select
                  className="search-select"
                  onChange={(e) => setBorderWidth(e.target.value)}
                >
                  <option>Select</option>
                  <option value="1">1px</option>
                  <option value="2">2px</option>
                  <option value="3">3px</option>
                  <option value="4">4px</option>
                  <option value="5">5px</option>
                </select>
              </div>

              <div className="search-inp">
                <label>Letter Color :</label>
                <select
                  className="search-select"
                  onChange={(e) => setLetterColour(e.target.value)}
                >
                  <option>Select</option>
                  <option value="red">Red</option>
                  <option value="maroon">Maroon</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                  <option value="green">Green</option>
                  <option value="lime">Lime</option>
                  <option value="blue">Blue</option>
                  <option value="purple">Purple</option>
                  <option value="black">Black</option>
                  <option value="gray">Gray</option>
                </select>
              </div>

              <div className="search-inp">
                <label>Font Family :</label>
                <select
                  className="search-select"
                  onChange={(e) => setFontFamily(e.target.value)}
                >
                  <option value="Select">Select</option>
                </select>
              </div>

              <div className="search-inp">
                <label>Font Color :</label>
                <select
                  className="search-select"
                  onChange={(e) => setFontColour(e.target.value)}
                >
                  <option>Select</option>
                  <option value="red">Red</option>
                  <option value="maroon">Maroon</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                  <option value="green">Green</option>
                  <option value="lime">Lime</option>
                  <option value="blue">Blue</option>
                  <option value="purple">Purple</option>
                  <option value="black">Black</option>
                  <option value="gray">Gray</option>
                </select>
              </div>

              <div className="search-inp">
                <label>Font Size :</label>
                <select
                  className="search-select"
                  onChange={(e) => setFontSize(e.target.value)}
                >
                  <option>Select</option>
                  <option value="size">10</option>
                  <option value="size">12</option>
                  <option value="size">14</option>
                  <option value="size">16</option>
                  <option value="size">18</option>
                  <option value="size">20</option>
                </select>
              </div>

              <div className="search-inp">
                <label>Logo Alignment :</label>
                <select
                  className="search-select"
                  onChange={(e) => setLogoAlignment(e.target.value)}
                >
                  <option>Select</option>
                  <option value="left">Left</option>
                  <option value="center">Center</option>
                  <option value="right">Right</option>
                </select>
              </div>

              <div className="search-inp">
                <label>Signature Alignment :</label>
                <select
                  className="search-select"
                  onChange={(e) => setSignAlignment(e.target.value)}
                >
                  <option>Select</option>
                  <option value="left">Left</option>
                  <option value="center">Center</option>
                  <option value="right">Right</option>
                </select>
              </div>

              <div className="search-inp">
                <label>Disclaimer Alignment :</label>
                <select
                  className="search-select"
                  onChange={(e) => setDisclaimerAlignment(e.target.value)}
                >
                  <option value="Select">Select</option>
                  <option value="left">Left</option>
                  <option value="center">Center</option>
                  <option value="right">Right</option>
                </select>
              </div>

              <div className="search-inp"></div>

              <div className="search-inp signature-field-txt">
                <label>Signature Field :</label>
                <input
                  type="checkbox"
                  className="signature-field-check"
                  value="name"
                  onChange={(e) => setSignatureField(e.target.value)}
                />{" "}
                Name
                <input
                  type="checkbox"
                  className="signature-field-check"
                  value="name"
                  onChange={(e) => setSignatureField(e.target.value)}
                />{" "}
                Position
                <input
                  type="checkbox"
                  className="signature-field-check"
                  value="email"
                  onChange={(e) => setSignatureField(e.target.value)}
                />{" "}
                Email Id
                <input
                  type="checkbox"
                  className="signature-field-check"
                  value="mobile"
                  onChange={(e) => setSignatureField(e.target.value)}
                />{" "}
                Mobile
                <input
                  type="checkbox"
                  className="signature-field-check"
                  value="skype"
                  onChange={(e) => setSignatureField(e.target.value)}
                />{" "}
                Skype Id
                <input
                  type="checkbox"
                  className="signature-field-check"
                  value="website"
                  onChange={(e) => setSignatureField(e.target.value)}
                />{" "}
                Website
                <input
                  type="checkbox"
                  className="signature-field-check"
                  value="company_name"
                  onChange={(e) => setSignatureField(e.target.value)}
                />{" "}
                Company Name
                <input
                  type="checkbox"
                  className="signature-field-check"
                  value="address"
                  onChange={(e) => setSignatureField(e.target.value)}
                />{" "}
                Address
              </div>
            </div>

            <div className="add-heading">
              <h3>WASP LETTERS</h3>
            </div>

            <div className="edit-company-letter">
              <div className="edit-company-letter__grid">
                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>Enquiry : </label>
                    <input
                      type="radio"
                      id="value_letter"
                      name="enquiry"
                      value="F"
                      className="search-radio"
                      defaultChecked={enquiryStatusF}
                      onChange={(e) => setEnquiryStatusF(e.target.value)}
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      name="enquiry"
                      value="D"
                      className="search-radio"
                      defaultChecked={enquiryStatusD}
                      onChange={(e) => setEnquiryStatusD(e.target.value)}
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setEnquiryContent(e.target.value)}
                        defaultValue={enquiryContent}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>Offer : </label>
                    <input
                      type="radio"
                      id="value_letter"
                      name="offer"
                      value="F"
                      className="search-radio"
                      defaultChecked={offerStatusF}
                      onChange={(e) => setOfferStatusF(e.target.value)}
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      name="offer"
                      value="D"
                      className="search-radio"
                      defaultChecked={offerStatusD}
                      onChange={(e) => setOfferStatusD(e.target.value)}
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setOfferContent(e.target.value)}
                        defaultValue={offerContent}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>Acceptance :</label>
                    <input
                      type="radio"
                      id="value_letter"
                      name="acceptance"
                      value="F"
                      defaultChecked={acceptanceStatusF}
                      onChange={(e) => setAcceptanceStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      name="acceptance"
                      value="D"
                      defaultChecked={acceptanceStatusD}
                      onChange={(e) => setAcceptanceStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        id="value_letter"
                        defaultValue={acceptanceContent}
                        cols="30"
                        rows="10"
                        onChange={(e) => setAcceptanceContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>WIP :</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={wipStatusF}
                      name="wip"
                      value="F"
                      onChange={(e) => setWipStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={wipStatusD}
                      name="wip"
                      value="no"
                      onChange={(e) => setWipStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        id="value_letter"
                        defaultValue={wipContent}
                        cols="30"
                        rows="10"
                        onChange={(e) => setWipContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>Delay :</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={delayStatusF}
                      name="delay"
                      value="F"
                      onChange={(e) => setDelayStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label>Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={delayStatusD}
                      name="delay"
                      value="D"
                      onChange={(e) => setDelayStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label>Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={delayContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setDelayContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>Work Check :</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={workCheckStatusF}
                      name="work_check"
                      value="F"
                      onChange={(e) => setWorkCheckStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={workCheckStatusD}
                      name="work_check"
                      value="D"
                      onChange={(e) => setWorkCheckStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={workCheckContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setWorkCheckContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>Work Order :</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={workOrderStatusF}
                      name="work_order"
                      value="F"
                      onChange={(e) => setWorkOrderStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={workOrderStatusD}
                      name="work_order"
                      value="D"
                      onChange={(e) => setWorkOrderStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={workOrderContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setWorkOrderContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>Correction :</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={correctionStatusF}
                      name="correction"
                      value="F"
                      onChange={(e) => setCorrectionStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={correctionStatusD}
                      name="correction"
                      value="D"
                      onChange={(e) => setCorrectionStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={correctionContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setCorrectionContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>Submission :</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={submissionStatusF}
                      name="submission"
                      value="F"
                      onChange={(e) => setSubmissionStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={submissionStatusD}
                      name="submission"
                      value="D"
                      onChange={(e) => setSubmissionStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={submissionContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setSubmissionContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>{`Re-submission :`}</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={reSubmissionStatusF}
                      name="re_submission"
                      value="F"
                      onChange={(e) => setReSubmissionStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={reSubmissionStatusD}
                      name="re_submiss"
                      value="D"
                      onChange={(e) => setReSubmissionStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={reSubmissionContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setReSubmissionContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>{`Cancellation - Client :`}</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={cancelClientStatusF}
                      name="cancel_client"
                      value="F"
                      onChange={(e) => setCancelClientStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={cancelClientStatusD}
                      name="cancel_client"
                      value="D"
                      onChange={(e) => setCancelClientStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={cancelClientContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setCancelClientContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>{`Cancellation - Translator : `}</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={cancelTranslatorStatusF}
                      name="cancel_translator"
                      value="F"
                      onChange={(e) =>
                        setCancelTranslatorStatusF(e.target.value)
                      }
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={cancelTranslatorStatusD}
                      name="cancel_translator"
                      value="D"
                      onChange={(e) =>
                        setCancelTranslatorStatusD(e.target.value)
                      }
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={cancelTranslatorContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) =>
                          setCancelTranslatorContent(e.target.value)
                        }
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>{`Payment – Client : `}</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={paymentClientStatusF}
                      name="pay_client"
                      value="F"
                      onChange={(e) => setPaymentClientStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={paymentClientStatusD}
                      name="pay_client"
                      value="D"
                      onChange={(e) => setPaymentClientStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        id="value_letter"
                        defaultValue={paymentClientContent}
                        cols="30"
                        rows="10"
                        onChange={(e) =>
                          setPaymentClientContent(e.target.value)
                        }
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>{`Payment – Translator :`}</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={paymentTranslatorStatusF}
                      name="pay_translator"
                      value="F"
                      onChange={(e) =>
                        setPaymentTranslatorStatusF(e.target.value)
                      }
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={paymentTranslatorStatusD}
                      name="pay_translator"
                      value="D"
                      onChange={(e) =>
                        setPaymentTranslatorStatusD(e.target.value)
                      }
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={paymentTranslatorContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) =>
                          setPaymentTranslatorContent(e.target.value)
                        }
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>Disclaimer :</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={disclaimerStatusF}
                      name="disclaimer"
                      value="F"
                      onChange={(e) => setDisclaimerStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={disclaimerStatusD}
                      name="disclaimer"
                      value="D"
                      onChange={(e) => setDisclaimerStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={disclaimerContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setDisclaimerContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>Additional : </label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={additionalStatusF}
                      name="additional"
                      value="F"
                      onChange={(e) => setAdditionalStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={additionalStatusD}
                      name="additional"
                      value="D"
                      onChange={(e) => setAdditionalStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={additionalContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setAdditionalContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>Quality Check :</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={qualityCheckStatusF}
                      name="quality_check"
                      value="F"
                      onChange={(e) => setQualityCheckStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={qualityCheckStatusD}
                      name="quality_check"
                      value="D"
                      onChange={(e) => setQualityCheckStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={qualityCheckContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setQualityCheckContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="search-button">
              <button className="s-btn" onClick={() => update(companies_id)}>
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="self__task">
          <h2>Add Property</h2>
          <div className="search">
            <form>
              <div className="title">
                <p>Property Name :</p>
              </div>
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Property Name"
                  onChange={(e) => setProperty(e.target.value)}
                />
                <button
                  className="search-btn st-bg-btn"
                  onClick={() => addProperty(companies_id)}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="selfTask-table">
          <div className="overflow-table">
            <table className="selfTask-table-data">
              <thead>
                <tr>
                  <th className="st-bg">Sr.No</th>
                  <th className="st-bg">Property Name</th>
                  <th className="st-bg">Action</th>
                </tr>
              </thead>
              <tbody>
                {propertyData.map((val, key) => {
                  return (
                    <tr>
                      <td>{val.serial_number}</td>
                      <td>{val.name}</td>
                      <td>
                        <i
                          class="bi bi-trash"
                          style={{ cursor: "pointer" }}
                          onClick={() => deleteProperty(val.property_id)}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

//       offerStatusD: offerStatusD,
//       offerStatusF: offerStatusF,
//       offerContent: offerContent,
//       acceptanceStatusD: acceptanceStatusD,
//       acceptanceStatusF: acceptanceStatusF,
//       acceptanceContent: acceptanceContent,
//       wipStatusD: wipStatusD,
//       wipStatusF: wipStatusF,
//       wipContent: wipContent,
//       delayStatusD: delayStatusD,
//       delayStatusF: delayStatusF,
//       delayContent: delayContent,
//       workCheckStatusD: workCheckStatusD,
//       workCheckStatusF: workCheckStatusF,
//       workCheckContent: workCheckContent,
//       workOrderStatusD: workOrderStatusD,
//       workOrderStatusF: workOrderStatusF,
//       workOrderContent: workOrderContent,
//       correctionStatusD: correctionStatusD,
//       correctionStatusF: correctionStatusF,
//       correctionContent: correctionContent,
//       submissionStatusD: submissionStatusD,
//       submissionStatusF: submissionStatusF,
//       submissionContent: submissionContent,
//       reSubmissionStatusD: reSubmissionStatusD,
//       reSubmissionStatusF: reSubmissionStatusF,
//       reSubmissionContent: reSubmissionContent,
//       cancelClientStatusD: cancelClientStatusD,
//       cancelClientStatusF: cancelClientStatusF,
//       cancelClientContent: cancelClientContent,
//       cancelTranslatorStatusD: cancelTranslatorStatusD,
//       cancelTranslatorStatusF: cancelTranslatorStatusF,
//       cancelTranslatorContent: cancelTranslatorContent,
//       paymentClientStatusD: paymentClientStatusD,
//       paymentClientStatusF: paymentClientStatusF,
//       paymentClientContent: paymentClientContent,
//       paymentTranslatorStatusD: paymentTranslatorStatusD,
//       paymentTranslatorStatusF: paymentTranslatorStatusF,
//       paymentTranslatorContent: paymentTranslatorContent,
//       disclaimerStatusD: disclaimerStatusD,
//       disclaimerStatusF: disclaimerStatusF,
//       disclaimerContent: disclaimerContent,
//       additionalStatusD: additionalStatusD,
//       additionalStatusF: additionalStatusF,
//       additionalContent: additionalContent,
//       qualityCheckStatusD: qualityCheckStatusD,
//       qualityCheckStatusF: qualityCheckStatusF,
//       qualityCheckContent: qualityCheckContent,

export default EditCompanyStationary;
