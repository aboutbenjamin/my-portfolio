import React from "react";
import { IconButton } from "../icon-button/IconButton";
import { Icon } from "../icons/Icon";
import styles from "./Toggle.module.css";

export type ToggleIcon = {
  key: string;
  iconName: React.ComponentProps<typeof Icon>["name"];
  label: string;
  iconColor?: string;
};

export type ToggleProps = {
  icons: [ToggleIcon, ToggleIcon];
  activeKey: string;
  onToggle: (key: string) => void;
  ariaLabel?: string;
};

export function Toggle({ icons, activeKey, onToggle, ariaLabel }: ToggleProps) {
  const [leftIcon, rightIcon] = icons;
  const isRightActive = activeKey === rightIcon.key;

  const handleLeftClick = () => {
    if (activeKey !== leftIcon.key) {
      onToggle(leftIcon.key);
    }
  };

  const handleRightClick = () => {
    if (activeKey !== rightIcon.key) {
      onToggle(rightIcon.key);
    }
  };

  return (
    <div
      className={styles.toggleSwitch}
      role="switch"
      aria-checked={isRightActive}
      aria-label={
        ariaLabel ||
        `Switch to ${isRightActive ? leftIcon.label : rightIcon.label}`
      }
    >
      <IconButton
        className={`${styles.toggleButton} ${
          activeKey === leftIcon.key ? styles.active : ""
        }`}
        onClick={handleLeftClick}
        icon={leftIcon.iconName}
        iconColor={leftIcon.iconColor}
        aria-label={leftIcon.label}
      />
      <IconButton
        className={`${styles.toggleButton} ${
          activeKey === rightIcon.key ? styles.active : ""
        }`}
        onClick={handleRightClick}
        icon={rightIcon.iconName}
        iconColor={rightIcon.iconColor}
        aria-label={rightIcon.label}
      />
      <span className={styles.toggleSlider} />
    </div>
  );
}
