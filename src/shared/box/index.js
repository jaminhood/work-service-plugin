const Box = (props) => {
 const { cls, mainBoxHeading, children, buttonTxt, handleFormOpen } = props
 return (
  <div className={cls}>
   <div className="h-full p-4 bg-gray-50 rounded-xl">
    {mainBoxHeading && (
     <div className="flex items-center justify-between pb-2 border-b border-gray-300">
      <h4 className="text-xl font-bold">{mainBoxHeading}</h4>
      {buttonTxt && (
       <button
        type="button"
        onClick={handleFormOpen}
        className="px-[2rem!important] py-[.5rem!important] transition-all duration-300 ease-in-out bg-green-100 border rounded-md cursor-pointer text-main-primary border-main-primary hover:bg-main-primary hover:text-green-100 focus:outline-none">
        {buttonTxt}
       </button>
      )}
     </div>
    )}
    {children}
   </div>
  </div>
 )
}

export default Box
