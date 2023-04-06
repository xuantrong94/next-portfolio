import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

const TransitionEffect = (props: Props) => {
  return (
    <>
      <motion.div
        className="fixed right-full top-0 z-50 h-screen w-screen bg-primary"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0' }}
        exit={{ x: ['0%', '100'], width: ['0%', '100'] }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      <motion.div
        className="fixed right-full top-0 z-40 h-screen w-screen bg-light"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0' }}
        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
      />
      <motion.div
        className="fixed right-full top-0 z-30 h-screen w-screen bg-dark"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0' }}
        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
      />
    </>
  );
};

export default TransitionEffect;
