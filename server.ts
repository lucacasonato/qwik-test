// run with ``

import { serve } from "https://deno.land/std/http/server.ts";
import { serveDir } from "https://deno.land/std/http/file_server.ts";
import { Root } from "./out/root.js";
import { renderToString } from "@builder.io/qwik/server";

import importMap from "./import_map.json" assert { type: "json" };

serve(async (req) => {
  const url = new URL(req.url);
  if (url.pathname === "/") {
    let { html } = await renderToString(Root);
    html = html.replace("</head>", `<script type="importmap">${JSON.stringify(importMap)}</script></head>`);
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  }
  return serveDir(req, { fsRoot: "./out" });
});
