import RightBar from "../../../components/right-bar"
import useDeviceType from "../../../hooks/useDeviceType"

const CustomerMainContent = ({ showTitle, title, children }) => {
 const { isMobile } = useDeviceType()

 return (
  <div className="p-4 min-h-[calc(100vh-4rem)] text-main-primary bg-light-primary">
   <div className="relative grid grid-cols-3 gap-4">
    <div className="col-span-3 md:col-span-2">
     {showTitle && <h1 className="mb-[1rem!important] text-2xl font-sansation-bold text-main-primary">{title}</h1>}
     {children}
    </div>
    {!isMobile && <RightBar />}
   </div>
  </div>
 )
}

export default CustomerMainContent
