import React from "react";

const AppleAboutMeIcon = (props) => {
  return (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      version="1"
      viewBox="0 0 48 48"
      enableBackground="new 0 0 48 48"
      height="100%"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        // fill="#FF7043"
        fill="#5A5766"
        d="M38,44H12V4h26c2.2,0,4,1.8,4,4v32C42,42.2,40.2,44,38,44z"
      ></path>
      <path
        // fill="#BF360C"
        fill="#48435C"
        d="M10,4h2v40h-2c-2.2,0-4-1.8-4-4V8C6,5.8,7.8,4,10,4z"
      ></path>
      <g fill="#00A6ED">
        <circle cx="26" cy="20" r="4"></circle>
        <path d="M33,30c0,0-1.9-4-7-4c-5.1,0-7,4-7,4v2h14V30z"></path>
      </g>
    </svg>
  );
};

export default AppleAboutMeIcon;
