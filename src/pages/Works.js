import { motion } from 'framer-motion';
// import Carousel from 'react-bootstrap/Carousel';

export default function Works(){
  
  return (
    <motion.div
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition:{duration: 0.3}, blur: 1}}
      >
       
    </motion.div>
  );
};