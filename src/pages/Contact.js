import { motion } from "framer-motion";
import classes from "./layout/Contact.module.css";
import {
	FaLinkedin,
	FaGithub,
	FaPhone,
	FaSearchLocation,
} from "react-icons/fa";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Alert } from "@mui/material";

export default function Contact() {
	const [name, setName] = useState();
	const [text, setText] = useState();
	const [email, setEmail] = useState();
	const [sent, setSent] = useState(false);
	const [error, setError] = useState(false);

	const form = useRef();

	const AlertSuccess = () => {
		return (
			<Alert variant="filled" severity="success" color="info">
				Your message has been sent !
			</Alert>
		);
	};
	const AlertError = () => {
		return (
			<Alert variant="filled" severity="error" color="error">
				Sorry but I couldn't send your message, try again later :C
			</Alert>
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				// "service_p6wtjpu",
				"service_p6wtjpu",
				"template_zw31fi9",
				form.current,
				"FtE4qZUF-2PluB5FX"
			)
			.then(
				(result) => {
					setSent(true);
					resetForm();
				},
				(error) => {
					setError(true);
					console.log(error.text);
				}
			);
	};

	const resetForm = () => {
		setName("");
		setEmail("");
		setText("");
	};

	return (
		<motion.div
			initial={{ width: 0 }}
			animate={{ width: "100%" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.3 }, blur: 1 }}
		>
			<div className={classes.page}>
				<div className="container">
					<div className="row">
						<div className={classes.text}>
							<h2>
								Get in <span className={classes.text2}>Touch</span>
							</h2>
						</div>
					</div>

					<div className="container">
						<div className="row">
							<div className="col-md-5">
								<span className={classes.contacts}>
									<FaSearchLocation className={classes.svg} />
									Leiria - Portugal
								</span>

								<span className={classes.contacts}>
									<FaPhone className={classes.svg} />
									+351 925 470 553
								</span>

								<span className={classes.contact}>
									<FaLinkedin className={classes.svg} />
									<a
										href="https://www.linkedin.com/in/vitorpt/"
										target="_blank"
										rel="noreferrer"
										className={classes.link}
									>
										Linkedin
									</a>
								</span>

								<span className={classes.contact}>
									<FaGithub className={classes.svg} />
									<a
										href="https://github.com/Sampai0z"
										target="_blank"
										rel="noreferrer"
										className={classes.link}
									>
										@GitHub
									</a>
								</span>
							</div>

							<div className="col-md-7">
								<form
									encType="multipart/form-data"
									className={classes.form}
									ref={form}
									onSubmit={handleSubmit}
								>
									<div className={classes.control}>
										<input
											name="user_name"
											type="text"
											placeholder="Name"
											className={classes.input}
											value={name}
											onChange={(e) => setName(e.target.value)}
											required
										/>
										<input
											name="user_email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											required
											type="text"
											placeholder="Email"
											className={classes.input}
										/>
									</div>
									<div className={classes.second}>
										<textarea
											name="user_text"
											value={text}
											onChange={(e) => setText(e.target.value)}
											required
											type="text"
											placeholder="Message"
											className={classes.textarea}
										></textarea>
									</div>
									<div className={classes.second}>
										<button className={classes.submit}>Submit Message</button>
										<br></br>
										<p style={{ color: "black" }}>
											*Do not submit the form for testing
										</p>
									</div>
									<div>{sent ? <AlertSuccess /> : null}</div>
									<div>{error ? <AlertError /> : null}</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
