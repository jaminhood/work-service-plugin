import AdminProvider from "../context/AdminProvider"
import { ContactContent } from "./components/ContactContent"

const Contact = () => {
	return (
		<AdminProvider>
			<h1 className="mb-[1rem!important] text-2xl font-bold">Contact</h1>
			<ContactContent />
		</AdminProvider>
	)
}

export { Contact }

