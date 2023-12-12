import AdminProvider from "../context/AdminProvider"
import { FAQsContent } from "./components/FAQsContent"

const FAQs = () => {
	return (
		<AdminProvider>
			<h1 className="mb-[1rem!important] text-2xl font-bold">FAQs</h1>
			<FAQsContent />
		</AdminProvider>
	)
}

export { FAQs }
