import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
function AppForgetPassword() {
  const navigation = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const HandleClick = (e) => {
    e.preventDefault();
  };
  const HandleReset = async (e) => {
    e.preventDefault();
    navigation("/");
  };
  const HandleBack = () => {
    navigation("/");
  };
  return (
    <section>
      <Container className="forgetPssword">
        <h1>Reset Password</h1>
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
                  setemail(e.target.value);
                }}
              />
              <div className="invalid-feedback">
                Please Enter your Email Address
              </div>
            </Form.Group>
            <Form.Group className="mt-3 was-validated">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                value={password}
                type="text"
                placeholder="New Password"
                required
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <div className="invalid-feedback">Please Enter New Password</div>
            </Form.Group>
            <Form.Group className="mt-3 was-validated">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                value={confirmPassword}
                type="text"
                placeholder="Confirm New Password"
                required
                onChange={(e) => {
                  setconfirmPassword(e.target.value);
                }}
              />
              <div className="invalid-feedback">
                Please Enter Confirm Password
              </div>
            </Form.Group>
            <div className=" mt-4">
              <a
                className="btn btn-primary btn2"
                type="submit"
                onClick={HandleReset}
              >
                <i className="fa fa-sign-in"> </i> Reset Password
              </a>
              <a
                className="btn btn-primary btn1"
                type="submit"
                onClick={HandleBack}
              >
                <i className="	fa fa-angle-left "> </i> Back
              </a>
            </div>
          </Form>
        </div>
      </Container>
    </section>
  );
}

export default AppForgetPassword;
