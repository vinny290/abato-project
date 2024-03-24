import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
    "@storybook/addon-links",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      // Speeds up Storybook build time
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      // Makes union prop types like variant and size appear as select controls
      shouldExtractLiteralValuesFromEnum: true,
      // Makes string and boolean types that can be undefined appear as inputs and switches
      shouldRemoveUndefinedFromOptional: true,

      propFilter: (prop) => {
        if (prop.parent) {
          const fileName = prop.parent.fileName;
          if (/node_modules/.test(fileName)) {
            if (/@mantine/.test(fileName)) {
              if (
                prop.name.length <= 3 ||
                prop.name.at(0) == "_" ||
                prop.name == "bgsz"
              ) {
                return false;
              }
              return true;
            }
            return false;
          } else {
            return true;
          }
        }

        return true;
      },
    },
  },
};
export default config;
