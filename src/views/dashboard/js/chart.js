import { Bullet, Area, Column, Line, Pie } from "@antv/g2plot";

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
        yAxis: {
            grid: {
                line: {
                    style: {
                        stroke: "#e9e9e9",
                        lineDash: [2, 5],
                    },
                },
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

export function renderBullet(container, value) {
    const data = [
        {
            title: "满意度",
            ranges: [100],
            measures: [value],
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

export function renderLine(container) {
    const data = [
        {
            year: "1996",
            value: 2626,
            category: "Liquid fuel",
        },
        {
            year: "1996",
            value: 2382,
            category: "Solid fuel",
        },
        {
            year: "1996",
            value: 1198,
            category: "Gas fuel",
        },
        {
            year: "1996",
            value: 203,
            category: "Cement production",
        },
        {
            year: "1996",
            value: 40,
            category: "Gas flarinl",
        },
        {
            year: "1997",
            value: 2701,
            category: "Liquid fuel",
        },
        {
            year: "1997",
            value: 2409,
            category: "Solid fuel",
        },
        {
            year: "1997",
            value: 1197,
            category: "Gas fuel",
        },
        {
            year: "1997",
            value: 209,
            category: "Cement production",
        },
        {
            year: "1997",
            value: 40,
            category: "Gas flarinl",
        },
        {
            year: "1998",
            value: 2763,
            category: "Liquid fuel",
        },
        {
            year: "1998",
            value: 2343,
            category: "Solid fuel",
        },
        {
            year: "1998",
            value: 1224,
            category: "Gas fuel",
        },
        {
            year: "1998",
            value: 209,
            category: "Cement production",
        },
        {
            year: "1998",
            value: 36,
            category: "Gas flarinl",
        },
        {
            year: "1999",
            value: 2741,
            category: "Liquid fuel",
        },
        {
            year: "1999",
            value: 2310,
            category: "Solid fuel",
        },
        {
            year: "1999",
            value: 1258,
            category: "Gas fuel",
        },
        {
            year: "1999",
            value: 217,
            category: "Cement production",
        },
        {
            year: "1999",
            value: 35,
            category: "Gas flarinl",
        },
        {
            year: "2000",
            value: 2845,
            category: "Liquid fuel",
        },
        {
            year: "2000",
            value: 2327,
            category: "Solid fuel",
        },
        {
            year: "2000",
            value: 1289,
            category: "Gas fuel",
        },
        {
            year: "2000",
            value: 226,
            category: "Cement production",
        },
        {
            year: "2000",
            value: 46,
            category: "Gas flarinl",
        },
        {
            year: "2001",
            value: 2848,
            category: "Liquid fuel",
        },
        {
            year: "2001",
            value: 2445,
            category: "Solid fuel",
        },
        {
            year: "2001",
            value: 1316,
            category: "Gas fuel",
        },
        {
            year: "2001",
            value: 237,
            category: "Cement production",
        },
        {
            year: "2001",
            value: 47,
            category: "Gas flarinl",
        },
        {
            year: "2002",
            value: 2832,
            category: "Liquid fuel",
        },
        {
            year: "2002",
            value: 2518,
            category: "Solid fuel",
        },
        {
            year: "2002",
            value: 1342,
            category: "Gas fuel",
        },
        {
            year: "2002",
            value: 252,
            category: "Cement production",
        },
        {
            year: "2002",
            value: 49,
            category: "Gas flarinl",
        },
        {
            year: "2003",
            value: 2958,
            category: "Liquid fuel",
        },
        {
            year: "2003",
            value: 2695,
            category: "Solid fuel",
        },
        {
            year: "2003",
            value: 1397,
            category: "Gas fuel",
        },
        {
            year: "2003",
            value: 276,
            category: "Cement production",
        },
        {
            year: "2003",
            value: 48,
            category: "Gas flarinl",
        },
        {
            year: "2004",
            value: 3043,
            category: "Liquid fuel",
        },
        {
            year: "2004",
            value: 2906,
            category: "Solid fuel",
        },
        {
            year: "2004",
            value: 1443,
            category: "Gas fuel",
        },
        {
            year: "2004",
            value: 298,
            category: "Cement production",
        },
        {
            year: "2004",
            value: 54,
            category: "Gas flarinl",
        },
        {
            year: "2005",
            value: 3068,
            category: "Liquid fuel",
        },
        {
            year: "2005",
            value: 3108,
            category: "Solid fuel",
        },
        {
            year: "2005",
            value: 1485,
            category: "Gas fuel",
        },
        {
            year: "2005",
            value: 320,
            category: "Cement production",
        },
        {
            year: "2005",
            value: 60,
            category: "Gas flarinl",
        },
        {
            year: "2006",
            value: 3091,
            category: "Liquid fuel",
        },
        {
            year: "2006",
            value: 3293,
            category: "Solid fuel",
        },
        {
            year: "2006",
            value: 1534,
            category: "Gas fuel",
        },
        {
            year: "2006",
            value: 356,
            category: "Cement production",
        },
        {
            year: "2006",
            value: 62,
            category: "Gas flarinl",
        },
        {
            year: "2007",
            value: 3071,
            category: "Liquid fuel",
        },
        {
            year: "2007",
            value: 3422,
            category: "Solid fuel",
        },
        {
            year: "2007",
            value: 1562,
            category: "Gas fuel",
        },
        {
            year: "2007",
            value: 382,
            category: "Cement production",
        },
        {
            year: "2007",
            value: 66,
            category: "Gas flarinl",
        },
        {
            year: "2008",
            value: 3103,
            category: "Liquid fuel",
        },
        {
            year: "2008",
            value: 3587,
            category: "Solid fuel",
        },
        {
            year: "2008",
            value: 1630,
            category: "Gas fuel",
        },
        {
            year: "2008",
            value: 388,
            category: "Cement production",
        },
        {
            year: "2008",
            value: 69,
            category: "Gas flarinl",
        },
        {
            year: "2009",
            value: 3042,
            category: "Liquid fuel",
        },
        {
            year: "2009",
            value: 3590,
            category: "Solid fuel",
        },
        {
            year: "2009",
            value: 1584,
            category: "Gas fuel",
        },
        {
            year: "2009",
            value: 415,
            category: "Cement production",
        },
        {
            year: "2009",
            value: 66,
            category: "Gas flarinl",
        },
        {
            year: "2010",
            value: 3107,
            category: "Liquid fuel",
        },
        {
            year: "2010",
            value: 3812,
            category: "Solid fuel",
        },
        {
            year: "2010",
            value: 1696,
            category: "Gas fuel",
        },
        {
            year: "2010",
            value: 446,
            category: "Cement production",
        },
        {
            year: "2010",
            value: 67,
            category: "Gas flarinl",
        },
        {
            year: "2011",
            value: 3134,
            category: "Liquid fuel",
        },
        {
            year: "2011",
            value: 4055,
            category: "Solid fuel",
        },
        {
            year: "2011",
            value: 1756,
            category: "Gas fuel",
        },
        {
            year: "2011",
            value: 494,
            category: "Cement production",
        },
        {
            year: "2011",
            value: 64,
            category: "Gas flarinl",
        },
        {
            year: "2012",
            value: 3200,
            category: "Liquid fuel",
        },
        {
            year: "2012",
            value: 4106,
            category: "Solid fuel",
        },
        {
            year: "2012",
            value: 1783,
            category: "Gas fuel",
        },
        {
            year: "2012",
            value: 519,
            category: "Cement production",
        },
        {
            year: "2012",
            value: 65,
            category: "Gas flarinl",
        },
        {
            year: "2013",
            value: 3220,
            category: "Liquid fuel",
        },
        {
            year: "2013",
            value: 4126,
            category: "Solid fuel",
        },
        {
            year: "2013",
            value: 1806,
            category: "Gas fuel",
        },
        {
            year: "2013",
            value: 554,
            category: "Cement production",
        },
        {
            year: "2013",
            value: 68,
            category: "Gas flarinl",
        },
        {
            year: "2014",
            value: 3280,
            category: "Liquid fuel",
        },
        {
            year: "2014",
            value: 4117,
            category: "Solid fuel",
        },
        {
            year: "2014",
            value: 1823,
            category: "Gas fuel",
        },
        {
            year: "2014",
            value: 568,
            category: "Cement production",
        },
        {
            year: "2014",
            value: 68,
            category: "Gas flarinl",
        },
    ];
    const line = new Line(container, {
        data,
        xField: "year",
        yField: "value",
        seriesField: "category",
        slider: {},
        legend: {
            position: "top",
        },
        yAxis: {
            grid: {
                line: {
                    style: {
                        stroke: "#e9e9e9",
                        lineDash: [2, 5],
                    },
                },
            },
        },
        padding: [50, 30, 70, 50],
    });

    line.render();
}

export function renderTabPie(container, value) {
    const data = [
        { type: "全部", value: 100 - value },
        { type: "其他", value },
    ];
    const piePlot = new Pie(container, {
        color: ["#f3f4f6", "#64afff"],
        data,
        angleField: "value",
        colorField: "type",
        radius: 1,
        innerRadius: 0.6,
        label: null,
        interactions: [{ type: "element-selected" }, { type: "element-active" }],
        statistic: null,
        legend: false,
        tooltip: false,
    });
    piePlot.render();
}
