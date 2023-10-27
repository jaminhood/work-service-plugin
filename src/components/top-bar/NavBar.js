import { navLinks } from "../../data"
import NavBarLink from "./NavBarLink"

const NavBar = () => {
 return (
  <div>
   <ul className="flex gap-8">
    {navLinks.map((data) => (
     <NavBarLink key={data.render} data={data} />
    ))}
   </ul>
  </div>
 )
}

export default NavBar
