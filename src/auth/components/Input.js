const Input = (props) => {
 const { type, label, id, placeholder, value, handleInput } = props
 return (
  <div className="">
   <label htmlFor={id} className="block mb-2 text-sm cursor-pointer font-sansation-regular">
    {label}:
   </label>
   <input
    type={type}
    id={id}
    placeholder={placeholder}
    name={id}
    value={value}
    onInput={handleInput}
    className="block w-full px-4 py-2 text-sm border border-gray-300 focus:outline-[0] font-jost-regular placeholder:font-jost-regular"
   />
  </div>
 )
}

export default Input
