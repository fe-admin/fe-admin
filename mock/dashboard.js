const Mock = require("mockjs");

module.exports = [
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
