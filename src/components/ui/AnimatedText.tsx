import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

type AnimatedTextProps = {
  text?: string;
  className: string;
};
const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 1,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};
const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  return (
    <div className="centered mx-auto w-full overflow-hidden py-2 text-center sm:py-0">
      <motion.h1
        className={`inline-block w-full text-8xl font-bold capitalize text-dark ${className} dark:text-light`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text?.split(' ').map((word, index) => (
          <motion.span
            key={`word-${index}`}
            className="inline-block"
            variants={singleWord}
            // initial="initial"
            // animate="animate"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
