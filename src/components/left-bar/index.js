import LeftLogo from "./components/left-logo"
import LeftMenu from "./components/left-menu"
import Profile from "./components/profile"

const LeftBar = () => {
 return (
  <aside className="sticky top-0 left-0 h-screen w-[25rem]">
   <div className="flex flex-col items-center h-screen">
    <LeftLogo />
    <Profile />
    <LeftMenu />
   </div>
  </aside>
 )
}

export default LeftBar
