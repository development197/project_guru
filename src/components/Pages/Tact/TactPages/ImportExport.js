import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../../OncePages/OnceHeader";
import Import from "./Import";
import Export from "./Export";

const ImportExport = () => {
  const [active, setActive] = useState("Import");
  const [inactive, setInactive] = useState(false);

  return (
    <div className={`con ${inactive ? "con-act" : ""}`}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <OnceHeader heading="Import & Export Tact" />
      <div className="tact">
        <div className="tact__bar">
          <div className="tact__menu">
            <button className="tact__btn" onClick={() => setActive("Import")}>
              Import
            </button>
            <button className="tact__btn" onClick={() => setActive("Export")}>
              Export
            </button>
          </div>
        </div>
        <div className="tact__main-content">
          {active === "Import" && <Import />}
          {active === "Export" && <Export />}
        </div>
      </div>
    </div>
  );
};

export default ImportExport;
