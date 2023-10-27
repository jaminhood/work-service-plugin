import img from "../../../../assets/logo-light.png"

const LeftLogo = () => {
 const user = JSON.parse(localStorage.getItem(`ws-user`))

 // console.log(user)

 return (
  <div className="p-4">
   <img src={img} alt="" className="object-cover w-[3rem]" />
  </div>
 )
}

export default LeftLogo
