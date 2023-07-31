import { motion } from "framer-motion";
import WorkCard from "../modules/WorkCard";
import classes from "./layout/Works.module.css";

export default function Works() {
	return (
		<motion.div
			initial={{ width: 0 }}
			animate={{ width: "100%" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.3 }, blur: 1 }}
		>
			<div className={classes.header}>
				<h3 className={classes.title}>
					Here are some of the projects I've been working on!
				</h3>
				<div className={classes.work_card}>
					<WorkCard />
					<WorkCard />
					<WorkCard />
					<WorkCard />
					<WorkCard />
					<WorkCard />
				</div>
			</div>
		</motion.div>
	);
}
