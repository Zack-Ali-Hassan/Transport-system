import React,{useState} from 'react'
import Swal from 'sweetalert2';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function AppVehicleTable() {
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
  'You Deleted this Vehicle!',
  'success'
)
    }
  }
  return (
    <table className="table mt-2 ms-4" id="vehicleTable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Modal</th>
                      <th>Year</th>
                      <th>Fuel Engine Type</th>
                      <th>Booked</th>
                      <th>Driver</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Train</td>
                      <td>2001</td>
                      <td>Diesel Engine</td>
                      <td>Yes</td>
                      <td>Yahye Abdi</td>
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
                      <td>Sheep</td>
                      <td>1990</td>
                      <td>Alternative Fuel Engines</td>
                      <td>Yes</td>
                      <td>Abdi Ahmed</td>
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
                      <td>Airplane</td>
                      <td>1999</td>
                      <td>Petrol Engine</td>
                      <td>No</td>
                      <td>Ahmed Ali</td>
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
                  <Modal.Title>Update Vehicles Info</Modal.Title>
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
                  <Button variant="danger" onClick={HandleUpdate}>
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>
                </table>
  )
}

export default AppVehicleTable;