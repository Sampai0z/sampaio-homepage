import { Link } from "react-router-dom";
import classes from "./styles/Home.module.css";
import { motion } from "framer-motion";
import Text from "../modules/TypeWriter.js";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="row g-0">
          <div className={classes.page}>
            <div>
              <h1 className={classes.name}>
                Vitor <span className={classes.last_name}>Sampaio</span>
              </h1>
              <p className={classes.mark}>
                Hello, I'm an Frontend developer based in Portugal!
              </p>
            </div>
            <div className={classes.wrapper}>
              <Text />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.button__}>
        <Link to="/works" className={classes.button_contact}>
          See what I’ve built
        </Link>
        <Link to="/contact" className={classes.button_contact}>
          Get in Touch
        </Link>
      </div>
    </motion.div>
  );
}
