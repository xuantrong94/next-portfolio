import { motion } from 'framer-motion'
import React from 'react'

type SkillsProps = {}

export interface ISkill {
  name: string
  x: string
  y: string
}

export const Skill: React.FC<ISkill> = ({ name, x, y }) => {
  return (
    <motion.div
      className="centered absolute rounded-full bg-dark px-2 py-1 text-xs font-semibold text-light shadow-dark dark:bg-light dark:text-dark dark:shadow-light md:px-2 md:py-1 md:text-sm lg:text-base xl:px-6 xl:py-3"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

const Skills: React.FC<SkillsProps> = () => {
  return (
    <>
      <h2 className="mb-10 w-full text-center text-4xl font-bold md:mb-20 md:text-6xl xl:mb-32 xl:text-8xl">
        Skills
      </h2>
      <div className="centered relative h-[40vh] w-full cursor-pointer rounded-full bg-circularLight dark:bg-circularDark md:h-[60vh] md:bg-circularLightMd md:dark:bg-circularDarkMd lg:h-[80vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg xl:h-screen xl:bg-circularLightXl xl:dark:bg-circularDarkXl">
        <motion.div
          className="centered rounded-full bg-dark p-2 font-semibold text-light shadow-dark dark:bg-light dark:text-dark md:p-4 xl:p-6"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-14vw" y="-10vw" />
        <Skill name="CSS" x="10vw" y="-14vw" />
        <Skill name="Javascript" x="25.5vw" y="0vw" />
        <Skill name="Typescript" x="0vw" y="16vw" />
        <Skill name="ReactJS" x="22vw" y="15vw" />
        <Skill name="NextJS" x="-28vw" y="-20vw" />
      </div>
    </>
  )
}

export default Skills
