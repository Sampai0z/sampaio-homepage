import { motion } from "framer-motion";
import classes from "./layout/Contact.module.css";
import {FaLinkedin,FaGithub,FaPhone,FaSearchLocation} from 'react-icons/fa'

export default function Contact(){
  return (
    <motion.div
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition:{duration: 0.3}, blur: 1}}
    >
      <div className={classes.page}>
        <div className="container">
          <div className="row">
            <div className={classes.text}>
              <h2>Get in  <spam className={classes.text2}>Touch</spam></h2>
            </div>
          </div> 

          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <span className={classes.contacts}>
                  <FaSearchLocation  className={classes.svg}/>
                Leiria - Portugal</span>

                <span className={classes.contacts}>
                  <FaPhone  className={classes.svg}/>
                  +351 925 470 553</span>

                <span className={classes.contact}>
                  <FaLinkedin  className={classes.svg}/>
                  <a href="https://www.linkedin.com/in/vitorpt/" target="_blank" rel="noreferrer" className={classes.link}>
                   Linkedin
                  </a>
                   </span>

                <span className={classes.contact}>
                  <FaGithub  className={classes.svg}/>
                  <a href="https://github.com/Sampai0z" target="_blank" rel="noreferrer" className={classes.link}>
                    @GitHub
                  </a>
                </span>
              </div>

              <div className="col-md-7">
                <form className={classes.form}>
                  <div className={classes.control}>
                    <input type="text" placeholder="Name"  className={classes.input}/>
                  </div>
                  <div className={classes.control}>
                    <input type="text" placeholder="Email" className={classes.input}/>
                  </div>
                </form>

                <form className={classes.formControl}>
                  <div className={classes.second}>
                    <textarea type="text" placeholder="Message" className={classes.textarea}></textarea>
                  </div>
                  <div className={classes.second}>
                    <button className={classes.submit} type="submit">Submit Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};