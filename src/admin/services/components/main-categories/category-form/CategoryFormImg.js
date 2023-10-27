const CategoryFormImg = ({ imgURL }) => {
 return (
  <div className="flex items-center justify-center col-span-1">
   <img src={imgURL} width="150" height="150" className="object-cover" />
  </div>
 )
}

export default CategoryFormImg
