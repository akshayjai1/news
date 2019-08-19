import React from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import Widget from "components/Widget/index";
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import labels from "../../../mail/data/labels";
// @import "~video-react/styles/scss/video-react";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class VideoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: "",
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

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log("handle uploading-", this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (
        <Player
          style={{ width: "500px", height: "500px" }}
          playsInline
          src={imagePreviewUrl}
        />
      );
    } else {
      $imagePreview = (
        <div /> // className="previewText">Please select an Video for Upload</div>
      );
    }

    return (
      <Widget>
        <h4>Upload Video</h4>
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
        </div>
        {/* <div className="App">
          <FilePond
            ref={ref => (this.pond = ref)}
            files={this.state.files}
            allowMultiple={true}
            maxFiles={3}
            server="/api"
            onupdatefiles={fileItems => {
              // Set currently active file objects to this.state
              this.setState({
                files: fileItems.map(fileItem => fileItem.file)
              });
            }}
          ></FilePond>
        </div> */}
        <div className="row">
          <div className="previewComponent">
            <form onSubmit={e => this._handleSubmit(e)}>
              <div
                className="upload-btn-wrapper"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  display: "inline-block"
                }}
              >
                <button
                  class="btn"
                  style={{
                    border: "2px solid gray",
                    color: "gray",
                    backgroundColor: "white",
                    padding: "8px 20px",
                    borderRadius: "8px",
                    fontSize: "20px",
                    fontWeight: "bold"
                  }}
                >
                  Upload a Video
                </button>
                <input
                  type="file"
                  name="myfile"
                  onChange={e => this._handleImageChange(e)}
                  style={{
                    fontSize: "100px",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    opacity: 0
                  }}
                />
              </div>
              {/* <button
            className="submitButton"
            type="submit"
            onClick={e => this._handleSubmit(e)}
          >
            Upload Image
          </button> */}
            </form>
            <div className="imgPreview">{$imagePreview}</div>
          </div>
        </div>
        <div className="col-12">
          <Button
            size="small"
            variant="contained"
            color="primary"
            className="text-capitalize"
          >
            Upload
          </Button>
        </div>
      </Widget>
    );
  }
}

export default VideoUpload;
