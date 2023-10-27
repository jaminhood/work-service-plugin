const ManagementModalImg = ({ imgURL }) => {
 return (
  <div className="flex items-center justify-center mb-4">
   <img src={imgURL} width="200" height="200" className="object-cover rounded-sm" />
  </div>
 )
}

export default ManagementModalImg
