import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import OnceHeader from "../OncePages/OnceHeader";
import Axios from "axios";

const EmailSend = () => {
  const [inactive, setInactive] = useState(false);
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState({
    to: "",
    subject: "",
    description: "",
  });

  const { to, subject, description, image } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:3001/users/", user).then((response) =>
      setMsg(response.data.respMesg)
    );
    console.log("res");
  };

  return (
    <div className={`con ${inactive ? "con-act" : ""}`}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <OnceHeader heading="Send Email" />
      <div className="inner-container">
        <div className="container">
          <div class="row">
            <p class="mb-3 mt-2" style={{ color: "green", marginLeft: "57px" }}>
              <b>{msg}</b>
            </p>
            <div class="back_btn d-flex flex-row-reverse m-3 ">
              <a href="http://localhost:3000/#/StaffMailers">
                {" "}
                <button className="back_btn_input">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-return-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
                    />
                  </svg>
                  Back
                </button>
              </a>
            </div>
            <div className="form-group  mb-4 ">
              <h6>Subject</h6>
              <input
                type="text"
                id="subject_email"
                className="form-control form-control-lg"
                placeholder="Subject"
                name="subject"
                onChange={onInputChange}
                value={subject}
              />
            </div>
            <div className="email_send_textbox">
              <div className="form-group mb-3 " id="email_send_textbox_1">
                <h6 className="email_to_content">Email To</h6>
                <textarea
                  className="form-control form-control-lg"
                  id="email_send_textarea"
                  name="to"
                  rows={8}
                  onChange={onInputChange}
                  value={to}
                ></textarea>
              </div>

              <div className="form-group  mb-4" id="email_send_textbox_1">
                <h6 className="email_send">Email content</h6>
                <textarea
                  type="text"
                  className="form-control form-control-lg email_send"
                  id="email_send_textarea"
                  name="description"
                  rows={8}
                  onChange={onInputChange}
                  value={description}
                />
              </div>
            </div>
            <h6>Browse File</h6>
            <div className="input_file_cc_emailsend">
              <input
                className="input_file_name_emailsend"
                id="input_file_emailsend"
                type="file"
                value={image}
                onChange={onInputChange}
              />
              <p className="ccc">
                <input type="checkbox" className="checkboxx" />
                cc to login id
              </p>
            </div>
          </div>
          <button
            onClick={onSubmit}
            className=" btn-block btn_send_mail"
            id="send_mail"
            style={{ marginLeft: "45%", marginTop: "20px" }}
          >
            Send Mail
          </button>
        </div>
      </div>

      {/* <div className="inner-container">
        <div className="container">
          <div class="row">
            <div className="col-sm-4 mx-auto shadow p-5">
              <h4 className="text-center mb-2">Send E Mail </h4>
              <p
                class="mb-3 mt-2"
                style={{ color: "green", marginLeft: "57px" }}
              >
                <b>{msg}</b>
              </p>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="To"
                  name="to"
                  onChange={onInputChange}
                  value={to}
                />
              </div>
              <div className="form-group  mb-4 ">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Subject"
                  name="subject"
                  onChange={onInputChange}
                  value={subject}
                />
              </div>
              <div className="form-group  mb-4">
                <textarea
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Description"
                  name="description"
                  onChange={onInputChange}
                  value={description}
                />
              </div>
              <input type="file" value={image} onChange={onInputChange} />

              <button
                onClick={onSubmit}
                className="btn btn-primary btn-block "
                style={{ marginLeft: "100px" }}
              >
                Send Mail
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default EmailSend;
