import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import scss from 'rollup-plugin-scss';
import typescript from "@rollup/plugin-typescript";

const plugins = [
  replace({
    preventAssignment: true,
    "process.env.NODE_ENV": process.env.NODE_ENV === "production" ? JSON.stringify("production") : null,
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
  scss({
    insert: true
  }),
];

export default [
  {
    input: "src/RobotModule/index.ts",
    output: {
      file: "robot-module.js",
    },
    plugins,
  },
  {
    onwarn: function(warning, superOnWarn) {
      if (warning.code === 'THIS_IS_UNDEFINED') { return; }
      superOnWarn(warning);
    },
    input: "src/instance-historic-activities.tsx",
    output: {
      file: "instance-historic-activities.js",
    },
    plugins,
  },
  {
    onwarn: function(warning, superOnWarn) {
      if (warning.code === 'THIS_IS_UNDEFINED') { return; }
      superOnWarn(warning);
    },
    input: "src/definition-historic-activities.tsx",
    output: {
      file: "definition-historic-activities.js",
    },
    plugins,
  },
  {
    onwarn: function(warning, superOnWarn) {
      if (warning.code === 'THIS_IS_UNDEFINED') { return; }
      superOnWarn(warning);
    },
    input: "src/instance-route-history.tsx",
    output: {
      file: "instance-route-history.js",
    },
    plugins,
  },
  {
    onwarn: function(warning, superOnWarn) {
      if (warning.code === 'THIS_IS_UNDEFINED') { return; }
      superOnWarn(warning);
    },
    input: "src/tasklist-audit-log.tsx",
    output: {
      file: "tasklist-audit-log.js",
    },
    plugins,
  },
  {
    onwarn: function(warning, superOnWarn) {
      if (warning.code === 'THIS_IS_UNDEFINED') { return; }
      superOnWarn(warning);
    },
    input: "src/instance-tab-modify.tsx",
    output: {
      file: "instance-tab-modify.js",
    },
    plugins,
  },
];
