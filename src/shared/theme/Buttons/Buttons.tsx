import {
  ElementProps,
  Button,
  type ButtonProps,
  ActionIcon,
  type ActionIconProps,
  CloseButton,
  type CloseButtonProps,
  CopyButton,
  type CopyButtonProps,
  FileButtonProps,
  FileButton,
} from "@mantine/core";

export interface MantineActionIconProps extends ActionIconProps {}
export function MantineActionIcon(props: MantineActionIconProps) {
  return <ActionIcon {...props} />;
}

export interface MantineButtonProps
  extends ButtonProps,
    ElementProps<"button", keyof ButtonProps> {}
export function MantineButton(props: MantineButtonProps) {
  return <Button {...props} />;
}

export interface MantineCloseButtonProps
  extends CloseButtonProps,
    ElementProps<"button", keyof CloseButtonProps> {}
export function MantineCloseButton(props: MantineCloseButtonProps) {
  return <CloseButton {...props} />;
}

export interface MantineCopyButtonProps
  extends CopyButtonProps,
    ElementProps<"button", keyof CopyButtonProps> {}
export function MantineCopyButton(props: MantineCopyButtonProps) {
  return <CopyButton {...props} />;
}

export interface MantineFileButtonProps
  extends FileButtonProps,
    ElementProps<"button", keyof FileButtonProps> {}
export function MantineFileButton(props: MantineFileButtonProps) {
  return <FileButton {...props} />;
}
