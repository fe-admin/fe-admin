module.exports = [
  {
    url: "form/advanced",
    type: "get",
    response: () => {
      const res = {
        code: 200,
        data: {},
      };

      res.data[`data|3`] = [
        {
          id: "@guid()",
          name: "@cname()",
          department: "@cname()",
        },
      ];
      return res;
    },
  },
];
