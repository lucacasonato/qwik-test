// run with ``

import { Root } from "./out/root.js";
import { renderToString } from "@builder.io/qwik/server";

const res = await renderToString(Root);
console.log(res.html);
