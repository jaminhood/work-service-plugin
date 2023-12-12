import { motion } from "framer-motion"

const AccordionBody = ({ data }) => {
	const animate = {
		opacity: 1,
		top: 0,
		transition: { duration: 1 },
	}

	const initial = { opacity: 0, top: `-100%` }

	return (
		<motion.div
			className="flex items-center justify-between"
			initial={initial}
			animate={animate}>
			<p className="mt-3 text-sm text-zinc-900 font-jost-regular">{data}</p>
		</motion.div>
	)
}

export { AccordionBody }
