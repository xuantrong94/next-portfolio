import { CircleText } from '@/libs/img'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type HireMeProps = {}

const HireMe: React.FC<HireMeProps> = () => {
  return (
    <div className="fixed bottom-4 left-4 hidden items-center justify-center overflow-hidden lg:flex">
      <div className="centered group relative h-auto w-60">
        <Image
          src={CircleText}
          alt="spin-text"
          width={1024}
          height={1024}
          className=" group-hover:none animate-spin-slow"
        />
        <Link
          href={'mailto:xuantrong.3112@gmail.com'}
          className="centered group absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-solid border-dark bg-dark text-base font-bold text-light shadow-md group-hover:bg-light group-hover:text-dark"
        >
          Hire Me
        </Link>
      </div>
    </div>
  )
}

export default HireMe
