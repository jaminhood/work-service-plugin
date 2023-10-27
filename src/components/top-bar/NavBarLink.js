import { SITE_URL } from "../../constants"

const NavBarLink = ({ data }) => {
 const url = window.location.href

 return (
  <li>
   <a
    href={`${SITE_URL}ws-customer/${data.path}`}
    className={`inline-flex py-2 items-center gap-2 text-base font-sansation-bold no-underline transition-all duration-300 ease-in-out hover:no-underline focus:no-underline focus:outline-0 focus:text-inherit border-b-2 border-gray-50 text-gray-50 ${
     url.includes(data.path) ? "opacity-100" : "opacity-50 hover:opacity-100"
    }`}>
    <span>{data.render}</span>
   </a>
  </li>
 )
}

export default NavBarLink
