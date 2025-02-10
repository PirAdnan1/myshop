
function CircleTime({hours, title}) {
  return (
    <div className="w-20 h-20 flex flex-col items-center justify-center rounded-full bg-white">
      <p className="font-bold text-xl leading-3">{hours}</p>
      <p className="">{title}</p>
    </div>
  )
}

export default CircleTime
