import React, { useState } from "react";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AppVehicleTable from "./Tables/VehicleTable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
function AppVehicles() {
  const [showModal, setshowModal] = useState(false);
  const HandleShowModal = () => {
    setshowModal(true);
  };
  const HandleCloseModal = () => {
    setshowModal(false);
  };
  const HandleRegister = () => {
    setshowModal(false);
    Swal.fire("Good job", "You have Registered successfully", "success");
  };
  return (
    <section id="vehicle" className="vehicle">
      <div className="row">
        <div className="col-xl-12">
          <div className="card mt-3 ">
            <div className="card-header mt-3">
              <h5>Vehicle Table</h5>
              <span className="d-block m-t-5">
                Vehicle <code style={{ color: "#ff0000" }}>information</code>{" "}
                table
              </span>
            </div>
            <div className="card-block table-border-style">
              <div className="table-responsive float-right ">
                <button
                  className="btn btn-primary btn1  mt-5"
                  id="addNewVehicle"
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
                <AppVehicleTable />
              </div>
              <Modal show={showModal} onHide={HandleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Vehicles Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Modal</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter modal name"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Year</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Fuel Engine Type</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Fuel Engine Type"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Booked</Form.Label>
                      <Form.Select required>
                        <option>choose booking</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Drivers</Form.Label>
                      <Form.Select required>
                        <option>choose driver</option>
                        <option value="1">Ahmed Abdi</option>
                        <option value="2">Yahye Mohamed</option>
                        <option value="2">Hashi Awil</option>
                        <option value="2">Abdi Hassan</option>
                        <option value="2">Shuip Ahmed</option>
                      </Form.Select>
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

export default AppVehicles;
