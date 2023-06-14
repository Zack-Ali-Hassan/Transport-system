import React, { useState, useContext } from "react";
import Typed from "react-typed";
import Swal from "sweetalert2";
import "./nav.css";
import AppLogin from "./Login";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import AppProfile from "./profile";
import AppLayout from "./Layout";
const getUser = localStorage.getItem("userData");
function AppNav({ HandleToggle }) {
  const [showModal, setshowModal] = useState(false);
  const HandleShowModal = () => {
    setshowModal(true);
  };
  const HandleCloseModal = () => {
    setshowModal(false);
  };
  const HandleUpdate = () => {
    setshowModal(false);
    Swal.fire("Good job", "You have updated successfully", "success");
    window.location.reload();
  };
  const HandleDelete = () => {
    if (window.confirm("Are you sure you want to delete")) {
      setshowModal(false);
      Swal.fire("Good job!", "You Deleted!", "success");
    }
    window.location.reload();
  };
  return (
    <AppLayout>
      <section id="dashboard" className="nav">
        <Container fluid>
          <Navbar className="main-nav-container" expand="lg">
            <div className="brand-container">
              <Navbar.Brand>
                <i className="fa fa-align-left fs-4" onClick={HandleToggle}></i>
              </Navbar.Brand>
              <Navbar.Brand>
                <Typed
                  strings={["Al Hilaal Transportation Management System"]}
                  typeSpeed={55}
                  backSpeed={55}
                  pm
                  loop
                  className="trans"
                />

                {/* <Link to={"/home"} ></Link> */}
              </Navbar.Brand>
            </div>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <div className="collapse-conatiner">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown
                    title={getUser}
                    id="basic-nav-dropdown"
                    className="dropDown"
                  >
                    <NavDropdown.Item>
                      <Link
                        onClick={HandleShowModal}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <i className="fa fa-user px-2"></i>
                        Profile
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </Container>
        <AppProfile
          show={showModal}
          hanldeclose={HandleCloseModal}
          HandleUpdate={HandleUpdate}
          HandleDelete={HandleDelete}
        />
      </section>
    </AppLayout>
  );
}

export default AppNav;
