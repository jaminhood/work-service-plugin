import img from "../../../../assets/profiles/profile-1.png"

const ProfileImg = () => {
 return (
  <div className="flex items-center justify-center h-20 overflow-hidden rounded-full">
   <img src={img} alt="" className="object-cover w-full h-full" />
  </div>
 )
}

export default ProfileImg
