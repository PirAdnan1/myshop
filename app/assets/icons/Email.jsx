import * as React from "react"
const Email = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m1 1 10 7 10-7M1 15h20V1H1v14Z"
    />
  </svg>
)
export default Email
