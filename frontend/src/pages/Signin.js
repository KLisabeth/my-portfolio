import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { VscShield } from "react-icons/vsc";

function Signin() {
// eslint-disable-next-line
const [email, setEmail] = useState("");
// eslint-disable-next-line
const [password, setPassword] = useState("");

    return (
        <div className="signin">
      <div className="form-container">
        <Form className="admin-form" >
          <h3 className="text-center">
            <b>Admin</b> <VscShield />
          </h3>
          <Form.Group>
            <Form.Label>Admin</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              autoComplete="none"
              type="password"
              placeholder="Admin password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <button className="admin-btn" type="submit">
            Sign-in
          </button>
        </Form>
      </div>
    </div>
    )
}

export default Signin
