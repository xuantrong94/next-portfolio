import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'
export interface IDetails {
  position: string
  company: string
  companyLink: string
  time: string
  work: string
}
export interface ICompany {
  company: string
  companyLink: string
}
const Details: React.FC<IDetails> = ({ position, company, companyLink, time, work }) => {
  const ref = useRef(null)
  const Company: React.FC<ICompany> = ({ company, companyLink }) => {
    return (
      <a
        href={companyLink}
        target="_blank"
        className="capitalize text-primary dark:text-primaryDark"
      >
        @{company}
      </a>
    )
  }
  return (
    <li ref={ref} className="mx-auto w-3/4 flex-col first:mt-0 last:mb-0 md:w-2/3">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="text-base font-bold capitalize md:text-xl xl:text-2xl">
          {position}&nbsp;
          <Company company={company} companyLink={companyLink} />
        </h3>
        <span className="text-sm font-medium capitalize text-dark/75 dark:text-light/75 md:text-base">
          {time}
        </span>
        <p className="w-full text-sm font-medium md:text-base">{work}</p>
      </motion.div>
    </li>
  )
}

type ExperiencesProps = {}

const Experiences: React.FC<ExperiencesProps> = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className="my-12 md:my-20 xl:my-32">
      <h2 className="mb-10 w-full text-center text-4xl font-bold md:mb-20 md:text-6xl xl:mb-32 xl:text-8xl">
        Experience
      </h2>

      <div className="relative mx-auto w-full md:w-[75%]" ref={ref}>
        <motion.div
          className="absolute left-[22px] top-0 h-full w-1 origin-top bg-dark dark:bg-light md:left-[30px] xl:left-9"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="between ml-6 w-full flex-col gap-8 md:ml-4">
          <Details
            position="Frontend Engineer"
            company="Grex Solutions"
            time="2022 Sep - 2022 Nov"
            work="Creating and maintaining user interfaces, ensures technical feasibility of designs, and collaborates with cross-functional teams for timely project delivery. Strong problem-solving and communication skills are essential."
            companyLink="https://grex-solutions.com"
          />

          <Details
            position="Frontend Engineer"
            company="Codelight"
            time="2022 Nov - 2023 Apr"
            work="Maintaining and updating the website while also creating new, engaging content. Additionally, upgrading the website's technology to keep it modern and competitive."
            companyLink="https://codelight.co/"
          />
        </ul>
      </div>
    </div>
  )
}

export default Experiences
