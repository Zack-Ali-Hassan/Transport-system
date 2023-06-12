import React,{useState} from 'react'
import Swal from 'sweetalert2';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function AppCustomerTable() {
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
    <table className="table mt-2 ms-4" id="CustomerTable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Telephone</th>
                      <th>Address</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Hamdi Ali Ahmed</td>
                      <td>Female</td>
                      <td>619936354</td>
                      <td>Guriel</td>
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
                      <td>Hanan Ali Abdi</td>
                      <td>Male</td>
                      <td>617786756</td>
                      <td>Beledweyne</td>
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
                     <td>Hassan Mohamed Said</td>
                      <td>Female</td>
                      <td>615454323</td>
                      <td>Galkacyo</td>
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
                       <td>Hashi Khalif Ahmed</td>
                      <td>Male</td>
                      <td>615564535</td>
                      <td>Kaxda</td>
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
                      <td>Khalif Abdi Zabria</td>
                      <td>Female</td>
                      <td>617876756</td>
                      <td>Hodan</td>
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
                      <td>Ahmed Ali</td>
                      <td>Male</td>
                      <td>617865664</td>
                      <td>Boondhere</td>
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
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your address"
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

export default AppCustomerTable;