import React from "react";
import image from "../assets/images/project.png";
import { CgWebsite } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import { Row, Col, Container, Button } from "react-bootstrap";


function Projects() {
 

  return (
    <div className="project">
      <h1 className=" project-h1">My Projects</h1>
          <Container>
            <Row>
             <Col className="m-3">
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <img
                            src={image}
                            alt="Project"
                            className="project-screenshot"
                          />
                          <h1 className=" project-h1">Project</h1>
                        </div>
                        <div className="flip-card-back">
                          <h1 className=" project-h1">Project</h1>
                          <p className=" project-p">Somethis here about project</p>

                          <Button variant="outline-primary">
                            Website <CgWebsite />
                          </Button>
                          <br />
                          <Button >
                            Git-hub <AiFillGithub />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="m-3">
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <img
                            src={image}
                            alt="Project"
                            className="project-screenshot"
                          />
                          <h1 className=" project-h1">Project</h1>
                        </div>
                        <div className="flip-card-back">
                          <h1 className=" project-h1">Project</h1>
                          <p className=" project-p">Somethis here about project</p>

                          <Button variant="outline-primary">
                            Website <CgWebsite />
                          </Button>
                          <br />
                          <Button >
                            Git-hub <AiFillGithub />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="m-3">
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <img
                            src={image}
                            alt="Project"
                            className="project-screenshot"
                          />
                          <h1 className=" project-h1">Project</h1>
                        </div>
                        <div className="flip-card-back">
                          <h1 className=" project-h1">Project</h1>
                          <p className=" project-p">Somethis here about project</p>

                          <Button variant="outline-primary">
                            Website <CgWebsite />
                          </Button>
                          <br />
                          <Button >
                            Git-hub <AiFillGithub />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="m-3">
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <img
                            src={image}
                            alt="Project"
                            className="project-screenshot"
                          />
                          <h1 className=" project-h1">Project</h1>
                        </div>
                        <div className="flip-card-back">
                          <h1 className=" project-h1">Project</h1>
                          <p className=" project-p">Somethis here about project</p>

                          <Button variant="outline-primary">
                            Website <CgWebsite />
                          </Button>
                          <br />
                          <Button >
                            Git-hub <AiFillGithub />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="m-3">
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <img
                            src={image}
                            alt="Project"
                            className="project-screenshot"
                          />
                          <h1 className=" project-h1">Project</h1>
                        </div>
                        <div className="flip-card-back">
                          <h1 className=" project-h1">Project</h1>
                          <p className=" project-p">Somethis here about project</p>

                          <Button variant="outline-primary">
                            Website <CgWebsite />
                          </Button>
                          <br />
                          <Button >
                            Git-hub <AiFillGithub />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="m-3">
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <img
                            src={image}
                            alt="Project"
                            className="project-screenshot"
                          />
                          <h1 className=" project-h1">Project</h1>
                        </div>
                        <div className="flip-card-back">
                          <h1 className=" project-h1">Project</h1>
                          <p className=" project-p">Somethis here about project</p>

                          <Button variant="outline-primary">
                            Website <CgWebsite />
                          </Button>
                          <br />
                          <Button >
                            Git-hub <AiFillGithub />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Col>
            </Row>
          </Container>
        </div>
  );
}

export default Projects;
