const NavBtn = ({ content, outline, handleClick }) => {
 return (
  <button
   onClick={handleClick}
   className={`w-full px-4 py-3 font-sansation-bold text-base capitalize transition-all duration-500 ease-in-out border hover:bg-transparent ${
    outline ? `bg-light-primary text-main-primary border-light-primary hover:text-light-primary` : `bg-main-primary text-zinc-50 border-zinc-50 hover:text-main-primary hover:bg-zinc-50`
   }`}>
   {content}
  </button>
 )
}

export default NavBtn
