import React from "react";
import { ResponsiveContainer } from "recharts";

import IntlMessages from "util/IntlMessages";
import YearlyProfitChart from "components/dashboard/eCommerce/YearlyProfitChart";
import ReportBox from "components/ReportBox/index";
import ContainerHeader from "components/ContainerHeader/index";
import EditorScoreGraph from "./EditorScoreGraph";

export const iDashboard = props => {
  return (
    <div className="app-wrapper">
      <div className="dashboard animated slideInUpTiny animation-duration-3">
        <ContainerHeader
          match={props.match}
          title={<IntlMessages id="sidebar.dashboard.news" />}
        />

        <div className="row">
          <div className="col-lg-3 col-sm-6 col-12">
            <ReportBox
              styleName="bg-primary text-white p-3"
              price="85K+"
              icon="group-work"
              detail={<IntlMessages id="sidebar.dashboard.newsagency" />}
              subHeadingColor="text-white"
            >
              <ResponsiveContainer width="100%" height={100}>
                <YearlyProfitChart
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
              </ResponsiveContainer>
            </ReportBox>
          </div>

          <div className="col-lg-3 col-sm-6 col-12">
            <ReportBox
              styleName="bg-cyan text-white p-3"
              icon="account-o"
              price="526"
              detail={<IntlMessages id="sidebar.dashboard.freelancer" />}
              subHeadingColor="text-white"
            >
              <YearlyProfitChart
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
          </div>

          <div className="col-lg-3 col-sm-6 col-12">
            <ReportBox
              styleName="bg-pink text-white p-3"
              icon="account-box-phone"
              price="232"
              detail={<IntlMessages id="sidebar.dashboard.onateam" />}
              subHeadingColor="text-white"
            >
              <YearlyProfitChart
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
          </div>

          <div className="col-lg-3 col-sm-6 col-12">
            <ReportBox
              styleName="bg-orange text-white p-3"
              icon="city-alt"
              price="756+"
              detail={<IntlMessages id="sidebar.dashboard.government" />}
              subHeadingColor="text-white"
            >
              <YearlyProfitChart
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
          </div>
        </div>
        <EditorScoreGraph />
      </div>
    </div>
  );
};
