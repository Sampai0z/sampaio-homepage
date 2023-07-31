import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
import { Backdrop } from "@mui/material";

import { motion } from "framer-motion";

export default function NavBar() {
	const [isActive, setIsActive] = useState(false);

	const toggleNavBar = () => {
		setIsActive(!isActive);
	};

	const [open, setOpen] = useState(false);

	const toggleAll = () => {
		toggleNavBar();
		handleToggle();
	};

	const handleClose = () => {
		setOpen(false);
		toggleNavBar();
	};

	const handleToggle = () => {
		setOpen(!open);
	};

	return (
		<div>
			<motion.div
				className="nav_bar_"
				initial={{ x: 500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				<div className="container">
					<div className="row g-0">
						<div className="col-md-7">
							<Link to="/" className="nav-bar__image"></Link>
						</div>
						<div className="col-md-5">
							<nav>
								<ul className="nav-bar__list">
									<li>
										<Link to="/" className="nav-bar__link">
											Home
										</Link>
									</li>
									<li>
										<Link to="/about" className="nav-bar__link">
											About
										</Link>
									</li>
									<li>
										<Link to="/works" className="nav-bar__link">
											Portfolio
										</Link>
									</li>
									<li>
										<Link to="/contact-me" className="nav-bar__link">
											Contact
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</motion.div>

			{/* responsive nav-bar */}

			<div className="div_nav_responsive">
				<div
					className={isActive ? "icon iconActive" : "icon"}
					onClick={toggleAll}
				>
					<div className="hamburguer hamburguerIcon"></div>
				</div>

				<div className={isActive ? "menu menuOpen" : "menu menuClose"}>
					<div className="nav-bar_responsive">
						<Link to="/" className="link-responsive" onClick={toggleAll}>
							Home
						</Link>
						<Link to="/about" className="link-responsive" onClick={toggleAll}>
							About
						</Link>
						<Link to="/works" className="link-responsive" onClick={toggleAll}>
							Portfolio
						</Link>
						<Link
							to="/contact-me"
							className="link-responsive"
							onClick={toggleAll}
						>
							Contact
						</Link>
						<Backdrop
							sx={{
								color: "#fff",
								zIndex: (theme) => theme.zIndex.drawer - 1251,
							}}
							open={open}
							onClick={handleClose}
						></Backdrop>
					</div>
				</div>
			</div>
		</div>
	);
}
