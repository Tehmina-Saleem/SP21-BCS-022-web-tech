import React from "react";
import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
    <div>
      <ul>
        <li style={{ display: "inline-block", padding: "5px" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ display: "inline-block", padding: "5px" }}>
          <Link to="/products">Products</Link>
        </li>
        <li style={{ display: "inline-block", padding: "5px" }}>
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default TopMenu;
