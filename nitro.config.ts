import { defineConfig } from "nitropack/config";

export default defineConfig({
  preset: process.env.NITRO_PRESET || (process.env.VERCEL ? "vercel" : undefined),
});
