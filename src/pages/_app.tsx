import { Footer, Header } from '@/components';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';

import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import { useRouter } from 'next/router';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        className={`${montserrat.variable} min-h-screen w-full bg-light font-mont dark:bg-dark`}
      >
        <Header />
        <AnimatePresence mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
