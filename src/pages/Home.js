import { Link } from "react-router-dom";
import classes from "./layout/Home.module.css";
import { motion } from 'framer-motion';

export default function Home(){
  return (
  <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition:{duration: 0.3}}}
  >
    <div className="container">
      <div className="row g-0">
        <div className={classes.page}>
            <div>
              <h1 className={classes.name}>Vitor <spam className={classes.last_name}>Sampaio</spam></h1>      
              <p className={classes.mark}>Hello, I'm an Frontend developer based in Portugal!</p>
            </div>
              <div className={classes.wrapper}>
                <div className={classes.typingDemo}>
                 I'm a Creative <spam className={classes.change}></spam>!
                </div>
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