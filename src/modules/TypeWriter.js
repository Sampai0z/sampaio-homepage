import React from "react";
import { Cursor, cursor, useTypewriter } from "react-simple-typewriter";

export default function TypeWriter() {
	const [text, count] = useTypewriter({
		words: ["Frontend Developer", "Desenvolvedor Frontend"],
		loop: true,
		delaySpeed: 2000,
		typeSpeed: 250,
	});
	return (
		<div>
			<h1>
				<span>{text}</span>
				<Cursor cursorColor="" />
			</h1>
		</div>
	);
}
