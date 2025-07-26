import React from "react";
import { Icon } from "../icons/Icon";

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ComponentProps<typeof Icon>["name"];
  iconColor?: string;
  "aria-label": string;
  className?: string;
};

export function IconButton({ icon, iconColor, ...props }: IconButtonProps) {
  return (
    <button type="button" {...props}>
      <Icon name={icon} color={iconColor} />
    </button>
  );
}
