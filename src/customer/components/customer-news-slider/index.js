import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import { newsData } from "../../../data"
import CustomerContentBox from "../customer-content-box"
import CustomerNewsSlide from "./CustomerNewsSlide"

const settings = {
 dots: true,
 arrows: false,
 infinite: true,
 autoplay: true,
 autoplaySpeed: 3000,
 speed: 500,
 slidesToShow: 1,
 slidesToScroll: 1,
}

const CustomerNewsSlider = () => {
 return (
  <CustomerContentBox>
   <Slider {...settings}>
    {newsData.map((data) => (
     <CustomerNewsSlide key={data.id} data={data} />
    ))}
   </Slider>
  </CustomerContentBox>
 )
}

export default CustomerNewsSlider
