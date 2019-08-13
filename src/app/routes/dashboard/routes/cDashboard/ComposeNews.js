import React from "react";
import Select from "react-select";
import { Input, Form, FormGroup, Label, Row, Col } from "reactstrap";
import Button from "@material-ui/core/Button";
import ControlledEditor from "./ControlledEditor";
import ImageUpload from "./ImageUpload";
import VideoUpload from "./VideoUpload";
import IntlMessages from "util/IntlMessages";
const options = [
  {
    value: "All",
    label: "All"
  },
  {
    value: "Local",
    label: "Local"
  },
  {
    value: "Economy",
    label: "Economy"
  },
  {
    value: "Policy",
    label: "Policy"
  },
  {
    value: "Sports",
    label: "Sports"
  },
  {
    value: "Culture",
    label: "Culture"
  },
  {
    value: "Miscellaneous",
    label: "Miscellaneous"
  }
];
const ComposeNews = props => {
  return (
    <div className="app-wrapper">
      <FormGroup>
        <Label>Select News Category</Label>
        <Row>
          <Col>
            <Select
              options={options}
              isMulti
              name="Category"
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </Col>
          <Col></Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Label>News Title</Label>
        <Row>
          <Col>
            <Input />
          </Col>
          <Col>
            <Button>
              <i className={`zmdi zmdi-mic zmdi-hc-fw`} />
              Record Audio{" "}
            </Button>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Label>News Description</Label>
        <Row>
          <Col>
            <ControlledEditor />
          </Col>
          <Col>
            <Button>
              <i className={`zmdi zmdi-mic zmdi-hc-fw`} />
              Record Audio{" "}
            </Button>
          </Col>
        </Row>
      </FormGroup>
      {/* <ImagesUpload /> */}
      <Row>
        <Col>
          <ImageUpload />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <VideoUpload />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <Button variant="contained" color="primary" className="btn-block">
            <i className={`zmdi zmdi-upload zmdi-hc-fw`} />
            <IntlMessages id="submit-news" />
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default ComposeNews;
