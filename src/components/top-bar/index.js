import NavBar from "./NavBar"
import TopBarRHS from "./TopBarRHS"

const TopBar = () => {
 return (
  <div className="sticky top-0 left-0 z-10 flex items-center justify-between w-full h-16 px-4 bg-main-primary">
   <NavBar />
   <TopBarRHS />
  </div>
 )
}

export default TopBar
