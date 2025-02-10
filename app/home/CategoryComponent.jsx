import React from "react";
import Link from "next/link";

function CategoryComponent({ Icon, title }) {
  return (
    <Link href={"/"} className="hover:bg-red-700 hover:text-white">
      <div className="border border-gray-800 rounded-md flex flex-col items-center justify-center w-[170px] h-[145px] hover:text-white">
        <Icon />
        <p>{title}</p>
      </div>
    </Link>
  );
}

export default CategoryComponent;
