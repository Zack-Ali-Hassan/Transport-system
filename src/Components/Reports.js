import React, { useRef, useState } from "react";
import "./Employee.css";
import ReactToPrint from "react-to-print";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function AppReports() {
  const [showTableService, setTableService] = useState(false);
  const [showTableBooking, setTableBooking] = useState(false);
  const componentRef = useRef();
  const HandleServiceTable = () => {
    setTableService(true);
    setTableBooking(false);
  };
  const HandleBookingTable = () => {
    setTableBooking(true);
    setTableService(false);
  };
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  return (
    <section id="report" className="report">
      <div className="row ">
        <div className="col-xl-12">
          <div className="card mt-3 ">
            <div className="card-header mt-3">
              <h5>Reports</h5>
              <span className="d-block m-t-5">
                Report <code>information</code>
              </span>
            </div>
            <div className="card-block table-border-style me-5">
              <Nav className="me-auto mt-3 ms-4">
                <NavDropdown
                  title="Reports"
                  id="basic-nav-dropdown"
                  className="dropDown "
                >
                  <NavDropdown.Item>
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      onClick={HandleServiceTable}
                    >
                      <i className="fas fa-cart-arrow-down fs-5 me-3"></i>
                      Service Report
                    </a>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      onClick={HandleBookingTable}
                    >
                      <i className="fa-solid fa-book fs-5 me-3"></i>
                      Booking Report
                    </a>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

              {/* SERVICE REPORT */}
              {showTableService && (
                <div ref={(el) => (componentRef.current = el)} className="p-5">
                  <>
                    <h1 className="fs-4 fw-bold justify-content-end d-flex">
                      {date}
                    </h1>
                    <h1 className="fs-4 fw-bold justify-content-center d-flex">
                      Service Information
                    </h1>
                    <table className="table mt-4 ms-4" id="serviceTable">
                      <thead>
                        <tr>
                          <th>Vehicles</th>
                          <th>Driver</th>
                          <th>Customer</th>
                          <th>Service date</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Bajaaj</td>
                          <td>Ahmed ALi Yacqub</td>
                          <td>Hamdi Ali Ahmed</td>
                          <td>20-April-2023</td>
                          <td>50 $</td>
                        </tr>
                        <tr>
                          <td>Track</td>
                          <td>Elmi Ahmed Hussein</td>
                          <td>Hanan Ali Abdi</td>
                          <td>25-March-2023</td>
                          <td>2,000 $</td>
                        </tr>
                        <tr>
                          <td>Bajaaj</td>
                          <td>Ahmed ALi Yacqub</td>
                          <td>Hassan Mohamed Said</td>
                          <td>10-May-2023</td>
                          <td>50 $</td>
                        </tr>
                        <tr>
                          <td>Markab</td>
                          <td>Ahmed Shafi Ali</td>
                          <td>Hashi Khalif Ahmed</td>
                          <td>10-January-2023</td>
                          <td>4,000 $</td>
                        </tr>
                        <tr>
                          <td>Train</td>
                          <td>Abdi Hassan Hussein</td>
                          <td>Khalif Abdi Zabria</td>
                          <td>10-January-2023</td>
                          <td>3,000 $</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>Total Amount : </td>
                          <td className="bg-dark text-white rounded fw-bold">
                            9,100 $
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                </div>
              )}

              {/* BOOKING REPORT */}
              {showTableBooking && (
                <div ref={(el) => (componentRef.current = el)} className="p-5 ">
                  <>
                    <h1 className="fs-4 fw-bold justify-content-end d-flex">
                      {date}
                    </h1>
                    <h1 className="fs-4 fw-bold justify-content-center d-flex">
                      Booking Information
                    </h1>
                    <table className="table mt-4 ms-4" id="bookingTable">
                      <thead>
                        <tr>
                          <th>Booking No</th>
                          <th>Customer</th>
                          <th>Vehicle</th>
                          <th>Pickup Date</th>
                          <th>Return Date</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>B1</td>
                          <td>Ahmed Ali</td>
                          <td>Train</td>
                          <td>20-April-2023</td>
                          <td>23-April-2023</td>
                          <td>1000$</td>
                        </tr>
                        <tr>
                          <td>B2</td>
                          <td>Ahmed Ali</td>
                          <td>Airplane</td>
                          <td>10-March-2023</td>
                          <td>13-March-2023</td>
                          <td>400$</td>
                        </tr>
                        <tr>
                          <td>B3</td>
                          <td>Hashi Khalif Ahmed</td>
                          <td>Track</td>
                          <td>12-March-2023</td>
                          <td>8-April-2023</td>
                          <td>4000$</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>Total Amount : </td>
                          <td className="bg-dark text-white rounded fw-bold">
                            5,400 $
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                </div>
              )}

              {/* PRINT REPORT */}

              <div>
                <ReactToPrint
                  trigger={() => {
                    return (
                      <button className="btn btn-info mt-3 ms-4 mb-4">
                        <i className="fas fa-print"></i> Print / download
                      </button>
                    );
                  }}
                  content={() => componentRef.current}
                  documentTitle="New report"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AppReports;
