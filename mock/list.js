const Mock = require("mockjs");

module.exports = [
    {
        url: "list/getTableList",
        type: "get",
        response: ({ query }) => {
            const arr = ["关闭", "异常", "已上线", "运行中"];
            const res = {
                code: 200,
                data: {
                    total: 20,
                    currentPage: 1 * query.page,
                },
            };

            res.data[`data|${query.pageSize}`] = [
                {
                    id: "@guid()",
                    name: "@cname()",
                    desc: "@ctitle()",
                    callNo: "@integer(1,100)",
                    updatedAt: Mock.Random.date("yyyy-MM-dd"),
                    "status|1": [0, 1, 2, 3],
                    statusStr: function() {
                        return arr[this.status];
                    },
                },
            ];
            return res;
        },
    },
];
