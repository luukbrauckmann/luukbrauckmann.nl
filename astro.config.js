import { defineConfig, envField } from "astro/config";
import graphql from "@rollup/plugin-graphql";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  adapter: cloudflare({
    imageService: "passthrough"
  }),
  site: "https://luuk.network/",
  env: {
    schema: {
      DATOCMS_TOKEN: envField.string({ context: "server", access: "secret" }),
      GITHUB_TOKEN: envField.string({ context: "server", access: "secret" }),
    },
  },

  vite: {
    plugins: [graphql()],
  },

  devToolbar: {
    enabled: false,
  },
});
