import React from "react";
import Widget from "components/Widget/index";
import Media from "./Media";
import Listing from "./Listing";
import ListHeading from "./ListHeading";

import IconButton from "@material-ui/core/IconButton";
import NewsDetailPage from "./NewsDetailPage";

class AllNews extends React.Component {
  state = {
    activeTab: 0,
    loader: false,
    currentNews: null
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  onSelect = news => {
    this.setState({ currentNews: news });
  };
  render() {
    return (
      <div className="app-wrapper">
        <div className="row">
          <div className="col-lg-8">
            {this.state.currentNews === null ? (
              <Widget>
                <ListHeading headingId="allnews" />
                <Listing
                  toggleFn={this.toggle}
                  activeTab={this.state.activeTab}
                  selectNews={this.onSelect}
                  onSelect={this.onSelect}
                />
              </Widget>
            ) : (
              <div>
                <IconButton
                  className="icon-btn"
                  onClick={() => {
                    this.setState({
                      currentNews: null
                    });
                  }}
                >
                  <i className="zmdi zmdi-arrow-back" />
                </IconButton>
                <NewsDetailPage data={this.state.currentNews} />
              </div>
            )}
          </div>
          <div className="col-lg-4">
            <Media />
          </div>
        </div>
      </div>
    );
  }
}

export default AllNews;
