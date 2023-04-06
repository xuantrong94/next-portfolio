import { AnimatedText, HireMe, Layout } from '@/components';
import { NextPage } from 'next';
import Image from 'next/image';
import { Profile1 } from '@/libs/img';
import Link from 'next/link';
import { LinkArrow } from '@/components/ui/Icons';
interface HomeProps {}

const Home: NextPage<HomeProps> = ({}) => {
  return (
    <main className="mt-20 flex w-full items-center text-dark dark:text-light sm:!text-3xl md:!text-5xl lg:mt-0 lg:text-center lg:!text-6xl xl:max-h-screen xl:text-5xl">
      <Layout className="pt-0 sm:pt-8 md:pt-16">
        <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="w-full md:w-1/2">
            <Image
              src={Profile1}
              alt="profile"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="centered w-full flex-col lg:w-1/2">
            <AnimatedText
              text="Creating web apps from visionary ideas using my coding skills."
              className="text-center !text-3xl md:!text-4xl lg:!text-left xl:!text-5xl"
            />
            <p className="my-4 text-center text-sm font-medium md:text-base lg:text-left">
              As a frontend developer, I am dedicated to creating innovative
              solutions that fulfill my clients' requirements. You can explore
              my recent projects and articles to witness my proficiency in web
              development in action, particularly in React.js.
            </p>
            <div className="mt-2 flex flex-col items-center justify-center gap-y-4 text-sm font-medium md:flex-row md:text-base">
              <Link
                href={``}
                target="_blank"
                className="flex items-center rounded-lg border-2 border-transparent bg-dark p-2.5  px-4 text-sm font-medium text-light hover:border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:border-light hover:dark:bg-dark hover:dark:text-light md:px-6 md:text-lg"
                download={true}
              >
                See My Resume <LinkArrow className="ml-2 !w-6" />
              </Link>
              <Link
                href={'mailto:xuantrong.3112@gmail.com'}
                target="_blank"
                className="text-sm font-medium capitalize text-dark underline dark:text-light md:ml-4 md:text-lg"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </Layout>

      <HireMe />
    </main>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const categoriesResponse = await fetchDataFromAPI('api/categories');
//   const categories = categoriesResponse.data;
//   return {
//     props: {
//       categories,
//     },
//   };
// };

export default Home;
