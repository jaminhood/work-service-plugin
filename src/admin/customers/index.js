import CustomersTable from "./components/customers-table"

const CustomersPage = () => {
 return (
  <div>
   <div className="grid grid-cols-2 gap-4">
    <div className="col-span-1">
     <h1 className="mb-[1rem!important] text-2xl font-bold">Customers</h1>
     <div className="relative grid items-stretch w-full grid-cols-6 gap-4 text-zinc-900">
      <CustomersTable />
     </div>
    </div>
    <div className="col-span-1">
     <h1 className="mb-[1rem!important] text-2xl font-bold">Experts</h1>
     <div className="relative grid items-stretch w-full grid-cols-6 gap-4 text-zinc-900">
      <CustomersTable />
     </div>
    </div>
   </div>
  </div>
 )
}

export default CustomersPage
