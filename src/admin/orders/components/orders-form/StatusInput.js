import { getStatus } from "../../../../utils"

const StatusInput = ({ int, prevStatus, handleClick }) => {
 const stat = getStatus(int)
 return (
  <span className="flex flex-col items-center justify-center">
   {parseInt(prevStatus) === parseInt(int) ? (
    <input type="radio" id={stat} name="status" value={int} onChange={handleClick} checked />
   ) : (
    <input type="radio" id={stat} name="status" value={int} onClick={handleClick} />
   )}
   <label htmlFor={stat} className="text-[.6rem] cursor-pointer">
    {stat}
   </label>
  </span>
 )
}

export default StatusInput
