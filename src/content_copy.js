import React, { Component } from "react";
import { Row, Col } from "reactstrap";
// import {  Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import contentData from "../utils/contentData";
import contentData from "./contentData";


class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5">        
        <Row className="d-flex flex-row justify-content-between">
          {contentData.map((col, i) => (
            <Col key={i} md={2} className="mb-4">
              <h6 className="mb-3">
                <a href={col.link}>
                  {/* <FontAwesomeIcon icon="link" className="mr-2" /> */}
                  {col.title}
                </a>
              </h6>
              <p>{col.description}</p>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Content;
