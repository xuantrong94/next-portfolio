import { motion, useScroll } from 'framer-motion'
import React from 'react'

type LiIconProps = {
  reference: any
}

const LiIcon: React.FC<LiIconProps> = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
  })
  return (
    <figure className="absolute left-0 -translate-y-[2px] stroke-dark dark:stroke-light">
      <svg
        width={'75'}
        height={'75'}
        viewBox="0 0 100 100"
        className="h-12 w-12 -rotate-90 md:h-16 md:w-16 xl:h-20 xl:w-20"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="fill-none stroke-primary stroke-1 dark:stroke-primaryDark"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="fill-light stroke-[5px] dark:fill-dark"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="w-16 animate-pulse fill-primary stroke-1 dark:fill-primaryDark"
        />
      </svg>
    </figure>
  )
}

export default LiIcon
