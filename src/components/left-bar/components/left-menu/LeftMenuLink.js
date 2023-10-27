import { SITE_URL } from "../../../../constants"

const LeftMenuLink = ({ data }) => {
 return (
  <a href={`${SITE_URL}ws-customer/${data.path}`} className="block w-full no-underline hover:no-underline focus:no-underline">
   <div className="w-full px-4 py-3 transition-all duration-500 ease-in-out bg-light-primary opacity-80 hover:opacity-100 text-main-primary">
    <h4 className="pb-0 mb-0 text-base font-sansation-bold">{data.render}</h4>
   </div>
  </a>
 )
}

export default LeftMenuLink
