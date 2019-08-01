import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
const CategoryGauge = props => {
  React.useEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.RadarChart);
    chart.paddingRight = 20;
    chart.responsive.enabled = true;

    chart.data = [
      {
        category: "Local",
        value: 30,
        full: 100
      },
      {
        category: "Economy",
        value: 10,
        full: 100
      },
      {
        category: "Policy",
        value: 10,
        full: 100
      },
      {
        category: "Sports",
        value: 15,
        full: 100
      },
      {
        category: "Culture",
        value: 10,
        full: 100
      },
      {
        category: "Miscellaneous",
        value: 25,
        full: 100
      }
    ];

    chart.colors.list = [
      am4core.color("#F44336"),
      am4core.color("#40BCD4"),
      am4core.color("#a39800"),
      am4core.color("#F433f6"),
      am4core.color("#00BCf4"),
      am4core.color("#00af0f")
    ];

    // Make chart not full circle
    chart.startAngle = -90;
    chart.endAngle = 180;
    chart.innerRadius = am4core.percent(40);

    // Set number format
    chart.numberFormatter.numberFormat = "#.#'%'";

    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.fontWeight = 500;

    categoryAxis.renderer.labels.template.adapter.add("fill", function(
      fill,
      target
    ) {
      return target.dataItem.index >= 0 ? "#6C757D" : fill;
    });
    categoryAxis.renderer.minGridDistance = 20;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;

    // Create series
    let series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueX = "full";
    series1.dataFields.categoryY = "category";
    series1.clustered = false;
    series1.columns.template.fill = new am4core.InterfaceColorSet().getFor(
      "alternativeBackground"
    );
    series1.columns.template.fillOpacity = 0.08;
    series1.columns.template.cornerRadiusTopLeft = 30;
    series1.columns.template.strokeWidth = 0;
    series1.columns.template.radarColumn.cornerRadius = 30;

    let series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueX = "value";
    series2.dataFields.categoryY = "category";
    series2.clustered = false;
    series2.columns.template.strokeWidth = 0;
    series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series2.columns.template.radarColumn.cornerRadius = 30;
    series2.columns.template.disabled = false;
    series2.columns.template.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Add cursor
    chart.cursor = new am4charts.RadarCursor();
    // return () => {
    //   if (this.chart) {
    //     this.chart.dispose();
    //   }
    // };
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "300px" }} />;
};

export const salesStatisticData = [
  { name: "Jan", news: 9000 },
  { name: "Feb", news: 12000 },
  { name: "Mar", news: 7000 },
  { name: "Apr", news: 12000 },
  { name: "May", news: 14000 },
  { name: "Jun", news: 18500 },
  { name: "Jul", news: 14000 },
  { name: "Aug", news: 17000 },
  { name: "Sep", news: 15000 },
  { name: "Oct", news: 18000 },
  { name: "Nov", news: 19500 },
  { name: "Dec", news: 16000 }
];
const statisticsLegendData = [
  {
    numberValue: 4854,
    text: "Local"
  },
  {
    numberValue: 6875,
    text: "Economy"
  },
  {
    numberValue: 4858,
    text: "Policy"
  },
  {
    numberValue: 4848,
    text: "Sports"
  },
  {
    numberValue: 4548,
    text: "Culture"
  },
  {
    numberValue: 8548,
    text: "Miscellaneous"
  },
  {
    numberValue: 34531,
    text: "Total"
  }
];
const StatisticsLegend = props => {
  const { size = [1, 3, 4], numberValue, text /*icon = "calendar"*/ } = props;
  return (
    <div
      className={`col-6 col-sm-${size[2]} col-md-${size[1]} col-lg-${size[0]}`}
    >
      <p className="text-muted align-items-center mb-2">{text}</p>
      <span className="d-flex align-items-center mb-2">
        {/* <i className={`zmdi zmdi-${icon} text-muted chart-f20`} /> */}
        <span className="text-dark">{numberValue}</span>
      </span>
    </div>
  );
};
// 48548;
const OrganizationStats = () => {
  return (
    <div className="jr-card">
      <div className="jr-card-header d-flex align-items-center">
        <h3 className="mb-0">Organization News Statistic</h3>
      </div>
      <div className="row mb-3">
        {statisticsLegendData.map(e => (
          <StatisticsLegend
            key={e.text}
            text={e.text}
            numberValue={e.numberValue}
          />
        ))}
      </div>

      <div className="row">
        <div className="col-lg-7 col-12 mb-5 mb-lg-1">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={salesStatisticData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <XAxis dataKey="name" />
              <YAxis type="number" domain={[0, 26000]} />
              <CartesianGrid strokeDasharray="0" stroke="#DCDEDE" />

              <Tooltip />
              <defs>
                <linearGradient id="salesStatistic" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4258BC" stopOpacity={1} />
                  <stop offset="95%" stopColor="#FFF" stopOpacity={0.8} />
                </linearGradient>
              </defs>

              <Area
                type="monotone"
                dataKey="news"
                strokeWidth={2}
                stroke="#6F82E5"
                fill="url(#salesStatistic)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="col-lg-5 col-12">
          <ResponsiveContainer width="100%">
            <CategoryGauge />
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default OrganizationStats;
