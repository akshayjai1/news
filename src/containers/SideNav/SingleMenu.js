import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import IntlMessages from 'util/IntlMessages';
export const SingleMenu = props => {
  const { to, icon, nameId } = props;
  return (
    <li className="menu no-arrow">
      <NavLink to={to}>
        <i className={`zmdi zmdi-${icon} zmdi-hc-fw`} />
        <span className="nav-text">
          <IntlMessages id={nameId} />
        </span>
      </NavLink>
    </li>
  );
};
SingleMenu.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string,
  nameId: PropTypes.string.isRequired
};
