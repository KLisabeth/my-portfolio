import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from "react-bootstrap/Form";
import { VscShield } from "react-icons/vsc";
import { signin } from '../store/actions/authActions';
import LoadingNotice from "../components/notice/LoadingNotice";


function Signin(props) {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const redirect = props.location.search
? props.location.search.split('=')[1]
: '/admin';

const adminSignin = useSelector((state) => state.adminSignin);
const { auth, loading, error } = adminSignin;

const dispatch = useDispatch();

const submitHandler = (e) => {
e.preventDefault();
dispatch(signin(email, password));
setTimeout(() => {
  window.location.reload();
}, 300);
};

useEffect(() => {
if (auth) {
  props.history.push(redirect);
}
}, [props.history, redirect, auth]);

    return (
        <div className="signin">
      <div className="form-container">
        <Form className="admin-form" onSubmit={submitHandler}>
          <h3 className="text-center">
            <b>Admin</b> <VscShield />
          </h3>
          {loading && <LoadingNotice />}
          <h6 className="text-danger justify-content-center text-center">
            {error && <>{error}</>}
          </h6>
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
