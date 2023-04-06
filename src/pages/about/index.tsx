import {
  AnimatedText,
  Education,
  Experiences,
  Layout,
  Skills,
  TransitionEffect,
} from '@/components'
import { AvatarImg } from '@/libs/img'
import { motion, useAnimation, useInView, useMotionValue, useSpring } from 'framer-motion'
import { Head } from 'next/document'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

interface AnimatedNumbersProps {
  value: number
}

const AnimatedNumbers = ({ value }: AnimatedNumbersProps) => {
  const ref = useRef<HTMLSpanElement>(null) // Explicitly pass the type of the ref

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    const handleChange = (latest: number) => {
      if (ref.current && latest <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    }
    springValue.on('change', handleChange)
    // return () => springValue.off("change", handleChange); // Remove event listener on cleanup
  }, [springValue, value])

  return <span ref={ref}></span>
}

type Props = {}

const About = (props: Props) => {
  return (
    <>
      <TransitionEffect />
      <main className="centered w-full dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Purpose is energized by passion!"
            className="mb-8 text-center !text-3xl md:!text-5xl lg:mb-16 xl:!text-8xl"
          />
          <div className="grid w-full grid-cols-8 gap-8 lg:gap-16">
            <div className="order-2 col-span-8 flex flex-col items-start justify-start md:order-1 md:col-span-4 xl:col-span-3">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="mb-4 text-sm font-medium md:text-base">
                Hello, I'm Nguyen Xuan Trong, a frontend developer. I motivated front-end developer
                with strong attention to detail and a passion for creating clean, user-friendly
                websites and applications using HTML, CSS, JavaScript, and React. Continuously seeks
                to expand knowledge and skills in new technologies and techniques.
              </p>
              <p className="text-sm font-medium md:text-base">
                With each project I undertake, I bring a user-focused approach. I'm excited about
                the chance to contribute my expertise and enthusiasm to your upcoming project.
              </p>
            </div>
            <div className="relative order-1 col-span-8 rounded-2xl border-2 border-dark bg-light p-4  dark:border-light dark:bg-dark md:order-2 md:col-span-4 lg:p-8 xl:col-span-3">
              <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[102%] rounded-2xl bg-dark dark:bg-light" />
              <div className="relative aspect-square overflow-hidden rounded-2xl lg:h-full">
                <Image src={AvatarImg} alt="avatar" fill priority />
              </div>
            </div>
            <div className="order-3 col-span-8 flex items-end justify-between xl:col-span-2 xl:flex-col">
              <div className="flex flex-col items-end justify-between">
                <span className="inline-block text-3xl font-bold md:text-5xl xl:text-7xl">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className="text-right font-medium capitalize text-dark/75 dark:text-light/75 lg:text-xl">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-between">
                <span className="inline-block text-3xl font-bold md:text-5xl xl:text-7xl">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-right font-medium capitalize text-dark/75 dark:text-light/75 lg:text-xl">
                  years of experiences
                </h2>
              </div>
            </div>
          </div>
          <Experiences />
          <Education />
          <Skills />
        </Layout>
      </main>
    </>
  )
}

export default About
