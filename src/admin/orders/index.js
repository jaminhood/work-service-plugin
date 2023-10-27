import AdminProvider from "../context/AdminProvider"
import OrdersContent from "./components/OrdersContent"

const OrdersPage = () => {
 return (
  <AdminProvider>
   <h1 className="mb-[1rem!important] text-2xl font-bold">Bookings</h1>
   <OrdersContent />
  </AdminProvider>
 )
}

export default OrdersPage
