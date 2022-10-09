import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

function AnimateInView({ children, delay = 0 }) {
  const softCardVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: delay / 8 },
    },
    hidden: { opacity: 0, scale: 0 },
  };

  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  return (
    <motion.div
      animate={controls}
      initial="hidden"
      variants={softCardVariants}
      ref={ref}
    >
      {children}
    </motion.div>
  );
}

export default AnimateInView;
