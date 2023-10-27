import ProfileContent from "./ProfileContent"
import ProfileImg from "./ProfileImg"

const Profile = () => {
 return (
  <div className="flex flex-col items-center justify-center w-full py-4 text-center shadow-md">
   <ProfileImg />
   <ProfileContent />
  </div>
 )
}

export default Profile
