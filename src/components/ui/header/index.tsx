import { NextPage } from 'next';
import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { ICustomLink, ICustomMobileLink } from '@/types';
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from '../Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from '@/libs/hooks/useThemeSwitcher';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
type HeaderProps = {};

const CustomLink: React.FC<ICustomLink> = ({ href, title, className }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} group relative`}>
      {title}
      <span
        className={`ease absolute -bottom-1/2 left-0 inline-block h-[2px] bg-dark transition-[width] duration-300 group-hover:w-full ${
          router.asPath === href ? 'w-full' : 'w-0'
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink: React.FC<ICustomMobileLink> = ({
  href,
  title,
  className,
  toggle,
}) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} text:light group relative dark:text-dark`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`ease absolute -bottom-1/4 left-0 inline-block h-[2px] bg-light transition-[width] duration-300 group-hover:w-full dark:bg-dark ${
          router.asPath === href ? 'w-full' : 'w-0'
        } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Header: NextPage<HeaderProps> = ({}) => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="relative z-50 flex w-full items-center justify-start px-8 py-8 font-medium dark:text-light lg:justify-between xl:px-32">
      <button
        className="flex flex-col items-center justify-center lg:hidden"
        onClick={handleClick}
      >
        <span
          className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${
            isOpen ? 'translate-y-2 rotate-45' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`my-0.5 block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 translate-y-0.5 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${
            isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
          } `}
        ></span>
      </button>
      <div className="hidden w-full items-center justify-between lg:flex">
        <nav className="space-x-4">
          <CustomLink href="/" title="Home" className="" />
          <CustomLink href="/about" title="About" className="" />
          <CustomLink href="/projects" title="Projects" className="" />
        </nav>
        <nav className="centered">
          <motion.a
            href="https://twitter.com"
            target="_blank"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
            className="mr-3 w-6"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
            className="mx-3 w-6"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
            className="ml-3 w-6"
          >
            <LinkedInIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className={`centered ml-6 rounded-full p-1 ${
              mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
            }`}
          >
            {mode === 'dark' ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="fixed left-1/2 top-1/2 z-50 flex min-w-[70vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between gap-16 rounded-lg bg-dark/30 py-16 text-light backdrop-blur-md dark:bg-light/90 lg:py-32"
        >
          <GrClose className="absolute right-4 top-4" onClick={handleClick} />
          <nav className="flex flex-col items-center justify-center gap-y-6">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="centered">
            <motion.a
              href="https://twitter.com"
              target="_blank"
              whileHover={{
                y: -2,
              }}
              whileTap={{ scale: 0.9 }}
              className="mr-3 w-6"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              whileHover={{
                y: -2,
              }}
              whileTap={{ scale: 0.9 }}
              className="mx-3 w-6 rounded-full dark:bg-dark"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              whileHover={{
                y: -2,
              }}
              whileTap={{ scale: 0.9 }}
              className="ml-3 w-6"
            >
              <LinkedInIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              className={`centered ml-6 rounded-full p-1 ${
                mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
              }`}
            >
              {mode === 'dark' ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-1/2 -translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
