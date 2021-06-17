const Mock = require("mockjs");

module.exports = [
  {
    url: "/dashboard/getCardList",
    type: "get",
    response: () => {
      const res = {
        code: 200,
        data: [
          {
            id: "@id()",
            value: `¥ ${Mock.Random.natural(10000, 100000).toLocaleString()}`,
            percentage: ["@float(10, 40, 0, 0)%", "@float(10, 30, 0, 0)%"],
            title: "总销售额",
          },
          {
            id: "@id()",
            value: Mock.Random.natural(10000, 100000).toLocaleString(),
            title: "访问量",
            element: "areaChart",
          },
          {
            id: "@id()",
            value: Mock.Random.natural(10000, 100000).toLocaleString(),
            title: "支付笔数",
            element: "columChart",
          },
          {
            id: "@id()",
            value: "@float(20, 100, 0, 0)%",
            title: "运营活动效果",
            element: "bulletPlot",
          },
        ],
      };
      return res;
    },
  },
  {
    url: "/dashboard/getTabLine",
    type: "get",
    response: () => {
      const res = {
        code: 200,
        "data|10": [
          {
            id: "@guid()",
            desc: "转化率",
            value: "@float(20, 100, 0, 0)",
            title: function({
              context: {
                path: [, , index],
              },
            }) {
              return `第${index + 1}天`;
            },
          },
        ],
      };
      return res;
    },
  },
  {
    url: "/dashboard/getSaleList",
    type: "get",
    response: () => {
      const res = {
        code: 200,
        "data|8": [
          {
            id: "@id()",
            title: "@csentence(5, 12)",
            value: "@natural(1060, 10000)",
          },
        ],
      };
      return res;
    },
  },
];
