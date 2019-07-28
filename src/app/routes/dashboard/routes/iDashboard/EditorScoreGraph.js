import React from "react";
import SiteTrafficChart from "components/dashboard/Common/SiteTrafficChart";
import IntlMessages from "util/IntlMessages";
const EditorScoreGraph = () => {
  return (
    <div className="jr-card">
      <div className="jr-card-header d-flex align-items-center">
        <h3 className="mb-0">
          {" "}
          <IntlMessages id="mynewsstatistics" />
        </h3>

        <div className="ml-auto">
          <span className="badge bg-green text-white">Live Update</span>
        </div>
      </div>

      <div className="row mb-4">
        <div className="mr-3">
          <span className="size-10 bg-primary lighten-1 rounded-circle d-inline-block mr-1" />
          <IntlMessages id="sidebar.dashboard.newsagency" />
        </div>
        <div className="mr-3">
          <span className="size-10 bg-red lighten-1 rounded-circle d-inline-block mr-1" />
          <IntlMessages id="sidebar.dashboard.freelancer" />
        </div>
        <div className="mr-3">
          <span className="size-10 bg-primary lighten-1 rounded-circle d-inline-block mr-1" />
          <IntlMessages id="sidebar.dashboard.onateam" />
        </div>
        <div className="mr-3">
          <span className="size-10 bg-primary lighten-1 rounded-circle d-inline-block mr-1" />
          <IntlMessages id="sidebar.dashboard.government" />
        </div>
        <div className="mr-3">
          <span className="size-10 bg-red lighten-1 rounded-circle d-inline-block mr-1" />
          <IntlMessages id="totalnews" />
        </div>
        <div className="mr-3">
          <span className="size-10 bg-primary lighten-1 rounded-circle d-inline-block mr-1" />
          <IntlMessages id="sidebar.culture" />
        </div>
        <div className="mr-3">
          <span className="size-10 bg-red lighten-1 rounded-circle d-inline-block mr-1" />
          <IntlMessages id="sidebar.economy" />
        </div>
        <div className="mr-3">
          <span className="size-10 bg-primary lighten-1 rounded-circle d-inline-block mr-1" />
          <IntlMessages id="sidebar.local" />
        </div>
        <div className="mr-3">
          <span className="size-10 bg-red lighten-1 rounded-circle d-inline-block mr-1" />
          <IntlMessages id="sidebar.miscellaneous" />
        </div>
        <div className="mr-3">
          <span className="size-10 bg-primary lighten-1 rounded-circle d-inline-block mr-1" />
          <IntlMessages id="sidebar.policy" />
        </div>
        <div className="mr-3">
          <span className="size-10 bg-red lighten-1 rounded-circle d-inline-block mr-1" />
          <IntlMessages id="sidebar.sport" />
        </div>
        <div className="mr-3">
          <span className="size-10 bg-primary lighten-1 rounded-circle d-inline-block mr-1" />
          <IntlMessages id="sidebar.dashboard.newsagency" />
        </div>
        <div className="mr-3">
          <span className="size-10 bg-red lighten-1 rounded-circle d-inline-block mr-1" />
          <IntlMessages id="sidebar.dashboard.freelancer" />
        </div>
      </div>

      <SiteTrafficChart height={100} />
    </div>
  );
};

export default EditorScoreGraph;
