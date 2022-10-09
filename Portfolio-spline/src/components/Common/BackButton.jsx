import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleHoverStart = () => {
    setIsOpen(true);
  };
  const handleHoverEnd = () => {
    setIsOpen(false);
  };

  return (
    <motion.button
      onClick={() => navigate("/")}
      layout
      transition={{ duration: 0.3 }}
      className="fixed top-4 left-4 p-3 rounded-full bg-white z-50 flex justify-center items-center text-xl pr-1"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <FaChevronLeft className="mr-3"></FaChevronLeft>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            transition={{ duration: 0.3 }}
            exit={{ fontSize: 0 }}
            className="pr-2 mt-1 "
          >
            Go back
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default BackButton;
