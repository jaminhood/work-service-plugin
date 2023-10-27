import useAdminContext from "../../context/useAdminContext"
import OrdersForm from "./orders-form"
import OrdersTable from "./orders-table"

const OrdersContent = () => {
 const { editBooking } = useAdminContext()

 return (
  <div className="relative grid items-stretch w-full grid-cols-6 gap-4 text-zinc-900">
   {editBooking.booking_id !== undefined && <OrdersForm />}
   <OrdersTable />
  </div>
 )
}

export default OrdersContent
