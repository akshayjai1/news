import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import IntlMessages from "util/IntlMessages";
export const ChildLink = props => {
  const {
    to = "/app/dashboard/crypto",
    nameId = "sidebar.dashboard.allnews"
  } = props;
  return (
    <li>
      <NavLink className="prepend-icon" to={to}>
        <span className="nav-text">
          <IntlMessages id={nameId} />
        </span>
      </NavLink>
    </li>
  );
};
ChildLink.propTypes = {
  to: PropTypes.string.isRequired,
  nameId: PropTypes.string.isRequired
};
