import React, { useState } from 'react'
import Swal from 'sweetalert2';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function AppUserTable() {
  const [showModal,setShowModal] =useState(false);
  const HandleShowModal=()=>{
    setShowModal(true);
  }
  const HandleCloseModal=()=>{
    setShowModal(false);
  }
  const HandleUpdate=()=>{
    setShowModal(false);
    Swal.fire(
      'Good job',
      'You have updated successfully',
      'success'
    )
  }
  const HandleDelete=()=>{
    if(window.confirm('Are you sure you want to delete')){
       Swal.fire(
  'Good job!',
  'You Deleted User!',
  'success'
)
    }
  }
  return (
    
    <table className="table mt-2 ms-4" id="userTable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Telephone</th>
                      <th>Gmai</th>
                      <th>Password</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Zakaria Ali Hassan</td>
                      <td>Admin</td>
                      <td>619911329</td>
                      <td>zack@gmail.com</td>
                      <td>123453</td>
                      <td >
                        <a className="btn btn-info" type="submit" onClick={HandleShowModal}>
                          <i
                            className="fas fa-edit"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                        <a className="btn btn-danger ms-3" type="submit" onClick={HandleDelete}>
                          <i
                            className="fas fa-trash"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Adan Saleban Ali</td>
                      <td>Admin</td>
                      <td>617632712</td>
                      <td>adan@gmail.com</td>
                      <td>223455</td>
                      <td>
                        <a className="btn btn-info" type="submit" onClick={HandleShowModal}>
                          <i
                            className="fas fa-edit"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                        <a className="btn btn-danger ms-3" type="submit" onClick={HandleDelete}>
                          <i
                            className="fas fa-trash"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Abshir Muse Ahmed</td>
                      <td>Admin</td>
                      <td>615899202</td>
                      <td>abshir@gmail.com</td>
                      <td>231237</td>
                      <td>
                        <a className="btn btn-info" type="submit" onClick={HandleShowModal}>
                          <i
                            className="fas fa-edit"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                        <a className="btn btn-danger ms-3" type="submit" onClick={HandleDelete}>
                          <i
                            className="fas fa-trash"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Abdi-jabar Jama Mohamed</td>
                      <td>Admin</td>
                      <td>618674536</td>
                      <td>abdi@gmail.com</td>
                      <td>786745</td>
                      <td>
                        <a className="btn btn-info" type="submit" onClick={HandleShowModal}>
                          <i
                            className="fas fa-edit"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                        <a className="btn btn-danger ms-3" type="submit" onClick={HandleDelete}>
                          <i
                            className="fas fa-trash"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Qadro Mohamud Jima'le</td>
                      <td>Admin</td>
                      <td>618756354</td>
                      <td>qadro@gmail.com</td>
                      <td>123342</td>
                      <td>
                        <a className="btn btn-info" type="submit" onClick={HandleShowModal}>
                          <i
                            className="fas fa-edit"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                        <a className="btn btn-danger ms-3" type="submit" onClick={HandleDelete}>
                          <i
                            className="fas fa-trash"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Ahmed Hassan Mohamed</td>
                      <td>User</td>
                      <td>615345645</td>
                      <td>ahmed@gmail.com</td>
                      <td>123654</td>
                      <td>
                        <a className="btn btn-info" type="submit" onClick={HandleShowModal}>
                          <i
                            className="fas fa-edit"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                        <a className="btn btn-danger ms-3" type="submit" onClick={HandleDelete}>
                          <i
                            className="fas fa-trash"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
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
                  <Button variant="danger" onClick={HandleUpdate}>
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>
    </table>
    
  )
}

export default AppUserTable;