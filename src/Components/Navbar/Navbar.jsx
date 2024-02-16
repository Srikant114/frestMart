import React, { useState } from "react";
import { CiSearch, CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Dropdown from "react-bootstrap/Dropdown";

import "./Navbar.css";
import logo from "../Assets/freshmartLogo.png";

const Navbar = () => {
  const [cartQty, setCartQty] = useState(0);
  return (
    <nav className="navbar">
      <div className="navTop">
        <img src={logo} alt="freshMart" className="logo" />
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search for Products...."
            className="search"
          />
          <button>
            <CiSearch className="ico" />
          </button>
        </div>
        <div className="navTopRight">
          <div className="cart">
            <span className="qty">{cartQty}</span>
            <IoCartOutline  className="ico"/>
          </div>
          <CiUser className="ico"/>
        </div>
      </div>
      <div className="navBottom">
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            Categories
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Produce</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Dairy</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Bakery</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <a href="/">About us</a>
        <a href="/">Contact Us</a>
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            More
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">FAQ</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Privacy Policy</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Terms & Condition</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
