/* eslint-disable no-undef */
/* eslint-disable camelcase */
"use client";

if (typeof window !== "undefined") {
  _affirm_config = {
    public_api_key: process.env.NEXT_PUBLIC_PUBLIC_API_KEY,
    script: process.env.NEXT_PUBLIC_AFFIRMJS_API_URL,
  };
  (function (m, g, n, d, a, e, h, c) {
    const b = m[n] || {};
    const k = document.createElement(e);
    const p = document.getElementsByTagName(e)[0];
    const l = function (a, b, c) {
      return function () {
        a[b]._.push([c, arguments]);
      };
    };
    b[d] = l(b, d, "set");
    const f = b[d];
    b[a] = {};
    b[a]._ = [];
    f._ = [];
    b._ = [];
    b[a][h] = l(b, a, h);
    b[c] = function () {
      b._.push([h, arguments]);
    };
    a = 0;
    for (
      c =
        "set add save post open empty reset on off trigger ready setProduct".split(
          " ",
        );
      a < c.length;
      a++
    )
      f[c[a]] = l(b, d, c[a]);
    a = 0;
    for (c = ["get", "token", "url", "items"]; a < c.length; a++)
      f[c[a]] = function () {};
    k.async = !0;
    k.src = g[e];
    p.parentNode.insertBefore(k, p);
    delete g[e];
    f(g);
    m[n] = b;
  })(
    window,
    _affirm_config,
    "affirm",
    "checkout",
    "ui",
    "script",
    "ready",
    "jsReady",
  );
}
