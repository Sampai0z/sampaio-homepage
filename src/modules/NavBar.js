import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

export default function NavBar() {
	const [isActive, setIsActive] = useState(false);

	const toggleNavBar = () => {
		setIsActive(!isActive);
	};

	return (
		<div>
			<div className="nav_bar_">
				<div className="container">
					<div className="row g-0">
						<div className="col-md-6">
							<spam>
								<Link to="/" className="nav-bar__image">
									Home
								</Link>
							</spam>
						</div>
						<div className="col-md-6">
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
											Portifolio
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
			</div>

			{/* responsive nav-bar */}

			<div className="div_nav_responsive">
				<div
					className={isActive ? "icon iconActive" : "icon"}
					onClick={toggleNavBar}
				>
					<div className="hamburguer hmburguerIcon"></div>
				</div>
				<div className={isActive ? "menu menuOpen" : "menu menuClose"}>
					<div className="nav-bar_responsive">
						<Link to="/" className="link-responsive">
							Home
						</Link>
						<Link to="/about" className="link-responsive">
							About
						</Link>
						<Link to="/works" className="link-responsive">
							Portfolio
						</Link>
						<Link to="/contact-me" className="link-responsive">
							Contact
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
