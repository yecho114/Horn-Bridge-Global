export function CarSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M40 168c-14 0-24-11-24-24 0-14 11-25 25-25h27l38-52c10-14 26-22 43-22h178c15 0 29 6 40 17l45 45h55c33 0 63 15 82 41l16 22c9 12 14 27 14 42v14c0 14-11 25-25 25H40"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M150 97h270M300 97V47"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle cx="196" cy="168" r="34" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="196" cy="168" r="12" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="536" cy="168" r="34" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="536" cy="168" r="12" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 143h48M24 155h34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function RoutePath({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 96C60 96 60 24 120 24s60 72 120 72 60-56 152-56"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="1 9"
        strokeLinecap="round"
      />
      <circle cx="8" cy="96" r="5" fill="currentColor" />
      <circle cx="392" cy="40" r="5" fill="currentColor" />
    </svg>
  );
}
