import React from "react";
import { Row, Col } from "reactstrap";
import { Player } from "video-react";
import VideoUpload from "./VideoUpload";
import { videoList } from "../../../mail/data/videoList";

const CreatorVideos = props => {
  return (
    <div className="app-wrapper">
      <Row>Choose Video to Upload</Row>
      <Row>
        <Col>
          <VideoUpload />
        </Col>
        <Col></Col>
      </Row>
      {videoList.map((e, index) => (
        <Player
          style={{ width: "500px", height: "500px" }}
          playsInline
          src={e}
          key={index}
        />
      ))}
    </div>
  );
};

export default CreatorVideos;
