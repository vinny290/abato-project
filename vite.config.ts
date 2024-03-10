import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [react(), vike()],
};

// eslint-disable-next-line import/no-default-export
export default config;
