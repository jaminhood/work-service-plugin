import ProfileCTA from "./ProfileCTA"

const ProfileContent = () => {
 const user = JSON.parse(localStorage.getItem(`ws-user`))

 // console.log(user)

 return (
  <div className="p-4">
   <h2 className="text-xl font-sansation-bold text-main-secondary">Hi {user.user_login},</h2>
   <h6 className="text-base lowercase text-zinc-200 font-jost-regular">How can we help you today</h6>
   <ProfileCTA />
  </div>
 )
}

export default ProfileContent
