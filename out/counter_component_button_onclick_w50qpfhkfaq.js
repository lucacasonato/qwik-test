import * as qwik from "@builder.io/qwik";
export const Counter_component_button_onClick_w50qpfHkfAQ = ()=>{
    const [props, store] = qwik.useLexicalScope();
    return store.count += props.step || 1;
};
import { handleWatch as hW } from "@builder.io/qwik";
hW.issue456 && hW.issue123();
export { hW as handleWatch };
