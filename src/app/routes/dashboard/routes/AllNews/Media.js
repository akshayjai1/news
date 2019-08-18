import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import IconButton from "@material-ui/core/IconButton";
import CardLayout from "components/CardLayout/index";
import CardMenu from "components/CardHeader/CardMenu";
import IntlMessages from "util/IntlMessages";
import gallery, { videoUrls } from "./galleryData";
import CustomScrollbars from "util/CustomScrollbars";
function TabContainer({ children, dir }) {
  return <div dir={dir}>{children}</div>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

class Media extends Component {
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  onOptionMenuSelect = event => {
    this.setState({ menuState: true, anchorEl: event.currentTarget });
  };
  handleRequestClose = () => {
    this.setState({ menuState: false });
  };

  constructor() {
    super();
    this.state = {
      value: 0,
      anchorEl: undefined,
      menuState: false
    };
  }

  onDragStart = (event, url) => {
    event.dataTransfer.setData("text/uri-list", url);
  };

  render() {
    const { anchorEl, menuState } = this.state;
    const { theme } = this.props;

    return (
      <CardLayout styleName="col-lg-12">
        <div className="jr-card-header mb-3 d-flex align-items-center">
          <div className="mr-auto">
            <h3 className="card-heading mb-0">
              <i className="zmdi zmdi-cloud-box mr-2" />
              <IntlMessages id="latest-media" />
            </h3>
          </div>
          <IconButton
            className="size-30 jr-fs-xl text-light p-0"
            onClick={this.onOptionMenuSelect.bind(this)}
          >
            <i className="zmdi zmdi-more-vert" />
          </IconButton>
        </div>

        <div className="tab-notifications">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            variant="fullWidth"
          >
            <Tab className="tab text-capitalize" label="Images" />

            <Tab className="tab text-capitalize" label="Videos" />
          </Tabs>
        </div>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          style={{ height: "600px", "overflow-y": "scroll" }}
        >
          <TabContainer dir={theme.direction}>
            {/* <CustomScrollbars className="scrollbar" style={{ height: "100%" }}> */}
            <ul className="list-inline thumbnail-list">
              {gallery.map((image, index) => (
                <li key={index} className="">
                  <div className="grid-thumb-equal">
                    <span className="grid-thumb-cover jr-link">
                      <img
                        draggable
                        alt={image.title}
                        src={image.img}
                        onDragStart={e => {
                          this.onDragStart(e, image.img);
                        }}
                      />
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            {/* </CustomScrollbars> */}
          </TabContainer>
          <TabContainer dir={theme.direction}>
            {videoUrls.map(e => (
              <iframe
                width="260"
                height="215"
                src={e + "?autoplay=0"}
                key={e}
                frameborder="0"
                autoPlay={0}
              ></iframe>
            ))}
          </TabContainer>
        </SwipeableViews>
        <CardMenu
          menuState={menuState}
          anchorEl={anchorEl}
          handleRequestClose={this.handleRequestClose.bind(this)}
        />
      </CardLayout>
    );
  }
}

Media.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withStyles(null, { withTheme: true })(Media);
