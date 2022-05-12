import * as qwik from "@builder.io/qwik";
import { jsx as _jsx } from "@builder.io/qwik/jsx-runtime";
import { useStore } from "@builder.io/qwik";
export const Counter_component_u287G10q3ug = (props)=>{
    const store = useStore({
        count: props.initial || 0
    });
    return /*#__PURE__*/ _jsx("button", {
        onClickQrl: qwik.qrl(()=>import("./counter_component_button_onclick_w50qpfhkfaq.js")
        , "Counter_component_button_onClick_w50qpfHkfAQ", [
            props,
            store
        ]),
        children: store.count
    });
};
import { handleWatch as hW } from "@builder.io/qwik";
hW.issue456 && hW.issue123();
export { hW as handleWatch };
