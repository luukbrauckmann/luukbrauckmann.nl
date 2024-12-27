import type { AstroIntegration } from "astro";

export const icons = (): AstroIntegration => ({
  name: "icons",
  hooks: {
    'astro:config:setup': ({ logger }) => {
      logger.info("Hej")
    },
  },
});
