import React, { useState, useEffect } from "react"
import { Row, Container, Col, Form, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import LoadingNotice from "../components/notice/LoadingNotice";
import {listProfile, editProfile} from "../store/actions/profileActions";
import { PROFILE_EDIT_RESET } from "../store/constants/profileConstants";
import Axios from "axios"



function Admin(props) {
    const [show, setShow] = useState(false);
    const [id, setId] = useState();
    const[image, setImage] = useState();
    const [cv_url, setCvUrl] = useState();
    const [bio, setBio] = useState();
   
  
    const adminSignin = useSelector((state) => state.adminSignin);
    const { auth } = adminSignin;
  
    const dispatch = useDispatch();
    const profileList = useSelector((state) => state.profileList);
    const { loading, profiles, error } = profileList;
  
    const profileEdit = useSelector((state) => state.profileEdit);
    const {
      loading: loadingEdit,
      success: successEdit,
      error: errorEdit,
    } = profileEdit;
  
  
    useEffect(() => {
      if (successEdit) {
        setShow(false);
      }
      dispatch(listProfile());
      return () => {
        //
      };
    }, [dispatch, auth,  successEdit]);
  
    const editHandler = (e) => {
      e.preventDefault();
      dispatch(editProfile({ _id: id, image, cv_url, bio }));
    };
  
    
    const handleShow = (profile) => {
      setShow(true);
      setId(profile._id);
      setImage(profile.image);
      setCvUrl(profile.cv_url);
      setBio(profile.bio);
    };
  
    
    const handleCancel = ()=>{
        setShow(false); 
        dispatch({ type:PROFILE_EDIT_RESET});
    }
  
 const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${auth.token}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
    return (
        <div className="dashboard_page">
        <h2 className="title">My Profile</h2>
        <Container>
        <Row>
       <Col className="m-3" >
          {show && (
                <Col className=" m-3">
                  <Form  className="form-group" onSubmit={editHandler} >
                    {loadingEdit && <LoadingNotice />}
                    <h6 className="text-danger justify-content-center text-center">
                      {errorEdit && <div>{errorEdit}</div>}
                    </h6>
                    <div>
                </div>
                <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>
            <div>
              <input
                type="file"
                id="imageFile"
                name="image"
                label="Choose Image"
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <LoadingNotice /> }
              <h6 className="text-danger justify-content-center text-center">
                      {errorUpload && <div>{errorUpload}</div>}
                    </h6>
              </div>
                <div className="form-group">
                      <label htmlFor="cv">Cv</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cv"
                        value={cv_url}
                        onChange={(e) => setCvUrl(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="bio">About me</label>
                      <textarea
                        type="textarea"
                        className="form-control"
                        id="bio"
                        rows="10"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                      />
                    </div>
                    <Button variant="outline-primary" size="lg" block type="submit">
                    {id ? "Update" : " Create"}
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="secondary"
                      size="lg"
                      block
                    >
                      Cancel
                    </Button>
                  </Form>
                </Col>
              )}
          </Col>
          <Col className=" m-3">
                {loading && <LoadingNotice />}
                <h6 className="text-danger justify-content-center text-center">
                {error && <>{error}</>}
                    </h6>
                
                <Table id="table" bordered size="md">
                  <thead>
                    <tr>
                      <th>TITLE</th>
                     
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profiles.map((profile) =>( 
                        <tr key={profile._id}>
                        <td>{profile.bio}</td>
                        <td>
                          <Button
                            variant="outline-success"
                            onClick={() => handleShow(profile)}
                          >Edit
                          </Button>
                        </td>
                      </tr>
                     ) )}
                  </tbody>
                </Table>
              </Col>
          </Row>
        </Container>
          
        </div>
      )
    }
    
export default Admin;

