import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import AppSideBar from "./SideBar";
import AppNav from "./Nav";
import AppEmployee from "./Employee";
import AppHome from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppDashboard() {
  const [toggle, setToggle] = useState(true);
  const HandleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="dashboard bg-secondary min-vh-100">
      <Container fluid>
        <Row>
          {toggle && (
            <Col sm={4} className="col-md-2 bg-white min-vh-100 position-fixed">
              <AppSideBar HandleToggle={HandleToggle} />
            </Col>
          )}
          {toggle && <div className="col-4 col-md-2"></div>}
          <Col sm={toggle ? 10 : 12} className="px-3">
            <AppNav HandleToggle={HandleToggle} />
            <Routes>
              <Route
                path="/employe"
                element={<AppEmployee></AppEmployee>}
              ></Route>
            </Routes>
            <AppHome></AppHome>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AppDashboard;
