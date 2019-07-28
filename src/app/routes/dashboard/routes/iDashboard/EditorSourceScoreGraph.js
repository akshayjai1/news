import React from "react";
import SiteTrafficChart from "components/dashboard/Common/SiteTrafficChart";
import IntlMessages from "util/IntlMessages";

export const Legend = props => {
  const { color = "bg-primary", name = "onateam" } = props;
  return (
    <div className="mr-3">
      <span
        className={`size-10 ${color} lighten-1 rounded-circle d-inline-block mr-1`}
      />
      <IntlMessages id={name} />
    </div>
  );
};
const SourceLegendData = [
  {
    name: "newsagency",
    color: "bg-green"
  },
  {
    name: "freelancer",
    color: "bg-primary"
  },
  {
    name: "onateam",
    color: "bg-yellow"
  },
  {
    name: "government",
    color: "bg-orange"
  },
  {
    name: "totalnews",
    color: "bg-blue"
  }
];
const EditorSourceScoreGraph = () => {
  return (
    <div className="jr-card col-lg-6 col-md-12 col-sm-12">
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
        {SourceLegendData.map(e => (
          <Legend name={e.name} key={e.name} color={e.color} />
        ))}
      </div>

      <SiteTrafficChart height={100} />
    </div>
  );
};

export default EditorSourceScoreGraph;
