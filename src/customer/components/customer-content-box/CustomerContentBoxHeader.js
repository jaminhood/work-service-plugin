import CustomerContentBoxBtn from "./CustomerContentBoxBtn"

const CustomerContentBoxHeader = ({ title, btnPath }) => {
 const showBtn = btnPath !== undefined

 return (
  <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-300">
   <h4 className="p-0 m-0 text-base capitalize md:text-2xl text-main-primary font-sansation-bold">{title}</h4>
   {showBtn && <CustomerContentBoxBtn btnPath={btnPath} />}
  </div>
 )
}

export default CustomerContentBoxHeader
