import React, { useState } from "react";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AppBookingTable from "./Tables/BookingTable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
function AppBooking() {
  const [showModal, setshowModal] = useState(false);
  const HandleShowModal = () => {
    setshowModal(true);
  };
  const HandleRegister = () => {
    setshowModal(false);
    Swal.fire("Good job", "You have Registered successfully", "success");
  };
  const HandleCloseModal = () => {
    setshowModal(false);
  };
  return (
    <section id="booking" className="booking">
      <div className="row">
        <div className="col-xl-12">
          <div className="card mt-3">
            <div className="card-header mt-3">
              <h5>Booking Table</h5>
              <span className="d-block m-t-5">
                Booking <code style={{ color: "#ff0000" }}>information</code>{" "}
                table
              </span>
            </div>
            <div className="card-block table-border-style">
              <div className="table-responsive float-right">
                <button
                  className="btn btn-primary btn1  mt-5"
                  id="addNewBooking"
                  onClick={HandleShowModal}
                >
                  <i className="fas fa-plus"></i>Add New
                </button>
                <Container>
                  <Row>
                    <Col sm={4} className="">
                      <Form>
                        <Form.Group className="mt-5">
                          <InputGroup className="mb-3 ">
                            <InputGroup.Text id="basic-addon2">
                              <i class="fas fa-search" aria-hidden="true"></i>
                            </InputGroup.Text>
                            <Form.Control
                              type="search"
                              placeholder="Search"
                              required
                            />
                          </InputGroup>
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                </Container>
                <AppBookingTable />
              </div>
              <Modal show={showModal} onHide={HandleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Booking Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Customers</Form.Label>
                      <Form.Select required>
                        <option>Choose customer</option>
                        <option value="1">Ahmed Ali</option>
                        <option value="2">Yacqub Mohamed</option>
                        <option value="3">Hassan Ahmed</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Vehicles</Form.Label>
                      <Form.Select required>
                        <option>Choose vehicle</option>
                        <option value="1">Bajaaj</option>
                        <option value="2">Train</option>
                        <option value="3">Sheep</option>
                        <option value="4">Track</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Amount</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter amount"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Pickup Date</Form.Label>
                      <Form.Control type="date" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Return Date</Form.Label>
                      <Form.Control type="date" required />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={HandleCloseModal}>
                    Close
                  </Button>
                  <Button variant="danger" onClick={HandleRegister}>
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppBooking;
