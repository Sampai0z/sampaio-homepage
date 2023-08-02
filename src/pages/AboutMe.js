import { motion } from "framer-motion";
import Skill from "../modules/Skill";

import classe from "./layout/AboutMe.module.css";
import ProfileImage from "../assets/vitor.jpeg";

export default function AboutMe() {
	return (
		<motion.div
			className={classe.aboutMe}
			initial={{ width: 0 }}
			animate={{ width: "100%" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
		>
			<div className="container">
				<div className="row g-0">
					<div className="col-md-8">
						<div>
							{/* <span className={classe.image_profile_back}></span> */}
							<img
								src={ProfileImage}
								alt="my-profile"
								className={classe.image_profile}
							/>
						</div>
					</div>

					<div className="col-md-4">
						<div className={classe.content}>
							<div>
								<h2 className={classe.name}>
									Vitor <span className={classe.last_name}>Sampaio</span>
								</h2>
							</div>
							<div>
								<p className={classe.paragrafo}>
									I started as a programmer in Feb 2022, even though I didn’t
									have professional experience I did work on solo projects and
									also did some co-op work (not paid) to have more experience in
									the area, my projects have been focused on Frontend and I
									always try to refine my skills for a better interface and
									experience. Even if I don't know a program I can adapt quickly
									and I can work things out, I like to work with different
									technologies.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
