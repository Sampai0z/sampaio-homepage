import React from "react";
import { motion } from "framer-motion";
import classe from "./skill.module.css";

export default function Skill() {
	return (
		<div className={classe.skills}>
			<motion.img
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png"
				alt=""
				className={classe.img}
			/>
			<div className={classe.skill_}>
				<div className={classe.align_}>
					<p className={classe.porcentage}>100%</p>
				</div>
			</div>
		</div>
	);
}
