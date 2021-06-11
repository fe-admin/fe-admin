import Mock from "mockjs";
import Url from "url";
import querystring from "querystring";
import user from "./user";
import role from "./role";
import list from "./list";
import message from "./message";
import dashboard from "./dashboard";

function mockWrap(respond) {
    return function(options) {
        let result = null;
        if (respond instanceof Function) {
            const { body, type, url } = options;
            const urlstr = Url.parse(url);
            const query = querystring.parse(urlstr.query);
            result = respond({
                method: type,
                body: JSON.parse(body),
                query,
            });
        } else {
            result = respond;
        }
        return Mock.mock(result);
    };
}

for (const i of [...user, ...role, ...list, ...message, ...dashboard]) {
    Mock.mock(new RegExp(i.url), i.type || "get", mockWrap(i.response));
}
