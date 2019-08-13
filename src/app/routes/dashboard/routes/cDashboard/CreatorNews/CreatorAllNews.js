import React from "react";
import Widget from "components/Widget/index";

import IconButton from "@material-ui/core/IconButton";
import NewsDetailPage from "../../AllNews/NewsDetailPage";
import Listing from "../../AllNews/Listing";
import ListHeading from "../../AllNews/ListHeading";

class CreatorAllNews extends React.Component {
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
    console.log("this props.", this.props);
    return (
      <div className="app-wrapper">
        <div className="row">
          <div className="col-lg-12">
            {this.state.currentNews === null ? (
              <Widget>
                <ListHeading
                  headingId="allnews"
                  raw={this.props.location.pathname.replace("/app/", "")}
                />
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
        </div>
      </div>
    );
  }
}

export default CreatorAllNews;
