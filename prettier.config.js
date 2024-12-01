/** @type {import("prettier").Config} */
export default {
  trailingComma: "es5",
  semi: true,
  plugins: ["prettier-plugin-astro", "prettier-plugin-css-order"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
