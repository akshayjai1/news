import React from "react";
import SiteTrafficChart from "components/dashboard/Common/SiteTrafficChart";
import IntlMessages from "util/IntlMessages";

const Legend = props => {
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
const CategoryLegendData = [
  {
    name: "local",
    color: "bg-green"
  },
  {
    name: "economy",
    color: "bg-primary"
  },
  {
    name: "policy",
    color: "bg-yellow"
  },
  {
    name: "sport",
    color: "bg-orange"
  },
  {
    name: "culture",
    color: "bg-yellow"
  },
  {
    name: "miscellaneous",
    color: "bg-orange"
  },
  {
    name: "totalnews",
    color: "bg-blue"
  }
];
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
        {SourceLegendData.map(e => (
          <Legend name={e.name} key={e.name} color={e.color} />
        ))}
        <div className="mr-3">
          <span className="size-10 bg-primary lighten-1 rounded-circle d-inline-block mr-1" />
          <IntlMessages id="culture" />
        </div>
        <div className="mr-3">
          <span className="size-10 bg-red lighten-1 rounded-circle d-inline-block mr-1" />
          <IntlMessages id="economy" />
        </div>
        <div className="mr-3">
          <span className="size-10 bg-primary lighten-1 rounded-circle d-inline-block mr-1" />
          <IntlMessages id="local" />
        </div>
        <div className="mr-3">
          <span className="size-10 bg-red lighten-1 rounded-circle d-inline-block mr-1" />
          <IntlMessages id="miscellaneous" />
        </div>
        <div className="mr-3">
          <span className="size-10 bg-primary lighten-1 rounded-circle d-inline-block mr-1" />
          <IntlMessages id="policy" />
        </div>
        <div className="mr-3">
          <span className="size-10 bg-red lighten-1 rounded-circle d-inline-block mr-1" />
          <IntlMessages id="sport" />
        </div>
        <div className="mr-3">
          <span className="size-10 bg-primary lighten-1 rounded-circle d-inline-block mr-1" />
          <IntlMessages id="newsagency" />
        </div>
        <div className="mr-3">
          <span className="size-10 bg-red lighten-1 rounded-circle d-inline-block mr-1" />
          <IntlMessages id="freelancer" />
        </div>
      </div>

      <SiteTrafficChart height={100} />
    </div>
  );
};

export default EditorScoreGraph;
