import astro from "eslint-plugin-astro";
import js from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";

/** @type {Array<import("eslint").Linter.Config>} */
export default [
  ...astro.configs.all,
  ...astro.configs["jsx-a11y-strict"],
  js.configs.all,
  jsdoc.configs.recommended
];
