import React from "react";

type IconName = "left-arrow" | "bars";

const icons: Record<IconName, React.ReactNode> = {
  "left-arrow": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="icon-svg"
    >
      <path
        d="M15.7071068,6.29289322 L21.4142136,12 L15.7071068,17.7071068 L14.2928932,16.2928932 L17.584,12.9998932 L3,13 L3,11 L17.584,10.9998932 L14.2928932,7.70710678 L15.7071068,6.29289322 Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  bars: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="icon-svg"
    >
      <rect x="3" y="6" width="18" height="2" rx="1" fill="currentColor" />
      <rect x="3" y="11" width="18" height="2" rx="1" fill="currentColor" />
      <rect x="3" y="16" width="18" height="2" rx="1" fill="currentColor" />
    </svg>
  ),
};

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return <span className={className}>{icons[name]}</span>;
}
