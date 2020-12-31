import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import sass from 'rollup-plugin-sass';
import typescript from "@rollup/plugin-typescript";

const plugins = [
  replace({
    "process.env.NODE_ENV": JSON.stringify("production"),
  }),
  alias({
    entries: [{ find: "inherits", replacement: "inherits/inherits_browser" }],
  }),
  resolve(),
  commonjs({
    include: "node_modules/**",
  }),
  typescript(),
  image(),
  json(),
  sass({
    insert: true
  }),
];

export default [
  {
    input: "src/instance-route-history.tsx",
    output: {
      file: "instance-route-history.js",
    },
    plugins,
  },
];
