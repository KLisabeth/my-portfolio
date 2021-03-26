import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { RiHeart3Fill } from "react-icons/ri";
import Icons from "../components/icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { messageMe } from "../store/actions/messageActions";
import {MESSAGE_RESET} from "../store/constants/messageConstants"

function Contact(props) {
  const [email, setEmail] = useState();
  const [coment, setComent] = useState();

  const messageSend = useSelector((state) => state.messageSend);
  const {loading, success: successSend, error } = messageSend;
  const dispatch = useDispatch();
  const message = `Your message has been send`;

  useEffect(() => {
    if(successSend)
    dispatch({type:MESSAGE_RESET})
   }, [ dispatch, successSend])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(messageMe(email, coment));
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="contact">
      <div className="contact-card">
        <h1 className="contact_title"> CONTACT ME</h1>
        <div>
          <h3 className="contact-script">
            Leave your coments it would really
            help <RiHeart3Fill className="contact_heart" />
          </h3>
          <Icons />
          <div className="contact-form-wrap">
            <h6 className="text-danger justify-content-center text-center">
              {loading && message}
              {error && <>{error}</>}
            </h6>
            <Form bg="dark" autoComplete="off" className="contact-form" onSubmit={submitHandler}>
              <Form.Group>
                <Form.Label htmlFor="user-email">
                  Email
                </Form.Label>
                <Form.Control
                  id="user-email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="text-area">Your coments</Form.Label>
                <Form.Control
                  id="text-area"
                  as="textarea"
                  rows={3}
                  onChange={(e) => setComent(e.target.value)}
                />
              </Form.Group>
              <br />
              <button className="contact_btn" type="submit">
                Submit
              </button>
            </Form>
            <hr />
           
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
