import React from "react";
import ReportBox from "components/ReportBox/index";
import { ResponsiveContainer } from "recharts";
import YearlyProfitChart from "components/dashboard/eCommerce/YearlyProfitChart";

import IntlMessages from "util/IntlMessages";

const NewNewsScore = props => {
  return (
    <div className="row">
      <div className="col-lg-3 col-sm-6 col-12">
        <ReportBox
          styleName="bg-primary text-white p-3"
          price="85K+"
          icon="group-work"
          detail={<IntlMessages id="newsagency" />}
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
          detail={<IntlMessages id="freelancer" />}
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
          detail={<IntlMessages id="onateam" />}
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
          detail={<IntlMessages id="government" />}
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
  );
};

export default NewNewsScore;
