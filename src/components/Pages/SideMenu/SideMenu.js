import React, { useState, useEffect } from "react";
import logo from "../../../assets/guruLogo.png";
import Divider from "./Divider";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../../Contex/UserAuthContex";
import { Link } from "react-router-dom";
import Axios from "axios";

import waspIcon from "../../../assets/waspIcon.png";

import MenuItem from "./MenuItem";

import SideContent from "../RightBar/SideContent";

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  //const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  //   const handleLogout = async () => {
  //     try {
  //       await logOut();
  //       navigate("/");
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };

  const logout = () => {
    Axios.get("http://localhost:3001/logout").then((response) => {
      console.log("success");
      //sessionStorage.setItem("accessToken", response.data);
      // navigate("/");
    });
    navigate("/");
  };

  const menuItems = [
    // {
    //     name : 'Dashboard', to : '/home' , iconClass :'icon-dashboard', rightIcon : ''
    // },
    // {
    //     name : 'Wasp' , to : '/Wasp' , iconClass : 'bi bi-robot' , rightIcon : ''
    // },
    {
      name: "Task",
      to: "/Task",
      iconClass: "icon-list-ul",
      rightIcon: "",
    },
    {
      name: "Tact",
      to: "",
      subMenu: [
        {
          name: "Import & Export Tact",
          to: "/ImportedRecords",
        },
        {
          name: "Search Tact",
          to: "/SearchTact",
        },
        {
          name: "Add Tact",
          to: "/AddTact",
        },
      ],
      iconClass: "bi bi-fonts",
      rightIcon: "bi bi-chevron-right tact-right-icon",
    },
    {
      name: "Cost",
      to: "",
      subMenu: [
        {
          name: "SP & Cost",
          to: "/SpCost",
        },

        {
          name: "Checker",
          to: "/Checker",
        },

        {
          name: "Re-Checker",
          to: "/ReChecker",
        },
        {
          name: "Tally Records",
          to: "/Tally",
        },
      ],
      iconClass: "icon-inr icon-rup-mg",
      rightIcon: "bi bi-chevron-right cost-right-icon",
    },
    {
      name: "Once",
      to: "",
      subMenu: [
        {
          name: "Country",
          to: "/Country",
        },
        {
          name: "Languages",
          to: "/Languages",
        },
        {
          name: "Currency",
          to: "/Currency",
        },
        {
          name: "Measure",
          to: "/Measure",
        },
        {
          name: "Work Type",
          to: "/WorkType",
        },
        {
          name: "Category",
          to: "/Category",
        },
        {
          name: "Status",
          to: "/Status",
        },
        {
          name: "Codes",
          to: "/Codes",
        },
        {
          name: "Outgoing Email Master",
          to: "/EmailMaster",
        },
        {
          name: "Our Company",
          to: "/OurCompany",
        },
        {
          name: "Domain",
          to: "/Domain",
        },
      ],
      iconClass: "icon-puzzle-piece",
      rightIcon: "bi bi-chevron-right once-right-icon",
    },

    {
      name: "Boss",
      to: "",
      subMenu: [
        {
          name: "Our Company & Stationary",
          to: "/CompanyStationary",
        },
        {
          name: "Users Directory",
          to: "/UserDirectory",
        },
        {
          name: "Permission",
          to: "/Permission",
        },
        {
          name: "Staff Mailers & Alerts",
          to: "/StaffMailers",
        },
        {
          name: "Reports",
          to: "/Report",
        },
        {
          name: "Backup & Restore",
          to: "/Backup",
        },
      ],
      iconClass: "icon-file-text",
      rightIcon: "bi bi-chevron-right boss-right-icon",
    },
  ];

  useEffect(() => {
    if (!inactive) {
      document.querySelectorAll(".sub-menu").forEach((el) => {
        el.classList.remove("sub-active");
      });
    }
    props.onCollapse(inactive);
  }, [inactive]);

  return (
    <>
      <div className={`sideMenu ${inactive ? "inactive" : ""}`}>
        <div className="sideMenu__top">
          <div className="logo" onClick={() => setInactive(!inactive)}>
            <img src={logo} />
          </div>
        </div>
        <Divider />

        <div className="main-menu">
          <ul>
            <li>
              <Link to="/home" className="menu-item">
                <div className="menu-icon">
                  <i className="icon-dashboard"></i>
                </div>
                <span>Dashboard</span>
              </Link>
              <Divider />
            </li>

            <li>
              <Link to="/Wasp" className="menu-item">
                <div className="menu-icon">
                  <img className="wasp-icon" src={waspIcon} alt="wasp-icon" />
                </div>
                <span>Wasp</span>
              </Link>
              <Divider />
            </li>
            {menuItems.map((menuItem, index) => (
              <MenuItem
                key={index}
                to={menuItem.to}
                name={menuItem.name}
                iconClass={menuItem.iconClass}
                subMenu={menuItem.subMenu || []}
                rightIcon={menuItem.rightIcon}
                onClick={() => {
                  if (!inactive) {
                    setInactive(true);
                  }
                }}
              />
            ))}
            <li>
              <a className="menu-item" onClick={logout}>
                <div className="menu-icon">
                  <i className="icon-signout"></i>
                </div>
                <span>Logout</span>
              </a>
            </li>
            <Divider />
          </ul>
        </div>
      </div>
      <SideContent />
    </>
  );
};

export default SideMenu;
