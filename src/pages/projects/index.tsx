import { AnimatedText, GithubIcon, Layout, TransitionEffect } from '@/components'
import Link from 'next/link'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Project1Img, Project2Img, Project3Img, Project4Img } from '@/libs/img'
export interface IFeaturedProject {
  title: string
  summary: string
  img: StaticImageData
  link: string
  github: string
}
Project1Img
const FeaturedProject: React.FC<IFeaturedProject> = ({ title, summary, img, link, github }) => {
  return (
    <article className="md:-8 relative flex w-full flex-col items-start gap-y-4 rounded-3xl border border-dark bg-light p-6 shadow-2xl dark:border-light dark:bg-dark lg:flex-row lg:p-10 xl:p-12">
      <div className="absolute -right-3 top-0 -z-10 h-[102%] w-[101%] rounded-2xl bg-dark dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg lg:w-1/3"
      >
        <Image src={img} alt={title} width={720} height={480} priority />
      </Link>
      <div className="flex w-full flex-col items-center justify-between lg:w-2/3 lg:items-start lg:pl-6">
        <h2 className="my-2 w-full text-center text-2xl font-bold dark:text-light lg:text-left lg:text-4xl">
          {title}
        </h2>

        <p className="my-2 text-center text-sm font-medium text-dark dark:text-light md:text-base lg:text-left">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank">
            <GithubIcon className="!w-8 dark:fill-light md:!w-12" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg border-dark bg-dark px-3 py-1 text-lg font-semibold text-light hover:border hover:bg-light hover:text-dark dark:border-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light md:px-6 md:py-2"
          >
            Live demo
          </Link>
        </div>
      </div>
    </article>
  )
}

type Props = {}

const Projects = (props: Props) => {
  return (
    <>
      <TransitionEffect />
      <main className="centered mb-16 w-full flex-col">
        <Layout className="pt-8 lg:pt-16">
          <AnimatedText
            text="My utmost effort"
            className="mb-8 text-center !text-3xl md:!text-5xl lg:mb-16 xl:!text-8xl"
          />

          {/* <div className="grid grid-cols-12 gap-24">
          <div className="col-span-12">
            <FeaturedProject
              title="Yolo Shop"
              summary="The clothing store frontend project is a website where people can browse and buy clothes online. It includes a home page, product pages, a shopping cart.  It's built using React, Sass and redux. It's designed to work on different devices."
              img={Project1Img}
              link="https://xuantrong94-yolo-shop.vercel.app/"
              github="https://github.com/xuantrong94/ecommerce"
            />
          </div>
          <div className="col-span-12">
            <FeaturedProject
              title="Beach Hotel"
              summary="The booking hotel frontend project is a website that allows people to search for, compare, and book hotels online. It has a home page, search page, results page, hotel details page and booking page. Users can filter and sort search results based on size, price and. It's built using React. It's designed to work on different devices."
              img={Project2Img}
              link="https://xuantrong94-beach-hotel.vercel.app/"
              github="https://github.com/xuantrong94/beach-hotel"
            />
          </div>
        </div> */}
          <div className="space-y-12 lg:space-y-20">
            <FeaturedProject
              title="Yolo Shop"
              summary="The clothing store frontend project is a website where people can browse and buy clothes online. It includes a home page, product pages, a shopping cart. It's built using React, Sass and redux. It's designed to work on different devices."
              img={Project1Img}
              link="https://xuantrong94-yolo-shop.vercel.app/"
              github="https://github.com/xuantrong94/ecommerce"
            />
            <FeaturedProject
              title="Beach Hotel"
              summary="The booking hotel frontend project is a website that allows people to search for, compare, and book hotels online. It has a home page, search page, results page, hotel details page and booking page. Users can filter and sort search results based on size, price and. It's built using React. It's designed to work on different devices."
              img={Project2Img}
              link="https://xuantrong94-beach-hotel.vercel.app/"
              github="https://github.com/xuantrong94/beach-hotel"
            />
            <FeaturedProject
              title="Portfolio"
              summary="The portfolio frontend project built using Next.js and styled with Tailwind CSS. It also uses Framer Motion for animations and transitions. The website is optimized for performance and accessibility, and has a smooth user experience."
              img={Project3Img}
              link="https://xuantrong94-next-portfolio.vercel.app/"
              github="https://github.com/xuantrong94/next-portfolio"
            />
            <FeaturedProject
              title="Shoe Shop"
              summary="The frontend project is a website built with Next.js, Tailwind CSS, and Framer Motion. It's optimized for performance and has smooth animations."
              img={Project4Img}
              link="https://xuantrong94-next-shoe-shop.vercel.app/"
              github="https://github.com/xuantrong94/next-shoe-shop"
            />
          </div>
        </Layout>
      </main>
    </>
  )
}

export default Projects
