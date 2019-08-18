import React from "react";
import { Row, Col } from "reactstrap";
import ImageUpload from "./ImageUpload";
import { AudioList } from "../../../mail/data/videoList";
import AudioPlayer from "react-h5-audio-player";
const CreatorAudios = props => {
  return (
    <div className="app-wrapper">
      <Row>Choose Audio to Upload</Row>
      <Row>
        <Col>
          <ImageUpload />
        </Col>
        <Col></Col>
      </Row>
      {AudioList.map((e, index) => (
        <AudioPlayer src={e} onPlay={e => console.log("onPlay")} key={index} />
      ))}
    </div>
  );
};

export default CreatorAudios;
