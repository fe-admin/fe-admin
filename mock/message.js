const Mock = require("mockjs");

module.exports = [
    {
        url: "message/getMessageList",
        type: "get",
        response: ({ query }) => {
            const arr = ["关闭", "异常", "已上线", "运行中"];
            const res = {
                code: 200,
                data: {
                    total: 20,
                    unread: 5,
                    currentPage: 1 * query.page,
                },
            };

            res.data[`data|${query.pageSize}`] = [
                {
                    id: "@guid()",
                    type: "@cname()",
                    subType: "@cname()",
                    content: "@cparagraph()",
                    receiveTime: Mock.Random.date("yyyy-MM-dd"),
                    "status|1": [0, 1, 2, 3],
                    statusStr: function() {
                        return arr[this.status];
                    },
                },
            ];
            return res;
        },
    },
    {
        url: "message/getSubscribeList",
        type: "get",
        response: () => {
            const res = {
                code: 200,
                "data|6": [
                    {
                        id: "@guid()",
                        msgType: "@ctitle(4,8)",
                        "children|3": [
                            {
                                id: "@guid()",
                                msgType: "@ctitle(4,8)",
                                web: "@boolean()",
                                email: "@boolean()",
                                mobile: "@boolean()",
                                receiveUser: "@cname()",
                            },
                        ],
                    },
                ],
            };
            return res;
        },
    },
];
