import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import classes from "./KnoledgeCard.module.css";

export default function KnoledgeCard(props) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button onClick={handleOpen} className={classes.button}>
				Learn More
			</Button>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<Box className={classes.box}>
						<button onClick={handleClose} className={classes.closeModal}>
							x
						</button>
						<div className="container">
							<div className="row">
								<div className="col-md-4">
									<div className={classes.profile}>image</div>
								</div>
								<div className="col-md-8">
									<h3 className={classes.skill}>Programming skills</h3>
									<div className={classes.language}>Javascript</div>
									<div className={classes.language}>React</div>
									<div className={classes.language}>HTML</div>
									<div className={classes.language}>CSS</div>
									<div className={classes.language}>Vue</div>
								</div>
							</div>
						</div>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}
