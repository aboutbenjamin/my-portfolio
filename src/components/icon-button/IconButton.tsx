import React from "react";
import { Icon } from "../icons/Icon";
import styles from "./IconButton.module.css";

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ComponentProps<typeof Icon>["name"];
  iconColor?: string;
  "aria-label": string;
  className?: string;
};

export function IconButton({ icon, iconColor, ...props }: IconButtonProps) {
  return (
    <button type="button" className={styles.iconButton} {...props}>
      <Icon name={icon} color={iconColor} />
    </button>
  );
}
