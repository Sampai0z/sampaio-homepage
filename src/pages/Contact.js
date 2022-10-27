import { motion } from "framer-motion";

export default function Contact(){
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth , transition:{duration: 0.1}}}
    >
      <div>
        <h2>Get in Touch</h2>
      </div>

      <div>
        <span>email</span>
        <span>phone number</span>
        <span>Linkedin</span>
        <span>GitHub</span>
      </div>
    </motion.div>
  );
};