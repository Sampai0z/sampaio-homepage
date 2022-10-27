import { Link } from "react-router-dom";
import classes from "./layout/Home.module.css";
import { motion } from 'framer-motion';

export default function Home(){
  return (
  <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition:{duration: 0.1}}}
  >
    <div className="container">
      <div className="row">
        <div className={classes.page}>
            <div>
              <h1 className={classes.name}>Vitor <spam className={classes.last_name}>Sampaio</spam></h1>      
              <p className={classes.mark}>Hello, I'm an Frontend developer based in Portugal!</p>
              <h3 className={classes.sub_title}>Creative</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.button__}>
        <Link to='/contact-me' className={classes.button_contact}>Get in Touch</Link>
      </div>
  </motion.div>
  );
};