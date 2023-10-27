import CustomerServiceCard from "../../components/customer-service-card"

const ServicesComp = ({ services }) => {
 return <div className="grid grid-cols-4 gap-4 mt-4">{services.length > 0 && services.map((service) => <CustomerServiceCard key={service.service_id} service={service} />)}</div>
}

export default ServicesComp
