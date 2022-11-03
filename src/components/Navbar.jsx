import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/chef.png";

const Navbar = () => {
  return (
    <>
    <div className="navbar bg-base-100">
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        <img
          src={logo}
          alt="App Logo"
          style={{
            height: "30px",
            marginRight: "15px",
          }}
        ></img>
        A+M Recipes
      </Link>
      <Link to="/add-new" className="btn btn-ghost normal-case text-xl">
        Add New
      </Link>
    </div>
    </>
  );
};

export default Navbar;
