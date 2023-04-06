import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';
export interface IDetails {
  position: string;
  company: string;
  time: string;
  work: string;
}

const Details: React.FC<IDetails> = ({ position, company, time, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="mx-auto w-3/4 flex-col first:mt-0 last:mb-0 md:w-2/3"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="text-base font-bold capitalize md:text-xl xl:text-2xl">
          Graduated at {company}
        </h3>
        <span className="text-sm font-medium capitalize text-dark/75 dark:text-light/75 md:text-base">
          {time}
        </span>
        <p className="w-full text-sm font-medium md:text-base">{work}</p>
      </motion.div>
    </li>
  );
};

type ExperiencesProps = {};

const Education: React.FC<ExperiencesProps> = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className="my-12 md:my-20 xl:my-32">
      <h2 className="mb-10 w-full text-center text-4xl font-bold md:mb-20 md:text-6xl xl:mb-32 xl:text-8xl">
        Education
      </h2>

      <div className="relative mx-auto w-full md:w-[75%]" ref={ref}>
        <motion.div
          className="absolute left-[22px] top-0 h-full w-1 origin-top bg-dark dark:bg-light md:left-[30px] xl:left-9"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="between ml-6 w-full flex-col gap-8 md:ml-4">
          <Details
            position="Bachelor"
            company="Ho Chi Minh University of Science"
            time=" Sep 2012 - Nov 2016"
            work="Bachelor of Environment"
          />

          <Details
            position="Bachelor"
            company="HUE University of Law"
            time="Jun 2018 - Mar 2022"
            work="Bachelor of Law"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
