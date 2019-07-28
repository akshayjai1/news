import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SiteTrafficChart from "components/dashboard/Common/SiteTrafficChart";
import IntlMessages from "util/IntlMessages";
const SiteTraffic = () => {
  return (
    <div className="jr-card">
      <div className="jr-card-header d-flex align-items-center">
        <h3 className="mb-0">Site Traffic</h3>

        <div className="ml-auto">
          <span className="badge bg-green text-white">Live Update</span>
        </div>
      </div>

      <div className="row mb-4">
        <div className="mr-4">
          <span className="size-10 bg-primary lighten-1 rounded-circle d-inline-block mr-1" />{" "}
          Orderd
        </div>
        <div>
          <span className="size-10 bg-red lighten-1 rounded-circle d-inline-block mr-1" />{" "}
          Pending
        </div>
        <div className="col-2">
          <IconButton className="size-40 border-2 border-green mr-3 p-1">
            <i className="zmdi zmdi-plus text-green" />
          </IconButton>
          <span>
            <IntlMessages id="sidebar.dashboard.newsagency" />
          </span>
        </div>
        <div className="col-2">
          <IconButton className="size-40 border-2 border-red mr-3 p-1">
            <i className="zmdi zmdi-repeat-one text-red" />
          </IconButton>
          <span>
            <IntlMessages id="sidebar.dashboard.freelancer" />
          </span>
        </div>
        <div className="col-2">
          <IconButton className="size-40 border-2 border-primary mr-3 p-1">
            <i className="zmdi zmdi-star text-primary" />
          </IconButton>
          <span>
            <IntlMessages id="sidebar.dashboard.onateam" />
          </span>
        </div>
        <div className="col-2">
          <IconButton className="size-20 border-2 border-red mr-3 p-1">
            <i className="zmdi zmdi-share text-red zmdi-hc-lg" />
          </IconButton>
          <span>
            <IntlMessages id="sidebar.dashboard.government" />
          </span>
        </div>
        <div className="col-2">
          <IconButton className="size-40 border-2 border-primary mr-3 p-1">
            <i className="zmdi zmdi-star text-primary" />
          </IconButton>
          <span>
            <IntlMessages id="sidebar.dashboard.onateam" />
          </span>
        </div>
        <div className="col-2">
          <IconButton className="size-40 border-2 border-red mr-3 p-1">
            <i className="zmdi zmdi-share text-red" />
          </IconButton>
          <span>
            <IntlMessages id="sidebar.dashboard.government" />
          </span>
        </div>
        <div className="col-2">
          <IconButton className="size-40 border-2 border-green mr-3 p-1">
            <i className="zmdi zmdi-plus text-green" />
          </IconButton>
          <span>
            <IntlMessages id="sidebar.dashboard.newsagency" />
          </span>
        </div>
        <div className="col-2">
          <IconButton className="size-40 border-2 border-red mr-3 p-1">
            <i className="zmdi zmdi-repeat-one text-red" />
          </IconButton>
          <span>
            <IntlMessages id="sidebar.dashboard.freelancer" />
          </span>
        </div>
        <div className="col-2">
          <IconButton className="size-40 border-2 border-primary mr-3 p-1">
            <i className="zmdi zmdi-star text-primary" />
          </IconButton>
          <span>
            <IntlMessages id="sidebar.dashboard.onateam" />
          </span>
        </div>
        <div className="col-2">
          <IconButton className="size-40 border-2 border-red mr-3 p-1">
            <i className="zmdi zmdi-share text-red" />
          </IconButton>
          <span>
            <IntlMessages id="sidebar.dashboard.government" />
          </span>
        </div>
        <div className="col-2">
          <IconButton className="size-40 border-2 border-primary mr-3 p-1">
            <i className="zmdi zmdi-star text-primary" />
          </IconButton>
          <span>
            <IntlMessages id="sidebar.dashboard.onateam" />
          </span>
        </div>
        <div className="col-2">
          <IconButton className="size-40 border-2 border-red mr-3 p-1">
            <i className="zmdi zmdi-share text-red" />
          </IconButton>
          <span>
            <IntlMessages id="sidebar.dashboard.government" />
          </span>
        </div>
      </div>

      <SiteTrafficChart height={100} />
    </div>
  );
};

export default SiteTraffic;
