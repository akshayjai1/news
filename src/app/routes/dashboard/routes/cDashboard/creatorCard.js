import React from "react";
import ReportBox from "components/ReportBox/index";
import { ResponsiveContainer } from "recharts";
import YearlyProfitChart from "components/dashboard/eCommerce/YearlyProfitChart";

import IntlMessages from "util/IntlMessages";

const CreatorCard = props => {
  return (
    <div className="row">
      <div className="col-lg-3 col-sm-6 col-12">
        <ReportBox
          styleName="bg-primary text-white p-3"
          price="560"
          icon="collection-plus"
          detail={<IntlMessages id="total-news" />}
          subHeadingColor="text-white"
        >
          <ResponsiveContainer width="100%" height={100}>
            <YearlyProfitChart
              centerText=""
              height={100}
              chartType="newsDoughnut"
              backgroundColor={[
                "#A9204F",
                "#FFF",
                "#adf",
                "#09f",
                "#9af",
                "#f00"
              ]}
              borderColor={["#A9204F", "#FFF", "#adf", "#09f", "#9af", "#f00"]}
              hoverBorderColor={[
                "#A9204F",
                "#FFF",
                "#adf",
                "#09f",
                "#9af",
                "#f00"
              ]}
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
          icon="view-week"
          price="24"
          detail={<IntlMessages id="news-last-week" />}
          subHeadingColor="text-white"
        >
          <YearlyProfitChart
            centerText="24"
            height={100}
            chartType="newsDoughnut"
            backgroundColor={[
              "#A9204F",
              "#FFF",
              "#adf",
              "#09f",
              "#9af",
              "#f00"
            ]}
            borderColor={["#A9204F", "#FFF", "#adf", "#09f", "#9af", "#f00"]}
            hoverBorderColor={[
              "#A9204F",
              "#FFF",
              "#adf",
              "#09f",
              "#9af",
              "#f00"
            ]}
            hoverBorderWidth={[2, 2]}
            textColor="#fff"
            rotation={50}
          />
        </ReportBox>
      </div>

      <div className="col-lg-3 col-sm-6 col-12">
        <ReportBox
          styleName="bg-pink text-white p-3"
          icon="money-box"
          price="$1600"
          detail={<IntlMessages id="total-earnings" />}
          subHeadingColor="text-white"
        >
          <YearlyProfitChart
            centerText="1600"
            height={100}
            chartType="newsDoughnut"
            backgroundColor={[
              "#A9204F",
              "#FFF",
              "#adf",
              "#09f",
              "#9af",
              "#f00"
            ]}
            borderColor={["#A9204F", "#FFF", "#adf", "#09f", "#9af", "#f00"]}
            hoverBorderColor={[
              "#A9204F",
              "#FFF",
              "#adf",
              "#09f",
              "#9af",
              "#f00"
            ]}
            hoverBorderWidth={[2, 2]}
            textColor="#fff"
            rotation={50}
          />
        </ReportBox>
      </div>

      <div className="col-lg-3 col-sm-6 col-12">
        <ReportBox
          styleName="bg-orange text-white p-3"
          icon="money"
          price="$120"
          detail={<IntlMessages id="last-week-earnings" />}
          subHeadingColor="text-white"
        >
          <YearlyProfitChart
            centerText="120"
            height={100}
            chartType="newsDoughnut"
            backgroundColor={[
              "#A9204F",
              "#FFF",
              "#adf",
              "#09f",
              "#9af",
              "#f00"
            ]}
            borderColor={["#A9204F", "#FFF", "#adf", "#09f", "#9af", "#f00"]}
            hoverBorderColor={[
              "#A9204F",
              "#FFF",
              "#adf",
              "#09f",
              "#9af",
              "#f00"
            ]}
            hoverBorderWidth={[2, 2]}
            textColor="#fff"
            rotation={50}
          />
        </ReportBox>
      </div>
    </div>
  );
};

export default CreatorCard;
