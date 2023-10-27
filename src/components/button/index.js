const Button = ({ content, outline, handleClick }) => {
 return (
  <button
   onClick={handleClick}
   className={`w-full px-4 py-1 font-sansation-bold text-sm md:text-base capitalize transition-all duration-500 ease-in-out border hover:bg-transparent ${
    outline ? `bg-light-primary text-zinc-950 border-light-primary hover:text-light-primary` : `bg-main-primary text-zinc-50 border-main-primary hover:text-zinc-950`
   }`}>
   {content}
  </button>
 )
}

export default Button
