import Layout from "../Layout"
import CustomerNewsSlider from "../components/customer-news-slider"
import Categories from "./components/Categories"
import FeaturedServices from "./components/FeaturedServices"

const CustomerOverviewPage = () => {
 return (
  <Layout title="Overview" showTitle={false}>
   <CustomerNewsSlider />
   <FeaturedServices />
   <Categories />
  </Layout>
 )
}

export default CustomerOverviewPage
