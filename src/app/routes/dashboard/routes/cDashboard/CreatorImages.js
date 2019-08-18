import React from "react";
import { Row, Col } from "reactstrap";
import ImageUpload from "./ImageUpload";
import { ImageList } from "../../../mail/data/videoList";
const CreatorImages = props => {
  return (
    <div className="app-wrapper">
      <Row>Choose Image to Upload</Row>
      <Row>
        <Col>
          <ImageUpload />
        </Col>
        <Col></Col>
      </Row>
      {ImageList.map((e, index) => (
        <img src={e} key={index} />
      ))}
    </div>
  );
};

export default CreatorImages;
