import React,{useState} from 'react'
import Swal from 'sweetalert2';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function AppEmployeeTable() {
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
  'You Deleted this Employee!',
  'success'
)
    }
  }
  return (
    <table className="table mt-2 ms-4" id="employeeTable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Designation</th>
                      <th>Telephone</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Zack Ali Hassan</td>
                      <td>18</td>
                      <td>Male</td>
                      <td>CEO</td>
                      <td>+252 619911329</td>
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
                      <td>2</td>
                      <td>Adan Saleban Ali</td>
                      <td>22</td>
                      <td>Male</td>
                      <td>Marketing</td>
                      <td>+252 615565654</td>
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
                      <td>22</td>
                      <td>Male</td>
                      <td>HRM</td>
                      <td>+252 615899202</td>
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
                  <Modal.Title>Update Employee Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Age</Form.Label>
                      <Form.Control type="date" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Gender</Form.Label>
                      <Form.Select required>
                        <option>Choose your gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Designation</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your designation"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Telephone</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your telephone number"
                        required
                      />
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

export default AppEmployeeTable;