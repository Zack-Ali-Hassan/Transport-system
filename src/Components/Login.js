import React, { createContext, useContext, useRef, useState } from "react";
import "./loginSignUp.css";
import Swal from "sweetalert2";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
function AppLogin(props) {
  //console.log(user);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [toggleEye, settoggleEye] = useState(false);
  const [inputToggleEye, setinputToggleEye] = useState("password");
  const userEmail = useRef();
  const userPassword = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getUser = localStorage.getItem("userData");
  const getPassword = localStorage.getItem("passwordData");
  const navigate = useNavigate();
  const HandleClick = (e) => {
    e.preventDefault();
    if (
      userEmail.current.value == "zack@gmail.com" &&
      userPassword.current.value == "123456"
    ) {
      localStorage.setItem("userFname", "Zackary Ali");
      localStorage.setItem("userLname", "Hassan");
      localStorage.setItem("emailData", "zack@gmail.com");
      localStorage.setItem("userData", "Zackary");
      localStorage.setItem("passwordData", "123456");
      window.location = "/home";
    } else if (
      userEmail.current.value == "adan@gmail.com" &&
      userPassword.current.value == "123456"
    ) {
      localStorage.setItem("userFname", "Adan Saleban");
      localStorage.setItem("userLname", "Ali");
      localStorage.setItem("emailData", "adan@gmail.com");
      localStorage.setItem("userData", "Adan");
      localStorage.setItem("passwordData", "123456");
      window.location = "/home";
    } else if (
      userEmail.current.value == "kaape@gmail.com" &&
      userPassword.current.value == "123456"
    ) {
      localStorage.setItem("userFname", "Abdi-jabar Jama'");
      localStorage.setItem("userLname", "Mohamed");
      localStorage.setItem("emailData", "kaape@gmail.com");
      localStorage.setItem("userData", "Kaape");
      localStorage.setItem("passwordData", "123456");
      window.location = "/home";
    } else if (
      userEmail.current.value == "abshir@gmail.com" &&
      userPassword.current.value == "123456"
    ) {
      localStorage.setItem("userFname", "Abshir Muse");
      localStorage.setItem("userLname", "Ahmed");
      localStorage.setItem("emailData", "abshir@gmail.com");
      localStorage.setItem("userData", "Abshir");
      localStorage.setItem("passwordData", "123456");
      window.location = "/home";
    } else if (
      userEmail.current.value == "qadro@gmail.com" &&
      userPassword.current.value == "123456"
    ) {
      localStorage.setItem("userFname", "Qadro Mohamud");
      localStorage.setItem("userLname", "Jima'le");
      localStorage.setItem("emailData", "qadro@gmail.com");
      localStorage.setItem("userData", "Qadro");
      localStorage.setItem("passwordData", "123456");
      window.location = "/home";
    } else {
      Swal.fire("Again", "Invalid Email or Password", "error");
    }
  };
  const HandleToggle = (e) => {
    settoggleEye(!toggleEye);
    setinputToggleEye(inputToggleEye === "password" ? "text" : "password");
  };
  const HandleLogin = (e) => {};
  const HandleRegis = () => {
    navigate("/forget");
  };
  return (
    <section id="login" className="">
      <Container className="login">
        <h1>Log In</h1>
        <div className="form-goup">
          <Form className="needs-validation" onSubmit={HandleClick}>
            <Form.Group className="mt-3 was-validated">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                type="email"
                placeholder="Email Address"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                ref={userEmail}
              />
              <div className="invalid-feedback">Please enter your email</div>
            </Form.Group>
            <Form.Group className="mt-3 was-validated">
              <Form.Label>Password</Form.Label>
              <InputGroup className="mb-3 ">
                <Form.Control
                  value={password}
                  type={inputToggleEye}
                  placeholder="Password"
                  required
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  ref={userPassword}
                />
                {toggleEye ? (
                  <InputGroup.Text id="basic-addon2" onClick={HandleToggle}>
                    <i class="fa fa-eye show" aria-hidden="true"></i>
                  </InputGroup.Text>
                ) : (
                  <InputGroup.Text id="basic-addon2" onClick={HandleToggle}>
                    <i class="fa fa-eye-slash hide show" aria-hidden="true"></i>
                  </InputGroup.Text>
                )}
                <div className="invalid-feedback">
                  Please enter your password
                </div>
              </InputGroup>
              <div>
                <p>
                  <a onClick={HandleRegis} className="forgetPasswordLogin">
                    forget Password?
                  </a>
                </p>
              </div>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
            </Form.Group>
            <div className="d-grid gap-2 mt-4 ">
              <Button
                className="btn btn-primary"
                type="submit"
                onClick={HandleLogin}
              >
                Login
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </section>
  );
}

export default AppLogin;
