import React from "react";
import classnames from "classnames";

import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import IntlMessages from "util/IntlMessages";
import NewsItem from "./NewsItem";
import {
  allNews,
  AgencyNews,
  OnaNews,
  FreelanceNews,
  GovernmentNews
} from "./data";

const getTabsHandles = (nameIdArray, activeTab, toggleFn) => {
  return nameIdArray.map((id, index) => {
    return (
      <NavItem>
        <NavLink
          className={classnames({
            active: activeTab === index
          })}
          onClick={() => {
            toggleFn(index);
          }}
        >
          <IntlMessages id={id} />
        </NavLink>
      </NavItem>
    );
  });
};

const getTabPanes = (panesData, onSelect) => {
  return panesData.map((content, idx) => (
    <TabPane tabId={idx}>
      {content.map((data, index) => (
        <NewsItem
          key={index}
          data={data}
          onSelect={() => {
            onSelect(data);
          }}
        />
      ))}
    </TabPane>
  ));
};
// const newsData = [allNews, AgencyNews, OnaNews, FreelanceNews, GovernmentNews];

const Listing = props => {
  const { toggleFn, activeTab, onSelect } = props;
  const nameIdArray = [
    "all",
    "newsagency",
    "freelancer",
    "onateam",
    "government"
  ];

  return (
    <div className="jr-news-action jr-tabs-classic jr-tabs-classic-no-border">
      <div className="jr-tabs-up jr-tabs-up-no-border">
        <Nav className="jr-tabs-pills-ctr" pills>
          {getTabsHandles(nameIdArray, activeTab, toggleFn)}
        </Nav>
      </div>

      <TabContent className="jr-tabs-content" activeTab={activeTab}>
        {getTabPanes(
          [allNews, AgencyNews, FreelanceNews, OnaNews, GovernmentNews],
          onSelect
        )}
      </TabContent>
    </div>
  );
};

export default Listing;
