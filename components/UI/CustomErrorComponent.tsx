
const CustomErrorComponent = ({title, message, isFixed=true}: {title?: string, message?: string, isFixed: boolean}) => {

  return <div className={`${isFixed? 'fixed h-screen' : 'absolute h-full'} w-full z-10 flex flex-col items-center justify-center p-4`}>
    <div className="w-full md:w-[500px] max-w-full rounded-lg">
      <h2 className="text-red-500 text-2xl p-2 font-bold">{title? title : "An Error Occurred"}</h2>
      <p className="p-4 text-center">{message? message : "An error occurred. Please try again later."}</p>
    </div>
  </div>

}

export default CustomErrorComponent;