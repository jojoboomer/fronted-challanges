import react from "@astrojs/react";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  env: {
    schema: {
      API_KEY: envField.string({
        context: "server",
        access: "secret",
        default: "at_BqaZm0iYknAMLlKzYFtt3W0lHCybX",
      }),
    },
  },
});
