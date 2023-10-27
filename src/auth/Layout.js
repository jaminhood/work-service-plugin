import ActionSection from "./components/action-section"
import WelcomeSection from "./components/welcome-section"
import AuthProvider from "./context/AuthProvider"

const WSAuthLayout = () => {
 return (
  <AuthProvider>
   <WelcomeSection />
   <ActionSection />
  </AuthProvider>
 )
}

export default WSAuthLayout
