import type { Meta, StoryObj } from "@storybook/react";
import { IconAdjustments } from "@tabler/icons-react";
import {
  MantineActionIcon,
  MantineActionIconProps,
  MantineButton,
  MantineButtonProps,
  MantineCloseButton,
  MantineCloseButtonProps,
  MantineCopyButton,
  MantineCopyButtonProps,
  MantineFileButton,
  MantineFileButtonProps,
} from "./Buttons";

const meta: Meta<MantineButtonProps> = {
  component: MantineButton,
  title: "theme/Buttons",
};

export default meta;

export const ActionIcon: StoryObj<MantineActionIconProps> = {
  render: (args) => (
    <MantineActionIcon {...args}>
      <IconAdjustments style={{ width: "70%", height: "70%" }} stroke={1.5} />
    </MantineActionIcon>
  ),
  argTypes: {
    children: {
      control: false,
    },
  },
};

export const Button: StoryObj<MantineButtonProps> = {
  render: (args) => <MantineButton {...args} />,
  argTypes: {
    children: {
      control: "text",
    },
  },
  args: {
    children: "Button",
  },
};

export const CloseButton: StoryObj<MantineCloseButtonProps> = {
  render: (args) => <MantineCloseButton {...args} />,
};

export const CopyButton: StoryObj<MantineCopyButtonProps> = {
  render: (args) => <MantineCopyButton {...args} />,
  argTypes: {
    children: {
      control: false,
    },
  },
  args: {
    children: ({ copied, copy }) => (
      <MantineButton color={copied ? "teal" : "blue"} onClick={copy}>
        {copied ? "Copied url" : "Copy url"}
      </MantineButton>
    ),
  },
};

export const FileButton: StoryObj<MantineFileButtonProps> = {
  render: (args) => <MantineFileButton {...args} />,
  argTypes: {
    children: {
      control: false,
    },
  },
  args: {
    children: (props) => <MantineButton {...props}>Upload image</MantineButton>,
  },
};
