import React, { useState } from "react";
import Divider from "./Divider";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
  const [rotate, setRotate] = useState(false);

  const toggleRotate = () => {
    setRotate(!rotate);
  };

  const { name, subMenu, iconClass, onClick, to, rightIcon } = props;

  const [expand, setExpand] = useState(false);

  const [hover, setHover] = useState(false);

  return (
    <li onClick={onClick}>
      <Link to={to} onClick={() => setExpand(!expand)} className="menu-item">
        <div className="menu-icon">
          <i className={iconClass}></i>
        </div>
        <span onClick={toggleRotate}>
          {name}{" "}
          <i className={`${rightIcon} ${rotate ? "rotate-icon" : ""}`}></i>{" "}
        </span>
      </Link>
      {subMenu && subMenu.length > 0 ? (
        <ul className={`sub-menu ${expand ? "sub-active" : ""}`}>
          {subMenu.map((menu, index) => (
            <>
              <li key={index}>
                <Link to={menu.to}>
                  <i className="bi bi-chevron-double-right"></i> {menu.name}
                </Link>
              </li>
            </>
          ))}
        </ul>
      ) : null}
      <Divider />
    </li>
  );
};

export default MenuItem;
