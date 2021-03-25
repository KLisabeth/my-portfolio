import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { RiHeart3Fill } from "react-icons/ri";
import Icons from "../components/icons/Icons";
import LoadingNotice from "../components/notice/LoadingNotice";
import { useDispatch, useSelector } from "react-redux";
import { messageMe } from "../store/actions/messageActions";

function Contact(props) {
  const [email, setEmail] = useState();
  const [comment, setComment] = useState();

  const messageSend = useSelector((state) => state.messageSend);
  const { loading, success, error } = messageSend;
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(success)
    props.history.push("/")
     return () => {
      //
     }
   }, [props.history, success])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(messageMe(email, comment));
  };

  return (
    <div className="contact">
      <div className="contact-card">
        <h1 className="contact_title"> CONTACT ME</h1>
        <div>
          <h3 className="contact-script">
            Your coments <RiHeart3Fill className="contact_heart" /> would really
            help
          </h3>

          <div className="contact-form-wrap">
            {loading && <LoadingNotice />}
            <h6 className="text-danger justify-content-center text-center">
              {error && <>{error}</>}
            </h6>
            <Form bg="dark" autoComplete="off" className="contact-form" onSubmit={submitHandler}>
              <Form.Group>
                <Form.Label id="label0" htmlFor="user-email">
                  Email
                </Form.Label>
                <Form.Control
                  id="user-email"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="text-area">Your coments</Form.Label>
                <Form.Control
                  id="text-area"
                  as="textarea"
                  rows={3}
                  onChange={(e) => setComment(e.target.value)}
                />
              </Form.Group>
              <br />
              <button className="contact_btn" type="submit">
                Submit
              </button>
            </Form>
            <hr />
            <Icons />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
