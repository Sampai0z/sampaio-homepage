import { motion } from "framer-motion";
import WorkCard from "../modules/WorkCard";
import classes from "./layout/Works.module.css";

export default function Works() {
	const projects = [
		{
			src: "data:image/jpeg;base64,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",
			title: "Netflix Clone",
			description:
				"Netflix Clone project is a web-based application that offers a collection of movies, TV shows, and documentaries in a user-friendly interface, inspired by Netflix's design.  *Didn't deploy yet* ",
			linkSite: "https://mynetflixtest.netlify.app",
			linkGit: "https://github.com/Sampai0z/netflix-clone",
		},
		{
			src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIREhUTERISFRUXGBYYGBgXGBcYGxgYFxYXHRgXFRYbHighGB0lGxkXITEhJikrLi4uFyA2ODMtNygtLisBCgoKDg0OGxAQGzAmICUtLy0tLS0tLy0vKy0tLS0tLS0tLS01LS8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJ8BPgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYCBwj/xABOEAACAAQDBgMEBgQKBgsAAAABAgADERIEIVEFBiIxQWETcZEygaGxBxQjQlJiM3LB0RU1NnN0gpKys+EIFlOF0vAXJDRDVGOEk5S0wv/EABsBAQACAwEBAAAAAAAAAAAAAAABAgMEBQYH/8QAPREAAQMCAwUFBQcDAwUAAAAAAQACEQMhBDFhBRJBUZETcYGh8BQVIrHRBiMyQlLB4ZKi8VNi0hYkQ2Ny/9oADAMBAAIRAxEAPwDD8OsHDrCXrpBeukcOCvqttPNLw6wcOsJeukF66QgpbTzS8OsHDrCXrpBeukIKW080vDrBw6wl66QXrpCCltPNLw6wcOsJeukF66QgpbTzS8OsHDrCXrpBeukIKW080vDrBw6wl66QXrpCCltPNLw6wcOsJeukF66QgpbTzS8OsHDrCXrpBeukIKW080vDrBw6wl66QXrpCCltPNLw6wcOsJeukF66QgpbTzS8OsHDrCXrpBeukIKW080vDrBw6wl66QXrpCCltPNLw6wcOsJeukF66QgpbTzS8OsHDrCXrpBeukIKW080vDrBw6wl66QXrpCCltPNLw6wcOsJeukF66QgpbTzS8OsHDrCXrpBeukIKW080vDrBw6wl66QXrpCCltPNLw6wcOsJeukF66QgpbTzS3nSC86QvHBxxCtfXokvOkF50heODjgl9eiS86QXnSF44OKCX16JLzpBedIXig44JfXokvOkF50heKDigl9eiS86QXnSF4oOKCX16JLzpBedIXig4oJfXokvOkF50heKDjgl9eiS86QXnSF44OOCX16JLzpBedIXjg4oJfXokvOkF50heODigl9eiS86QXnSF44OOCX16JLzpBedIXjg44JfXokvOkF50heODjgl9eiS86QXnSLjAbOR0DPMYHlQKCPWsdYvZ0pEZhN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",
			title: "Mario Game",
			description:
				"A traditional endless running game where the goal is to avoid obstacles along the way while earning points for the time survived. The space bar or up arrow key makes Mario jump to avoid the pipes.  *Only works on Browser :(*",
			linkSite: "https://mariogameteste.netlify.app",
			linkGit: "https://github.com/Sampai0z/mario_game",
		},
		{
			src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevTkT_qgjFi1NbyJTvURy5D9YwYmv_rZSiA&usqp=CAU",
			title: "Expense track",
			description:
				"Web app expense tool that helps users monitor and manage their spending. It allows users to record expenses, and see in a chart which month they expend more money, you can stay on top of your finances and make better financial decisions.",
			linkSite: "https://track-allmyexpenses.netlify.app",
			linkGit: "https://github.com/Sampai0z/expense-track_reactJs",
		},
		{
			src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMtdNcdpBCFvdhskb_HoR9dTExZ61GeVzFhQ&usqp=CAU",
			title: "To Do app",
			description:
				"A very simple To Do app where you can manage your time much better and faster!",
			linkSite: "https://todo-simpleapp.netlify.app/",
			linkGit: "https://github.com/Sampai0z/simple-ToDoApp",
		},
		// ,{
		// 	src: "",
		// 	title: "",
		// 	description: "",
		// 	linkSite: "",
		// 	linkGit: "",
		// }
	];

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

				<span className={classes.work_card}>
					<div className="container">
						<div className="row g-0">
							{projects.map((project, index) => (
								<WorkCard
									key={index}
									src={project.src}
									heading={project.title}
									description={project.description}
									linkGit={project.linkGit}
									linkSite={project.linkSite}
								/>
							))}
						</div>
					</div>
				</span>
			</div>
		</motion.div>
	);
}
