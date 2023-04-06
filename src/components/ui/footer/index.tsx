import Link from 'next/link';
import Layout from '../Layout';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark text-sm font-medium dark:border-light dark:text-light md:text-base xl:text-lg">
      <Layout className="flex flex-col items-center justify-between gap-y-2 py-4 md:flex-row xl:py-8">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          From&nbsp;<Link href={'/'}>Jugg</Link>&nbsp;With
          <span className="px-1 text-4xl text-primary">&#9825;</span> and Coffee
        </div>
        <Link href={'/'}>Have a good day!</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
