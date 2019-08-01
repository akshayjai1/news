import React from "react";
import PropTypes from "prop-types";
import IntlMessages from "util/IntlMessages";

const ListHeading = props => {
  const { headingId = "allnews" } = props;
  return (
    <div className="d-flex flex-row justify-content-between mb-2">
      <h4 className="mr-2">
        <IntlMessages id={headingId} />
      </h4>

      <span className="ml-2 pointer">
        <i className="zmdi zmdi-search text-primary jr-fs-xl" />
      </span>
    </div>
  );
};

ListHeading.propTypes = {
  headingId: PropTypes.string
};
export default ListHeading;
