const SubCategoryFormImg = ({ imgURL }) => {
 return (
  <div className="flex items-center justify-center col-span-1">
   <img src={imgURL} width="100" height="100" className="object-cover" />
  </div>
 )
}

export default SubCategoryFormImg
