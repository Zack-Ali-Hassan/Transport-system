import React,{useState} from 'react'
import Swal from 'sweetalert2';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function AppBookingTable() {
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
  'You Deleted!',
  'success'
)
    }
  }
  return (
    <table className="table mt-2 ms-4" id="bookingTable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Booking No</th>
                      <th>Customer</th>
                      <th>Vehicle</th>
                      <th>Amount</th>
                      <th>Pickup Date</th>
                      <th>Return Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>B1</td>
                      <td>Ahmed Ali</td>
                      <td>Train</td>
                      <td>1000$</td>
                      <td>20-April-2023</td>
                      <td>29-April-2023</td>
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
                      <td>B2</td>
                      <td>Ahmed Ali</td>
                      <td>Airplane</td>
                      <td>400$</td>
                      <td>10-March-2023</td>
                      <td>13-March-2023</td>
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
                      <td>B3</td>
                      <td>Hashi Khalif Ahmed</td>
                      <td>Track</td>
                      <td>4000$</td>
                      <td>12-March-2023</td>
                      <td>8-April-2023</td>
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
                  <Modal.Title>Update Booking Info</Modal.Title>
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
                  <Button variant="danger" onClick={HandleUpdate}>
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>
                </table>
  )
}

export default AppBookingTable;