import React from "react";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import WaspContent from "./WaspContent";
import SideMenu from "../SideMenu/SideMenu";
import Axios from "axios";

import waspLogo from "../../../assets/wasp.png";

const Wasp = () => {
  const [inactive, setInactive] = useState(false);
  // const [waspList, setWaspList] = useState([]);

  // const getWaspList = () => {
  //   Axios.get("http://localhost:3001/waspclient").then((response) => {
  //     setWaspList(response.data);
  //   });
  // };

  return (
    <div className={`con ${inactive ? "con-act" : ""}`}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <div className="Wasp">
        <div className="Wasp__header">
          <div className="logo">
            <img src={waspLogo} alt="Wasp Logo" />
          </div>
        </div>
        <div className="Wasp__content">
          <WaspContent />
          {/* waspList={waspList} getList={getWaspList}  */}
        </div>
      </div>
    </div>
  );
};

export default Wasp;
