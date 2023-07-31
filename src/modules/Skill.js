import React from "react";
import classe from "./skill.module.css";

export default function Skill() {
	return (
		<>
			<div className={classe.timeline}>
				<div className={classe.timelineItem}>
					<div className={classe.timelineContent}>
						<h2>Evento 1</h2>
						<p>Descrição do evento 1</p>
					</div>
				</div>
				<div className={classe.timelineItem}>
					<div className={classe.timelineContent}>
						<h2>Evento 2</h2>
						<p>Descrição do evento 2</p>
					</div>
				</div>
				{/* Adicione mais eventos conforme necessário */}
			</div>
		</>
	);
}
