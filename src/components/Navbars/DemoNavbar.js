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
import React, {useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import user5 from "assets/img/userflow/filterss.png";
import user4 from "assets/img/userflow/add1.png";
import user6 from "assets/img/userflow/arrow-down.png";

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
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('assets/img/dashboardimg', false, /\.(png|jpe?g|svg)$/));

  const [isOpen, setIsOpen] = React.useState(false);
  const [brandName, setbrandName] = React.useState();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [color, setColor] = React.useState("transparent");
  const sidebarToggle = React.useRef();
  const location = useLocation();
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
        setbrandName(prop.name)
        // console.log(brandName)
      }
      return null;
    });
  };

useEffect(() => {
  getBrand()
}, )

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
            {/* <form>
              <InputGroup className="no-border">
                <Input className="form-group" placeholder="Search..." />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i className="nc-icon nc-zoom-split" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </form> */}

            {/* <div className="profile-image">
              <img src={`${images['image-profile.png']['default']}`} className="back-img" alt="" />
            </div> */}
            <button type="button" className="btn-common-pur btn mr-4"> Connect your Wallet</button>
            <div className="dropdown drop-seller">
              <button class="button-seller" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={`${images['image-profile.png']['default']}`} className="back-img" alt="" />
              </button>
              <div className="dropdown-menu drop-mainn" aria-labelledby="dropdownMenuButton">
                <Link to={`/admin/editprofile`} className="dropdown-item">Edit Profile</Link>
                <Link to="user" className="dropdown-item" >Users</Link>
              </div>
            </div>
            {/* <div className="bootstrap-drown">
              <div class="dropdown">
                <button class="button-header-nav" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={user5} className="pad-rihgtt pr-4" alt="" />
                Filters
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>

            <div className="bootstrap-drown-two">
              <div class="dropdown">
                <button class="button-header-filter" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                
                Sort by  <img src={user6} className="pad-rihgt pl-4" alt="" />
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>  
            </div> */}
          </Collapse>
        </Container>
      </Navbar>
      {/* Add Category Modal */}
      <div className="main-modal-one">
        <div class="modal fade" id="exampleModal34" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog daily-profile-modal">
            <div class="modal-content daily-profile-modal-inner">
              <div class="modal-body modal-body-main">
                <div className="main-outter">
                  <div className="row main-cardssss">
                    <div className="col-md-12 col-12">
                      <div className="flux-b">
                        <h3>Add Category</h3>
                      </div>
                    </div>
                    <div className="col-12">
                      <div class="form-group">
                        <label for="example">Category Name</label>
                        <input type="text" class="form-control" id="example" aria-describedby="text" placeholder="Enter Category Name" />
                        {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                      </div>
                    </div>
                    <div className="col-md-12 col-12">
                      <div className="button-modal-daily">
                        <button type="button" className="button-main-daily"  >Add</button>
                        <button type="button" className="button-main-dailys" data-dismiss="modal" aria-label="Close" >Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
