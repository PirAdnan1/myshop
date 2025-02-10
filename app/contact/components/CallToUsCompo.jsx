import React from "react";

function CallToUsCompo({ Icon, title, description, phone, email }) {
  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center gap-x-4">
        <div className="flex justify-center items-center bg-red-800 w-10 h-10 rounded-full">
          <Icon className=" " />
        </div>
        <p className="font-bold">{title}</p>
      </div>
      <div className="mt-12">
        <p>{description}</p>
        <p className="mt-3">{phone}</p>
        <p className="mt-3">{email}</p>
      </div>
    </div>
  );
}

export default CallToUsCompo;
