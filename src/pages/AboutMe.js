import { motion } from "framer-motion";

export default function AboutMe(){
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition:{duration: 0.1}}}
    >
      <div>
        <img src="" alt="my-profile"/>
      </div>
      <div>
        <h2>Vitor Sampaio</h2>
        <p>Creative</p>
      </div>
      <div>
        <p>lorem Impsum tralalalalalal</p>
        <button>Learn More</button>
      </div>
    </motion.div>
  );
};