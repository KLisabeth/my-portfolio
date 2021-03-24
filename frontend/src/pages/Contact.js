import React, { useState} from "react";
import { Form } from "react-bootstrap";
import { RiHeart3Fill } from "react-icons/ri";
import Icons from "../components/icons/Icons";


function Contact() {
  // eslint-disable-next-line
  const [email, setEmail] = useState();
  // eslint-disable-next-line
  const [comment, setComment] = useState();

 

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
            
            <Form bg="dark" autoComplete="off" className="contact-form">
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
