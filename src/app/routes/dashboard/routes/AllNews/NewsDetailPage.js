import React from "react";
import Button from "@material-ui/core/Button";
import IntlMessages from "util/IntlMessages";

const NewsDetailPage = props => {
  const imageStyle = {
    width: "100%",
    height: "auto"
  };
  const { image, title, subTitle, desc } = props.data;
  return (
    <div className="">
      <h3 className="mt-0">{title}</h3>
      <img style={imageStyle} src={image} alt="..." />
      <br />
      <br />
      <div>
        <p>{subTitle}</p>
        <br />
        <p>{subTitle}</p>
        <br />
        <p>{subTitle}</p>
        <br />
        <p>{subTitle}</p>
        <br />
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
