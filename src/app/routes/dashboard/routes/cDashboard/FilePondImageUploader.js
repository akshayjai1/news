import React from "react";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import Widget from "components/Widget/index";
import labels from "../../../mail/data/labels";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class FilePondImageUploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Set initial files, type 'local' means this is a file
      // that has already been uploaded to the server (see docs)
      files: [
        // {
        //   source: "index.html",
        //   options: {
        //     type: "local"
        //   }
        // }
      ],
      label: "All",
      name: ""
    };
  }

  handleInit() {
    console.log("FilePond instance has initialised", this.pond);
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <Widget>
        <h4>Upload Image</h4>
        <div className="row">
          <div className="col-sm-4 col-6 mb-3">
            <TextField
              id="name"
              label="Name"
              // onChange={this.handleChange("name")}
              margin="normal"
              fullWidth
            />
          </div>
          <div className="col-md-4 col-12">
            <TextField
              id="select-label"
              select
              label="Choose Category"
              // onChange={this.handleChange("label")}
              helperText="Please choose category for the image"
              margin="normal"
              fullWidth
            >
              {labels.map(e => (
                <MenuItem value={e} key={e}>
                  {e}
                </MenuItem>
              ))}
            </TextField>
          </div>
          {/* <div className="col-sm-4 col-6 mb-3">
            <FormControl className="w-100">
              <InputLabel htmlFor="demo-controlled-open-select">
                Select Label
              </InputLabel>
              <Select
                value={this.state.label}
                onChange={this.handleChange("label")}
                inputProps={{
                  name: "name",
                  id: "demo-controlled-open-select"
                }}
              >
                {labels.map(e => (
                  <MenuItem value={e} key={e}>
                    {e}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div> */}
        </div>
        <div className="App">
          <FilePond
            ref={ref => (this.pond = ref)}
            files={this.state.files}
            allowMultiple={true}
            maxFiles={3}
            server="/api"
            oninit={() => this.handleInit()}
            onupdatefiles={fileItems => {
              // Set currently active file objects to this.state
              this.setState({
                files: fileItems.map(fileItem => fileItem.file)
              });
            }}
          ></FilePond>
        </div>
        <div className="col-12">
          <Button
            variant="contained"
            color="primary"
            className="text-capitalize btn-block"
          >
            Upload
          </Button>
        </div>
      </Widget>
    );
  }
}
export default FilePondImageUploader;
