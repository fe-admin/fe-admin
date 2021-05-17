import { Bullet, Column } from "@antv/g2plot";

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
