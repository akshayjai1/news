import React from "react";
import styled from "styled-components";
import "tui-image-editor/dist/tui-image-editor.css";
import ImageEditor from "@toast-ui/react-image-editor";
import Button from "@material-ui/core/Button";
import IntlMessages from "util/IntlMessages";

const ImageArea = styled.div`
  border: 2px dashed #a9f;
  width: 100%;
  height: 300px;
  font-size: 18px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NewsDetailPage = props => {
  const handleDrop = (event, index, boardName) => {
    if (event.dataTransfer && event.dataTransfer.getData("URL").length > 0) {
      setImageUrl(event.dataTransfer.getData("URL"));
    }
  };
  const imageStyle = {
    width: "100%",
    height: "auto"
  };
  const [imageUrl, setImageUrl] = React.useState("");
  const { image, title, subTitle, desc } = props.data;
  return (
    <div className="">
      <h3 className="mt-0">{title}</h3>
      {imageUrl.length === 0 ? (
        <ImageArea
          onDragOver={e => e.preventDefault()}
          onDrop={e => handleDrop(e)}
        >
          Please drag image from right panel to attach
        </ImageArea>
      ) : (
        <ImageEditor
          onDragOver={e => e.preventDefault()}
          onDrop={e => handleDrop(e)}
          includeUI={{
            loadImage: {
              path: imageUrl,
              name: "SampleImage"
            },
            theme: {},
            menu: ["shape", "filter"],
            initMenu: "filter",
            uiSize: {
              width: "100%",
              height: "700px"
            },
            menuBarPosition: "bottom"
          }}
          cssMaxHeight={500}
          cssMaxWidth={700}
          selectionStyle={{
            cornerSize: 20,
            rotatingPointOffset: 70
          }}
          usageStatistics={true}
        />
      )}
      {/* <img style={imageStyle} src={image} alt="..." /> */}
      <br />
      <br />
      <div>
        <p>{subTitle}</p>
        <br />
        <br />
        <div className="jr-news-tags-row">
          <div className="jr-news-tags-left">
            <p className="text-grey text-truncate">
              <i
                className={`zmdi zmdi-label-alt jr-fs-lg mr-2 d-inline-block align-middle`}
              />
              {desc}
            </p>
          </div>
        </div>
        <div className="module-add-task">
          <Button variant="contained" color="primary" className="ml-auto">
            <i className="zmdi zmdi-edit zmdi-hc-fw" />
            <IntlMessages id="edit" />{" "}
          </Button>
          <Button variant="contained" color="secondary" className="ml-auto">
            <i className="zmdi zmdi-local-post-office zmdi-hc-fw" />
            <IntlMessages id="send-for-approval" />{" "}
          </Button>
          <Button variant="contained" color="secondary" className="ml-auto">
            <i className="zmdi zmdi-print zmdi-hc-fw" />
            <IntlMessages id="publish" />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
