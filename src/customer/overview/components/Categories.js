import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import CustomerCategoryCard from "../../components/customer-category-card"
import CustomerContentBox from "../../components/customer-content-box"
import useCustomerContext from "../../context/useCustomerContext"

const settings = {
 dots: true,
 arrows: false,
 infinite: true,
 autoplay: true,
 autoplaySpeed: 3000,
 speed: 500,
 slidesToShow: 8,
 slidesToScroll: 1,
}

const Categories = () => {
 const { categories } = useCustomerContext()

 return (
  <CustomerContentBox title="Categories">
   {categories.length > 4 ? (
    <div className="customer__categories">
     <Slider {...settings}>
      {categories.map((category) => (
       <CustomerCategoryCard key={category.category_id} category={category} />
      ))}
     </Slider>
    </div>
   ) : (
    <div className="grid grid-cols-8 gap-4">
     {categories.map((category) => (
      <CustomerCategoryCard key={category.category_id} category={category} />
     ))}
    </div>
   )}
  </CustomerContentBox>
 )
}

export default Categories
