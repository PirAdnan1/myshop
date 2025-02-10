function AboveFooterComp({ Icon, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center mt-14">
      <div className="bg-gray-300 w-20 h-20 rounded-full flex justify-center items-center">
        <div className="bg-black w-14 h-14 rounded-full flex justify-center items-center">
          <Icon />
        </div>
      </div>
      <h1 className="text-xl mt-5 font-bold">{title}</h1>
      <h2>{description}</h2>
    </div>
  );
}

export default AboveFooterComp;
