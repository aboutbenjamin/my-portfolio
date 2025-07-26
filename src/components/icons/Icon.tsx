type IconName = "left-arrow" | "bars" | "sun" | "moon" | "english" | "dutch";

type IconProps = {
  name: IconName;
  className?: string;
  color?: string;
};

const icons = {
  "left-arrow": (color?: string, className?: string) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className || "icon-svg"}
    >
      <path
        d="M15.7071068,6.29289322 L21.4142136,12 L15.7071068,17.7071068 L14.2928932,16.2928932 L17.584,12.9998932 L3,13 L3,11 L17.584,10.9998932 L14.2928932,7.70710678 L15.7071068,6.29289322 Z"
        fill={color || "currentColor"}
      ></path>
    </svg>
  ),
  bars: (color?: string, className?: string) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className || "icon-svg"}
    >
      <rect
        x="3"
        y="6"
        width="18"
        height="2"
        rx="1"
        fill={color || "currentColor"}
      />
      <rect
        x="3"
        y="11"
        width="18"
        height="2"
        rx="1"
        fill={color || "currentColor"}
      />
      <rect
        x="3"
        y="16"
        width="18"
        height="2"
        rx="1"
        fill={color || "currentColor"}
      />
    </svg>
  ),
  sun: (color?: string, className?: string) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className || "icon-svg"}
      fill="none"
      stroke={color || "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle
        cx="12"
        cy="12"
        r="5"
        fill={color || "currentColor"}
        stroke="none"
      />
      <g stroke={color || "currentColor"}>
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </g>
    </svg>
  ),
  moon: (color?: string, className?: string) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className || "icon-svg"}
      fill="none"
      stroke={color || "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3
           a7 7 0 0 0 9.79 9.79z"
      />
    </svg>
  ),
  english: (className?: string) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ borderRadius: "50%" }}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="#fff"
        stroke="#ddd"
        strokeWidth="1"
      />
      <defs>
        <clipPath id="gb-clip">
          <circle cx="12" cy="12" r="10" />
        </clipPath>
      </defs>
      <g clipPath="url(#gb-clip)">
        <rect x="2" y="2" width="20" height="20" fill="#012169" />
        <path d="M2 2l20 20M22 2L2 22" stroke="#fff" strokeWidth="2" />
        <path d="M2 2l20 20M22 2L2 22" stroke="#c8102e" strokeWidth="1" />
        <path d="M12 2v20M2 12h20" stroke="#fff" strokeWidth="3" />
        <path d="M12 2v20M2 12h20" stroke="#c8102e" strokeWidth="2" />
      </g>
    </svg>
  ),
  dutch: (className?: string) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ borderRadius: "50%" }}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="#fff"
        stroke="#ddd"
        strokeWidth="1"
      />
      <defs>
        <clipPath id="nl-clip">
          <circle cx="12" cy="12" r="10" />
        </clipPath>
      </defs>
      <g clipPath="url(#nl-clip)">
        <rect x="2" y="2" width="20" height="6.67" fill="#ae1c28" />
        <rect x="2" y="8.67" width="20" height="6.67" fill="#fff" />
        <rect x="2" y="15.33" width="20" height="6.67" fill="#21468b" />
      </g>
    </svg>
  ),
};

export function Icon({ name, className, color }: IconProps) {
  return icons[name](color, className);
}
