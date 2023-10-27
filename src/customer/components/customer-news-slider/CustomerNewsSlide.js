const CustomerNewsSlide = ({ data }) => {
 return (
  <div className="w-full rounded-md">
   <img src={data.img} alt="" className="object-cover w-full" />
  </div>
 )
}

export default CustomerNewsSlide
