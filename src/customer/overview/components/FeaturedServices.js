import CustomerContentBox from "../../components/customer-content-box"
import CustomerServiceCard from "../../components/customer-service-card"
import useCustomerContext from "../../context/useCustomerContext"

const FeaturedServices = () => {
 const { services } = useCustomerContext()

 return (
  <CustomerContentBox title="Featured Services">
   <div className="grid grid-cols-2 gap-4 md:grid-cols-4">{services.map((service, i) => i < 4 && <CustomerServiceCard key={service.service_id} service={service} />)}</div>
  </CustomerContentBox>
 )
}

export default FeaturedServices
