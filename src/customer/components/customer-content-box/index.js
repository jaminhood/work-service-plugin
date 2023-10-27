import CustomerContentBoxHeader from "./CustomerContentBoxHeader"

const CustomerContentBox = ({ title, btnPath, children }) => {
 const showTitle = title !== undefined
 return (
  <div className="p-4 mb-4 rounded-md shadow-md bg-zinc-50">
   {showTitle && <CustomerContentBoxHeader title={title} btnPath={btnPath} />}
   {children}
  </div>
 )
}

export default CustomerContentBox
