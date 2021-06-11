module.exports = [
    {
        url: "user/login",
        type: "post",
        response: ({ body: { accountName, password } }) => {
            if (
                password === "fe-admin" &&
        (accountName === "admin" || accountName === "user")
            ) {
                return {
                    code: 200,
                    data: {
                        uid: "@guid()",
                        accountName,
                        roles: [accountName],
                        token: "@guid()",
                    },
                };
            } 
            return {
                code: 2000,
                message: "错误的用户名和密码（admin/fe-admin)",
            };
      
        },
    },
];
