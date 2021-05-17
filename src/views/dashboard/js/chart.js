import { Bullet, Area, Column } from "@antv/g2plot";

const data = [
  { month: "1", value: 1078 },
  { month: "2", value: 1216 },
  { month: "3", value: 758 },
  { month: "4", value: 623 },
  { month: "5", value: 319 },
  { month: "6", value: 422 },
  { month: "7", value: 100 },
  { month: "8", value: 217 },
  { month: "9", value: 358 },
  { month: "10", value: 1513 },
  { month: "11", value: 1388 },
  { month: "12", value: 597 },
];

export function renderSaleChart(container) {
  const columnPlot = new Column(container, {
    data,
    autoFit: true,
    padding: "auto",
    xField: "month",
    yField: "value",
    color: "#64afff",
    meta: {
      value: {
        tickInterval: 200,
        max: 1200,
        min: 0,
      },
      month: {
        formatter: (val) => `${val} 月`,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  });

  columnPlot.render();
}

export function renderBullet(container) {
  const data = [
    {
      title: "满意度",
      ranges: [100],
      measures: [80],
      target: 85,
    },
  ];

  const bulletPlot = new Bullet(container, {
    data,
    measureField: "measures",
    rangeField: "ranges",
    targetField: "target",
    xField: "title",
    color: {
      range: "#f0efff",
      measure: "#5B8FF9",
      target: "#3D76DD",
    },
    xAxis: false,
    yAxis: false,
  });

  bulletPlot.render();
}

export function renderArea(container) {
  const data = [
    {
      timePeriod: "2006 Q3",
      value: 1,
    },
    {
      timePeriod: "2006 Q4",
      value: 1.08,
    },
    {
      timePeriod: "2007 Q1",
      value: 1.17,
    },
    {
      timePeriod: "2007 Q2",
      value: 1.26,
    },
    {
      timePeriod: "2007 Q3",
      value: 1.34,
    },
    {
      timePeriod: "2007 Q4",
      value: 1.41,
    },
    {
      timePeriod: "2008 Q1",
      value: 1.52,
    },
    {
      timePeriod: "2008 Q2",
      value: 1.67,
    },
    {
      timePeriod: "2008 Q3",
      value: 1.84,
    },
    {
      timePeriod: "2008 Q4",
      value: 2.07,
    },
    {
      timePeriod: "2009 Q1",
      value: 2.39,
    },
    {
      timePeriod: "2009 Q2",
      value: 2.71,
    },
    {
      timePeriod: "2009 Q3",
      value: 3.03,
    },
    {
      timePeriod: "2009 Q4",
      value: 3.33,
    },
    {
      timePeriod: "2010 Q1",
      value: 3.5,
    },
    {
      timePeriod: "2010 Q2",
      value: 3.37,
    },
    {
      timePeriod: "2010 Q3",
      value: 3.15,
    },
    {
      timePeriod: "2010 Q4",
      value: 3.01,
    },
    {
      timePeriod: "2011 Q1",
      value: 2.8,
    },
    {
      timePeriod: "2011 Q2",
      value: 2.8,
    },
    {
      timePeriod: "2011 Q3",
      value: 2.84,
    },
    {
      timePeriod: "2011 Q4",
      value: 2.75,
    },
    {
      timePeriod: "2012 Q1",
      value: 2.64,
    },
    {
      timePeriod: "2012 Q2",
      value: 2.55,
    },
    {
      timePeriod: "2012 Q3",
      value: 2.46,
    },
    {
      timePeriod: "2012 Q4",
      value: 2.45,
    },
    {
      timePeriod: "2013 Q1",
      value: 2.57,
    },
    {
      timePeriod: "2013 Q2",
      value: 2.68,
    },
    {
      timePeriod: "2013 Q3",
      value: 2.8,
    },
    {
      timePeriod: "2013 Q4",
      value: 2.89,
    },
    {
      timePeriod: "2014 Q1",
      value: 2.85,
    },
    {
      timePeriod: "2014 Q2",
      value: 2.73,
    },
    {
      timePeriod: "2014 Q3",
      value: 2.54,
    },
    {
      timePeriod: "2014 Q4",
      value: 2.32,
    },
    {
      timePeriod: "2015 Q1",
      value: 2.25,
    },
    {
      timePeriod: "2015 Q2",
      value: 2.33,
    },
    {
      timePeriod: "2015 Q3",
      value: 2.53,
    },
    {
      timePeriod: "2015 Q4",
      value: 2.74,
    },
    {
      timePeriod: "2016 Q1",
      value: 2.76,
    },
    {
      timePeriod: "2016 Q2",
      value: 2.61,
    },
    {
      timePeriod: "2016 Q3",
      value: 2.35,
    },
    {
      timePeriod: "2016 Q4",
      value: 2.11,
    },
    {
      timePeriod: "2017 Q1",
      value: 2.08,
    },
    {
      timePeriod: "2017 Q2",
      value: 2.2,
    },
    {
      timePeriod: "2017 Q3",
      value: 2.38,
    },
    {
      timePeriod: "2017 Q4",
      value: 2.59,
    },
    {
      timePeriod: "2018 Q1",
      value: 2.63,
    },
    {
      timePeriod: "2018 Q2",
      value: 2.67,
    },
    {
      timePeriod: "2018 Q3",
      value: 2.64,
    },
    {
      timePeriod: "2018 Q4",
      value: 2.5,
    },
    {
      timePeriod: "2019 Q1",
      value: 2.31,
    },
    {
      timePeriod: "2019 Q2",
      value: 2.04,
    },
    {
      timePeriod: "2019 Q3",
      value: 1.83,
    },
    {
      timePeriod: "2019 Q4",
      value: 1.71,
    },
    {
      timePeriod: "2020 Q1",
      value: 1.65,
    },
    {
      timePeriod: "2020 Q2",
      value: 1.59,
    },
    {
      timePeriod: "2020 Q3",
      value: 1.58,
    },
  ];
  const area = new Area(container, {
    data,
    xField: "timePeriod",
    yField: "value",
    xAxis: false,
    yAxis: false,
    areaStyle: { fill: "#975fe4", fillOpacity: 1 },
    line: { style: { lineWidth: 0 } },
  });
  area.render();
}

export function renderColumn(container) {
  const data = [
    {
      type: "家具家电",
      sales: 38,
    },
    {
      type: "粮油副食",
      sales: 52,
    },
    {
      type: "生鲜水果",
      sales: 61,
    },
    {
      type: "美容洗护",
      sales: 145,
    },
    {
      type: "母婴用品",
      sales: 48,
    },
    {
      type: "进口食品",
      sales: 38,
    },
    {
      type: "食品饮料",
      sales: 38,
    },
    {
      type: "家庭清洁",
      sales: 38,
    },
  ];
  const columnPlot = new Column(container, {
    data,
    xField: "type",
    yField: "sales",
    xAxis: false,
    yAxis: false,
    meta: {
      type: {
        alias: "类别",
      },
      sales: {
        alias: "销售额",
      },
    },
  });

  columnPlot.render();
}
