import React, { useState } from "react";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AppUserTable from "./Tables/UserTable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
function AppUsers() {
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
    <section id="user" className="user">
      <div className="row">
        <div className="col-xl-12 ">
          <div className="card mt-3 ">
            <div className="card-header  mt-3">
              <h5>User Table</h5>
              <span className="d-block m-t-5">
                User <code style={{ color: "#ff0000" }}>information</code> table
              </span>
            </div>
            <div className="card-block table-border-style">
              <div className="table-responsive float-right ">
                <button
                  className="btn btn-primary btn1  mt-5"
                  id="addNewUser"
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
                <AppUserTable />
              </div>
              <Modal show={showModal} onHide={HandleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>User Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form className="needs-validation">
                    <Form.Group className="mb-3 was-validated">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter firstname"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 was-validated">
                      <Form.Label>Type</Form.Label>
                      <Form.Select required>
                        <option>choose Type</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3  was-validated">
                      <Form.Label>Telephone</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter user telephone number"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3  was-validated">
                      <Form.Label>Gmail</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter user gmail"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3  was-validated">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3  was-validated">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter confirm password"
                        required
                      />
                      {/* <div className="invalid-feedback">
                        Please Enter confirm password
                      </div> */}
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

export default AppUsers;
