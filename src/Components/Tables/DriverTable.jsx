import React,{useState} from 'react'
import Swal from 'sweetalert2';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function AppDriverTable() {
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
    <table className="table mt-2 ms-4" id="driverTable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Telephone</th>
                      <th>D.O.B</th>
                      <th>Join Date</th>
                      <th>Address</th>
                      <th>Rating</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Ahmed Ali</td>
                      <td>Male</td>
                      <td>617898767</td>
                      <td>28-3-2000</td>
                      <td>10-8-2020</td>
                      <td>Hodan-Mogadisho</td>
                      <td>9</td>
                      <td>
                        <a className="btn btn-info" type="submit" onClick={HandleShowModal}>
                          <i
                            className="fas fa-edit"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                        <a className="btn btn-danger ms-3" type="submit"onClick={HandleDelete}>
                          <i
                            className="fas fa-trash"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Hashi Mohamed</td>
                      <td>Male</td>
                      <td>617845367</td>
                      <td>2-5-1980</td>
                      <td>20-4-2010</td>
                      <td>Kaxda-Mogadisho</td>
                      <td>6</td>
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
                  <Modal.Title>Update Driver Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter you name"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Gender</Form.Label>
                      <Form.Select required>
                        <option>Choose Your gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Telephone</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter you telephone"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>D.O.B</Form.Label>
                      <Form.Control type="date" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Join Date</Form.Label>
                      <Form.Control type="date" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your address"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Rate</Form.Label>
                      <Form.Select required>
                        <option>Choose rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
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

export default AppDriverTable;