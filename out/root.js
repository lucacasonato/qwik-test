import { jsx as _jsx, jsxs as _jsxs } from "@builder.io/qwik/jsx-runtime";
import { Counter } from "./counter.js";
export const Root = ()=>{
    return /*#__PURE__*/ _jsxs("html", {
        children: [
            /*#__PURE__*/ _jsxs("head", {
                children: [
                    /*#__PURE__*/ _jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ _jsx("title", {
                        children: "Qwik Blank App"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("body", {
                children: /*#__PURE__*/ _jsx(Counter, {})
            })
        ]
    });
};
