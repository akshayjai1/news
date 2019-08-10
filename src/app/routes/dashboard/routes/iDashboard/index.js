import React from "react";

import IntlMessages from "util/IntlMessages";
import ContainerHeader from "components/ContainerHeader/index";
import EditorSourceScoreGraph from "./EditorSourceScoreGraph";
import EditorCategoryScoreGraph from "./EditorCategoryScoreGraph";
import NewNewsScore from "./NewNewsScore";
import SourceBar from "./SourceBar";
import CategoryBar from "./CategoryBar";
import CardBox from "components/CardBox";
import OrganizationStats from "./OrganizationStats";

export const iDashboard = props => {
  return (
    <div className="app-wrapper">
      <div className="dashboard animated slideInUpTiny animation-duration-3">
        <ContainerHeader
          match={props.match}
          title={<IntlMessages id="sidebar.dashboard.news" />}
        />
        <NewNewsScore />
        <div className="row">
          <EditorSourceScoreGraph />
          <EditorCategoryScoreGraph />
        </div>
        <div className="row">
          <CardBox heading="Source Statistics">
            <SourceBar />
          </CardBox>{" "}
          <CardBox heading="Category Statistics">
            <CategoryBar />
          </CardBox>
        </div>
        <OrganizationStats
          heading={<IntlMessages id="organization-news-statistics" />}
        />
        {/* <div className="col-lg-6 col-sm-6 col-12">
          <ReportBox
            styleName="bg-pink text-white p-3"
            icon="accounts-alt"
            price="232"
            detail={<IntlMessages id="dashboard.newAuthors" />}
            subHeadingColor="text-white"
          >
            <NewsStatusScore
              centerText="1800"
              height={100}
              chartType="newsDoughnut"
              backgroundColor={["#A9204F", "#FFF"]}
              borderColor={["#A9204F", "#FFF"]}
              hoverBorderColor={["#A9204F", "#FFF"]}
              hoverBorderWidth={[2, 2]}
              textColor="#fff"
              rotation={50}
            />
          </ReportBox>
        </div> */}
      </div>
    </div>
  );
};
