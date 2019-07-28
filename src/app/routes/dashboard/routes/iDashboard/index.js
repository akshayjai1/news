import React from "react";

import IntlMessages from "util/IntlMessages";
import ContainerHeader from "components/ContainerHeader/index";
import EditorSourceScoreGraph from "./EditorSourceScoreGraph";
import EditorCategoryScoreGraph from "./EditorCategoryScoreGraph";
import NewNewsScore from "./NewNewsScore";

export const iDashboard = props => {
  return (
    <div className="app-wrapper">
      <div className="dashboard animated slideInUpTiny animation-duration-3">
        <ContainerHeader
          match={props.match}
          title={<IntlMessages id="sidebar.dashboard.news" />}
        />
        <NewNewsScore />
        <div class="row">
          <EditorSourceScoreGraph />
          <EditorCategoryScoreGraph />
        </div>
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
