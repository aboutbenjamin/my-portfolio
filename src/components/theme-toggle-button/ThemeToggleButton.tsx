import { useTheme } from "../../theme/use-theme";
import { IconButton } from "../icon-button/IconButton";

export function ThemeToggleButton() {
  const { mode, toggleMode } = useTheme();
  return (
    <IconButton
      aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
      onClick={toggleMode}
      icon={mode === "dark" ? "sun" : "moon"}
      iconColor={mode === "dark" ? "#fff" : "#000"}
    />
  );
}
