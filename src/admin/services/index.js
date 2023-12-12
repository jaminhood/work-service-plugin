import MainCategories from "./components/main-categories"
import MainServices from "./components/main-services"
import MainSubCategories from "./components/main-sub-categories"
import ServiceProvider from "./context/ServiceProvider"

const ServicesPage = () => {
	return (
		<ServiceProvider>
			<MainCategories />
			<MainSubCategories />
			<MainServices />
		</ServiceProvider>
	)
}

export default ServicesPage
