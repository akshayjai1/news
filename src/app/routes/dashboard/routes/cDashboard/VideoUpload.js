import React from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
// @import "~video-react/styles/scss/video-react";

class VideoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "" };
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
        <div className="previewText">Please select an Video for Upload</div>
      );
    }

    return (
      <div className="previewComponent">
        <form onSubmit={e => this._handleSubmit(e)}>
          <input
            className="fileInput"
            type="file"
            onChange={e => this._handleImageChange(e)}
          />
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
    );
  }
}

export default VideoUpload;
