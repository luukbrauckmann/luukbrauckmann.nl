import { defineConfig, envField } from "astro/config";

export default defineConfig({
  site: "https://luuk.network/",
  env: {
    schema: {
      DATOCMS_TOKEN: envField.string({ context: "server", access: "secret" }),
    },
  },
});
