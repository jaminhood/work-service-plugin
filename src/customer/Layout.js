import CustomerProvider from "./context/CustomerProvider"

const Layout = ({ title, showTitle, children }) => {
 return (
  <CustomerProvider title={title} showTitle={showTitle}>
   {children}
  </CustomerProvider>
 )
}

export default Layout
