import { defineConfig } from "tsdown";

export default defineConfig([
  {
    entry: ["./src/dom-test.ts"],
    platform: "neutral",
    dts: true,
    format: ["esm"],
    outDir: "./dist",
  },
  {
    entry: ["./src/dom-test.ts"],
    platform: "browser",
    minify: true,
    outDir: "./dist",
    outputOptions: { name: "domTest" },
    format: ["iife"],
  },
]);
