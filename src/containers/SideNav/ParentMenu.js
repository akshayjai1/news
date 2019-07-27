import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import IntlMessages from "util/IntlMessages";
import { ChildLink } from "./ChildLink";

export const ParentMenu = props => {
  const {
    parentNameId = "sidebar.dashboard",
    parentIcon = "view-dashboard",
    childLinks
  } = props;

  return (
    <li className="menu collapse-box">
      <Button>
        <i className={`zmdi zmdi-${parentIcon} zmdi-hc-fw`} />
        <span className="nav-text">
          <IntlMessages id={parentNameId} />
        </span>
      </Button>
      <ul className="sub-menu">
        {childLinks.map(e => (
          <ChildLink to={e.to} nameId={e.nameId} key={e.nameId} />
        ))}
        {/* <li>
          <NavLink className="prepend-icon" to="/app/dashboard/listing">
            <span className="nav-text">
              <IntlMessages id="sidebar.dashboard.newsagency" />
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink className="prepend-icon" to="/app/dashboard/crm">
            <span className="nav-text">
              <IntlMessages id="sidebar.dashboard.freelancer" />
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink className="prepend-icon" to="/app/dashboard/intranet">
            <span className="nav-text">
              <IntlMessages id="sidebar.dashboard.onateam" />
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink className="prepend-icon" to="/app/dashboard/eCommerce">
            <span className="nav-text text-transform-none">
              <IntlMessages id="sidebar.dashboard.government" />
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink className="prepend-icon" to="/app/dashboard/news">
            <span className="nav-text">
              <IntlMessages id="sidebar.dashboard.inbox" />
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink className="prepend-icon" to="/app/dashboard/misc">
            <span className="nav-text">
              <IntlMessages id="sidebar.dashboard.sentitems" />
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink className="prepend-icon" to="/app/dashboard/misc">
            <span className="nav-text">
              <IntlMessages id="sidebar.dashboard.chat" />
            </span>
          </NavLink>
        </li> */}
      </ul>
    </li>
  );
};

ParentMenu.propTypes = {
  childLinks: PropTypes.array.isRequired,
  parentIcon: PropTypes.string,
  parentNameId: PropTypes.string.isRequired
};
