import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="centered mt-2">
      <MotionLink
        href={'/'}
        className="centered h-16 w-16 rounded-full border border-transparent bg-dark text-xl font-bold text-light dark:border-light"
        whileHover={{
          backgroundColor: [
            '#121212',
            'rgba(131,58,180,1)',
            'rgba(253,29,29,1)',
            'rgba(252,176,69,1)',
            'rgba(131,58,180,1)',
            '#121212',
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        JUGG
      </MotionLink>
    </div>
  );
};

export default Logo;
