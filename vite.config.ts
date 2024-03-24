/* eslint-disable import/no-extraneous-dependencies */

import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { PluginOption, defineConfig } from "vite";

export default defineConfig(() => {
  const plugins: PluginOption[] = [react()];

  if (!(process.env.STORYBOOK_RUNNING ?? false)) {
    plugins.push(vike());
  }

  return {
    plugins,
  };
});
