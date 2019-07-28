import React from "react";
import SiteTrafficChart from "components/dashboard/Common/SiteTrafficChart";
import IntlMessages from "util/IntlMessages";
import { Legend } from "./EditorSourceScoreGraph";
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
const EditorCategoryScoreGraph = () => {
  return (
    <div className="jr-card col-lg-6 col-md-12 col-sm-12">
      <div className="jr-card-header d-flex align-items-center">
        <h3 className="mb-0">
          {" "}
          <IntlMessages id="your_news_category_statistics" />
        </h3>

        <div className="ml-auto">
          <span className="badge bg-green text-white">Live Update</span>
        </div>
      </div>

      <div className="row mb-4">
        {CategoryLegendData.map(e => (
          <Legend name={e.name} key={e.name} color={e.color} />
        ))}
      </div>

      <SiteTrafficChart height={100} />
    </div>
  );
};

export default EditorCategoryScoreGraph;
