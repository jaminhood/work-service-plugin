const ChatServiceForm = () => {
 return (
  <div className="grid items-stretch grid-cols-4 mt-2">
   <div className="col-span-3 h-full">
    <input
     type="number"
     className="w-full h-full py-[.25rem!important] px-[1rem!important] font-semibold rounded-[0!important] border border-main-primary"
     placeholder="Type Amount.."
    />
   </div>
   <div className="col-span-1 h-full">
    <button
     type="text"
     className="w-full h-full py-2 px-4 font-semibold cursor-pointer text-main-primary transition-all duration-300 ease-in-out bg-green-100 border border-main-primary hover:bg-main-primary hover:text-green-100 focus:outline-none">
     Deal
    </button>
   </div>
  </div>
 )
}

export default ChatServiceForm
