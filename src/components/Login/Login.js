import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
//import { Button } from "react-bootstrap";
//import GoogleButton from "react-google-button";
//import { useUserAuth } from "../../Contex/UserAuthContex";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginHeader from "./LoginHeader";
import Axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  //const [loginData, setLoginData] = useState([]);

  const logIn = () => {
    Axios.post("http://localhost:3001/login", {
      user_email: userEmail,
      user_password: userPassword,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else if (userEmail === "" || userPassword === "") {
        setLoginStatus("Please Enter data");
      } else {
        sessionStorage.setItem("accessToken", response.data);
        setLoginStatus("Login Successful");
        navigate("/home");
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <LoginHeader />
      <div className="login">
        <div className="log">
          <div className="login-container">
            <h2 className="mb-3">Login Details</h2>
            <div className="p-4 box">
              {loginStatus && <Alert variant="danger">{loginStatus}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <label>Email</label>
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <label>Password</label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <button className="login-btn" onClick={logIn} type="submit">
                    LogIn
                  </button>
                </div>
              </Form>
              <hr />
              <div>
                {/* {loginData.map((val, key) => {
                  return (
                      <p> {val.user_email}</p>
                      <p>{val.user_password}</p>
                    </>
                  );
                })} */}
              </div>
            </div>
            {/* <div className="p-4 box mt-3 text-center">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
