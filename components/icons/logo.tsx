import clsx from 'clsx';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SA Travelcations logo"
      viewBox="0 0 150 50"
      {...props}
      className={clsx('fill-current text-blue-500', props.className)}
    >
      <title>SA Travelcations</title>
      {/* Icon Part */}
      <circle cx="25" cy="25" r="20" fill="#87CEEB" /> {/* Sky blue circle */}
      <path
        d="M15 30c3-5 9-10 20-10s17 5 20 10H15z"
        fill="#FFFFFF"
      /> {/* Wave for ocean */}
      <path
        d="M20 25l10-15 10 15H20z"
        fill="#4CAF50"
      /> {/* Mountain */}
      <circle cx="30" cy="12" r="4" fill="#FDB813" /> {/* Sun */}

      {/* Text Part */}
      <text
        x="55"
        y="30"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fontSize="18"
        fill="#333"
      >
        SA Travelcations
      </text>
    </svg>
  );
}
