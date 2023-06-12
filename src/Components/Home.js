import React, { useState } from "react";
import Chart from "react-apexcharts";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import video1 from "../Images/video1.mp4";
import "./style.css";
function AppHome() {
  const [chart, setChart] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Bajaj", "Train", "Track", "Airplane", "Markab"],
      },
    },
    series: [
      {
        name: "Amount",
        data: ["100$", "3000$", "2000$", "800$", "4000$"],
      },
    ],
  });
  const [chart1, setChart1] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Hamdi", "Hanan", "Hassan", "Hashi", "Khalif"],
      },
    },
    series: [
      {
        name: "Amount",
        data: ["50$", "2000$", "50$", "4000$", "3000$"],
      },
    ],
  });
  return (
    <section id="home" className="home">
      <Container fluid>
        <Row className="ms-5 mt-5">
          <Col
            sm={3}
            className="p-4 m-3  bg-white shadow-sm d-flex justify-content-around align-items-center rounded"
          >
            <div>
              <h3 className="fs-2 p-3 fw-bold">6</h3>
              <p className="fs-5 fw-bold">Users</p>
            </div>
            <i className="fa-solid fa-user p-2 fs-1"></i>
          </Col>
          <Col
            sm={3}
            className="p-4 m-3  bg-white shadow-sm d-flex justify-content-around align-items-center rounded"
          >
            <div>
              <h3 className="fs-2 p-3 fw-bold">3</h3>
              <p className="fs-5 fw-bold">Employees</p>
            </div>
            <i className="fa-solid fa-users p-2 fs-1"></i>
          </Col>
          <Col
            sm={3}
            className="p-4 m-3  bg-white shadow-sm d-flex justify-content-around align-items-center rounded"
          >
            <div>
              <h3 className="fs-2 p-3 fw-bold">4</h3>
              <p className="fs-5 fw-bold">Services</p>
            </div>
            <i className="fas fa-cart-arrow-down p-2 fs-1"></i>
          </Col>

          <Col
            sm={3}
            className="p-4 m-3  bg-white shadow-sm d-flex justify-content-around align-items-center rounded"
          >
            <div>
              <h3 className="fs-2 p-3 fw-bold">3</h3>
              <p className="fs-5 fw-bold">Vehicles</p>
            </div>
            <i className="fas fa-subway p-2 fs-1"></i>
          </Col>
          <Col
            sm={3}
            className="p-4 m-3  bg-white shadow-sm d-flex justify-content-around align-items-center rounded"
          >
            <div>
              <h3 className="fs-2 p-3 fw-bold">2</h3>
              <p className="fs-5 fw-bold">Drivers</p>
            </div>
            <i className="fas fa-car-crash p-2 fs-1"></i>
          </Col>
          <Col
            sm={3}
            className="p-4 m-3  bg-white shadow-sm d-flex justify-content-around align-items-center rounded"
          >
            <div>
              <h3 className="fs-2 p-3 fw-bold">5</h3>
              <p className="fs-5 fw-bold">Customers</p>
            </div>
            <i className="far fa-address-card p-2 fs-1"></i>
          </Col>
          <Col
            sm={3}
            className="p-4 m-3  bg-white shadow-sm d-flex justify-content-around align-items-center rounded"
          >
            <div>
              <h3 className="fs-2 p-3 fw-bold">2</h3>
              <p className="fs-5 fw-bold">Bookings</p>
            </div>
            <i className="fa-solid fa-book p-2 fs-1"></i>
          </Col>

          {/* Charts */}
          <Row className="mt-3 mb-4">
            <h3 className="text-white fw-bold justify-content-center align-item-center d-flex mt-4">
              Charts
            </h3>
            <Col
              sm={5}
              className="p-4 m-3  bg-white shadow-sm d-flex justify-content-around align-items-center rounded"
            >
              <Chart
                options={chart.options}
                series={chart.series}
                type="bar"
                width="450"
              />
            </Col>
            <Col
              sm={5}
              className="p-4 m-3  bg-white shadow-sm d-flex justify-content-around align-items-center rounded"
            >
              <Chart
                options={chart1.options}
                series={chart1.series}
                type="line"
                width="450"
              />
            </Col>
          </Row>
        </Row>
        <Row className="mt-2 ms-3 bg-secondary">
          <h3 className="text-white fw-bold justify-content-center align-item-center d-flex mt-4">
            Video Transportation
          </h3>
          <div className="">
            <video
              controls
              src={video1}
              type="video/mp4"
              className="w-100 min-vh-100"
            ></video>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default AppHome;
