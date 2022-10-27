import { motion } from 'framer-motion';

export default function Works(){
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition:{duration: 0.1}}}
      >
      <h1>Creative Portifolio</h1>
    </motion.div>
  );
};