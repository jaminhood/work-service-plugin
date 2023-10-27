import useAuthContext from "../../context/useAuthContext"
import LoginMsg from "./LoginMsg"
import RegisterMsg from "./RegisterMsg"

const WelcomeSection = () => {
 const { mainScreen } = useAuthContext()

 return (
  <div className="col-span-1 bg-gray-50">
   <div className="w-fill md:h-screen rounded-br-[3rem] bg-main-primary flex justify-center items-center text-center flex-col py-20 px-8 md:px-20">
    {mainScreen === `login` ? <LoginMsg /> : <RegisterMsg />}
    <p className="hidden mt-8 text-sm text-gray-100 font-jost-regular md:block">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem modi ad magni in accusantium labore, dolores ut odit tempore aliquid quia quae enim numquam atque dolore beatae animi nihil
     eligendi.
    </p>
   </div>
  </div>
 )
}

export default WelcomeSection
