/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import ConnectWallet from "../modals/connectWallet";
import useAuth from "../../hooks/useAuth";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
} from "reactstrap";

import routes from "routes.js";

function Header(props) {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context("assets/img/dashboardimg", false, /\.(png|jpe?g|svg)$/)
  );

  const [isOpen, setIsOpen] = React.useState(false);
  const [brandName, setbrandName] = React.useState();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [color, setColor] = React.useState("transparent");
  const sidebarToggle = React.useRef();
  const location = useLocation();
  const { account } = useWeb3React();
  const toggle = () => {
    if (isOpen) {
      setColor("transparent");
    } else {
      setColor("dark");
    }
    setIsOpen(!isOpen);
  };
  const dropdownToggle = (e) => {
    setDropdownOpen(!dropdownOpen);
  };
  const getBrand = () => {
    routes.map((prop, key) => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        // brandname = prop.name;
        setbrandName(prop.name);
        // console.log(brandName)
      }
      return null;
    });
  };

  useEffect(() => {
    getBrand();
  });

  const openSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    sidebarToggle.current.classList.toggle("toggled");
  };
  // function that adds color dark/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && isOpen) {
      setColor("dark");
    } else {
      setColor("transparent");
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateColor.bind(this));
  });
  React.useEffect(() => {
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      sidebarToggle.current.classList.toggle("toggled");
    }
  }, [location]);

  const { login, logout } = useAuth();

  const connectMetamask = () => {
    localStorage.setItem("connectorId", "injected");
    if (account) {
      logout();
    } else {
      login("injected");
    }
  };

  const trustWallet = async () => {
    localStorage.setItem("connectorId", "walletconnect");
    if (account) {
      logout();
    } else {
      login("walletconnect");
    }
  };

  const connectwallet = () => {
    if(account){
      connectMetamask();
    }else {
      window.$("#exampleModalLong").modal("show");
    }
  };


  return (
    // add or remove classes depending if we are on full-screen-maps page or not
    <div className="main-div-nav-head">
      <Navbar
        color={
          props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "dark"
            : color
        }
        expand="lg"
        className={
          props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "navbar-absolute fixed-top"
            : "navbar-absolute fixed-top " +
              (color === "transparent" ? "navbar-transparent " : "")
        }
      >
        <Container fluid className="main-header-top-change">
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button
                type="button"
                ref={sidebarToggle}
                className="navbar-toggler"
                onClick={() => openSidebar()}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <NavbarBrand href="/">{brandName}</NavbarBrand>
          </div>
          <NavbarToggler onClick={toggle}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar className="justify-content-end">
            <button
              type="button"
              onClick={connectwallet}
              className="btn-common-pur btn mr-4"
            >
              { account ? "Disconnect Wallet" : "Connect Wallet" }
            </button>
            <div className="dropdown drop-seller">
              <button
                className="button-seller"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src={`${images["image-profile.png"]["default"]}`}
                  className="back-img"
                  alt=""
                />
              </button>
              <div
                className="dropdown-menu drop-mainn"
                aria-labelledby="dropdownMenuButton"
              >
                <Link to={`/admin/editprofile`} className="dropdown-item">
                  Edit Profile
                </Link>
                <Link to="user" className="dropdown-item">
                  Users
                </Link>
              </div>
            </div>
          </Collapse>
        </Container>
      </Navbar>
      {/* Add Wallet Modal */}
      <div className="row">
        <div className="col-sm-12">
          <div
            className="modal fade"
            id="exampleModalLong"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
          >
            <ConnectWallet trustWallet={trustWallet} connectMetamask={connectMetamask} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
