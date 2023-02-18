import React from "react";

const ArrowLeft = ({ size = 38, color = "#2c3e50" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-file inline"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="5" y1="12" x2="19" y2="12" />
      <line x1="5" y1="12" x2="11" y2="18" />
      <line x1="5" y1="12" x2="11" y2="6" />
    </svg>
  );
};

export default ArrowLeft;
