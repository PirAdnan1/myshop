import * as React from "react";
const Star = (props) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width={16}
  height={15}
  fill="none"
  viewBox="0 0 16 15"
  {...props}
>
  <path
    fill="#FFAD33"
    d="M14.673 7.172c1.07-.81.498-2.517-.845-2.517H11.4a1.4 1.4 0 0 1-1.337-.986l-.724-2.343C8.93.011 7.069.011 6.662 1.326L5.938 3.67a1.4 1.4 0 0 1-1.337.986H2.13c-1.339 0-1.914 1.698-.852 2.512l2.117 1.62a1.4 1.4 0 0 1 .487 1.522l-.769 2.512c-.399 1.302 1.109 2.35 2.19 1.521l1.846-1.414a1.4 1.4 0 0 1 1.702 0l1.83 1.401c1.083.83 2.592-.221 2.189-1.524l-.78-2.522a1.4 1.4 0 0 1 .493-1.53l2.09-1.581Z"
  />
</svg>
);
export default Star;
