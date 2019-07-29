import React from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";

import Widget from "components/Widget/index";
import { allNews, AgencyNews, OnaNews, FreelanceNews } from "./data";
import NewsItem from "./NewsItem";
import IntlMessages from "util/IntlMessages";
import Media from "./Media";

const newsData = [allNews, AgencyNews, OnaNews, FreelanceNews];

class AllNews extends React.Component {
  state = {
    activeTab: 0,
    loader: false,
    nameIdArray: ["all", "newsagency", "freelance", "government"]
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({
      news: newsData[value],
      loader: true
    });
    setTimeout(() => {
      this.setState({ loader: false });
    }, 1500);
  };
  getTabsHandles = nameIdArray => {
    return nameIdArray.map((id, index) => {
      return (
        <NavItem>
          <NavLink
            className={classnames({
              active: this.state.activeTab == index
            })}
            onClick={() => {
              this.toggle(index);
            }}
          >
            <IntlMessages id={id} />
          </NavLink>
        </NavItem>
      );
    });
  };

  getTabPanes = panesData => {
    return panesData.map((content, idx) => (
      <TabPane tabId={idx}>
        {content.map((data, index) => (
          <NewsItem key={index} data={data} />
        ))}
      </TabPane>
    ));
  };
  render() {
    return (
      <div className="app-wrapper">
        <div className="row">
          <div className="col-lg-8">
            <Widget>
              <div className="d-flex flex-row justify-content-between mb-2">
                <h4 className="mr-2">
                  <IntlMessages id="allnews" />
                </h4>

                <span className="ml-2 pointer">
                  <i className="zmdi zmdi-search text-primary jr-fs-xl" />
                </span>
              </div>
              <div className="jr-news-action jr-tabs-classic jr-tabs-classic-no-border">
                <div className="jr-tabs-up jr-tabs-up-no-border">
                  <Nav className="jr-tabs-pills-ctr" pills>
                    {this.getTabsHandles(this.state.nameIdArray)}
                  </Nav>
                </div>

                <TabContent
                  className="jr-tabs-content"
                  activeTab={this.state.activeTab}
                >
                  {this.getTabPanes([
                    allNews,
                    AgencyNews,
                    FreelanceNews,
                    OnaNews
                  ])}
                </TabContent>
              </div>
            </Widget>
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
/**
 * <TabPane tabId={0}>
              {allNews.map((data, index) => (
                <NewsItem key={index} data={data} />
              ))}
            </TabPane>

            <TabPane tabId={1}>
              {AgencyNews.map((data, index) => (
                <NewsItem key={index} data={data} />
              ))}
            </TabPane>
            <TabPane tabId={2}>
              {FreelanceNews.map((data, index) => (
                <NewsItem key={index} data={data} />
              ))}
            </TabPane>
            <TabPane tabId={3}>
              {OnaNews.map((data, index) => (
                <NewsItem key={index} data={data} />
              ))}
            </TabPane>
 * 
 * 
 *               <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  <IntlMessages id="all" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  Bitcoin
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "3"
                  })}
                  onClick={() => {
                    this.toggle("3");
                  }}
                >
                  Ripple
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "4"
                  })}
                  onClick={() => {
                    this.toggle("4");
                  }}
                >
                  Litecoin
                </NavLink>
              </NavItem>

 */
