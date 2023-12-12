import AdminProvider from "../context/AdminProvider"
import AboutUs from "./components/about-us"
import Downloads from "./components/downloads"
import Management from "./components/management"
import News from "./components/news"
import TrustedBy from "./components/trusted-by"
import WhyChooseUs from "./components/why-choose-us"

const OverviewPage = () => {
	return (
		<AdminProvider>
			<h1 className="mb-[1rem!important] text-2xl font-bold">Work Service Admin Template</h1>
			<div className="relative grid items-stretch w-full grid-cols-2 gap-4 text-zinc-900">
				<div className="grid gap-4">
					<TrustedBy />
					<News />
					<AboutUs />
				</div>
				<div className="grid gap-4">
					<WhyChooseUs />
					<Downloads />
					<Management />
				</div>
			</div>
		</AdminProvider>
	)
}

export default OverviewPage
