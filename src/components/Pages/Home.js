import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../Contex/UserAuthContex";
import { useLocation } from "react-router-dom";
import SideMenu from "./SideMenu/SideMenu";

import Wasp from "./Wasp/Wasp";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const [inactive, setInactive] = useState(false);

  // const {
  //   state: { name },
  // } = useLocation();

  return (
    <div className={`con ${inactive ? "con-act" : ""}`}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <div className="welcomePage">
        <div className="welcomePage__content">
          <h2>Welcome</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
