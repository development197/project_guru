import React from 'react'
import GuruLogo from '../../assets/guruLogo.png'

const LoginHeader = () => {
    return (
        <div className="loginHeader">
              <div className="container">
                   <div className="logo">
                        <img src={GuruLogo} alt="Logo" />
                   </div>
              </div>
        </div>
    )
}

export default LoginHeader;
