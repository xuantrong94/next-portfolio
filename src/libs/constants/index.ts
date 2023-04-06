import { INavItem } from '@/types';
import { home, phone, mail } from 'public/svg';
import {
  HeadphoneCat,
  EarbudsCat,
  SmartWatchCat,
  SpeakerCat,
} from 'public/jpg';
export const NAVBAR_MENU: INavItem[] = [
  {
    href: '/',
    name: 'home',
  },
  {
    href: '/about',
    name: 'about',
  },
  {
    href: '/category',
    name: 'categories',
  },
];

export const SOCIAL_MENU = [
  {
    url: 'https://www.facebook.com',
    name: 'facebook',
  },
  {
    url: 'https://www.instagram.com',
    name: 'instagram',
  },
  {
    url: 'https://www.github.com',
    name: 'github',
  },
];

export const TITLE_GREETING = "Hello, I'm Xuan Trong, ";

const TITLE_POSITION_1 = 'Frontend Developer';
const TITLE_POSITION_2 = '<h1>Love Cafe</h1>';
const TITLE_POSITION_3 = '<LoveCodeToo/>';

export const TITLE_POSITION = [
  TITLE_POSITION_1,
  TITLE_POSITION_2,
  TITLE_POSITION_3,
];

export const TITLE_DESCRIPTION =
  'Former digital-marketing specialist, seeking to apply competent development skills with focus on collaboration, communication, and passion';

export const TITLE_PROJECT = 'Projects';

export const TECH_ICONS = [
  {
    id: 1,
    icon: '/html-icon.png',
    name: 'html',
  },
  {
    id: 2,
    icon: '/css-icon.png',
    name: 'css',
  },
  {
    id: 3,
    icon: '/js-icon.png',
    name: 'js',
  },
  {
    id: 4,
    icon: '/react-icon.png',
    name: 'react',
  },
  {
    id: 5,
    icon: '/ts-icon.png',
    name: 'react',
  },
  {
    id: 6,
    icon: '/nextjs-icon.png',
    name: 'react',
  },
];

export const TECHS = [
  {
    id: 1,
    name: 'HTML',
    contents: [
      {
        id: 1,
        content: 'Writing Sematic HTML',
      },
      {
        id: 2,
        content: 'Forms and Validation',
      },
      {
        id: 3,
        content: 'SEO Basics',
      },
    ],
  },
  {
    id: 2,
    name: 'CSS',
    contents: [
      {
        id: 1,
        content: 'Making Layout',
      },
      {
        id: 2,
        content: 'Responsive  Design',
      },
      {
        id: 3,
        content: 'Framework (Tailwind, Material UI, Bootstrap)',
      },
    ],
  },
  {
    id: 3,
    name: 'JavaScript',
    contents: [
      {
        id: 1,
        content: 'Syntax and Basic Constructs',
      },
      {
        id: 2,
        content: 'Fetch API',
      },
      {
        id: 3,
        content: 'DOM manipulation',
      },
      {
        id: 4,
        content: 'ES6+',
      },
      {
        id: 5,
        content: 'Concepts (Hoisting, Scope, Prototype)',
      },
    ],
  },
  {
    id: 4,
    name: 'React JS',
    contents: [
      {
        id: 1,
        content: 'Components',
      },
      {
        id: 2,
        content: 'JSX',
      },
      {
        id: 3,
        content: 'Virtual DOM',
      },
      {
        id: 4,
        content: 'Props / State',
      },
      {
        id: 5,
        content: 'Hooks',
      },
    ],
  },
  {
    id: 5,
    name: 'TypeScript',
    contents: [
      {
        id: 1,
        content: 'Interface',
      },
      {
        id: 2,
        content: 'Type',
      },
      {
        id: 3,
        content: 'Class',
      },
    ],
  },
  {
    id: 6,
    name: 'Next JS',
    contents: [
      {
        id: 1,
        content: 'Pages',
      },
      {
        id: 2,
        content: 'Routing',
      },
      {
        id: 3,
        content: 'Server-side Rendering',
      },
      {
        id: 4,
        content: 'Static site generation',
      },
      {
        id: 5,
        content: 'API routes',
      },
    ],
  },
];

export const FOOTER_ABOUT = {
  title: 'about',
  text: 'Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip',
};

export const FOOTER_CONTACT = {
  title: 'contact',
  content: [
    {
      id: 1,
      icon: home,
      text: 'Address: 123 for Contact',
    },
    {
      id: 2,
      icon: phone,
      text: 'Phone: 0123456789',
    },
    {
      id: 3,
      icon: mail,
      text: 'Email: 0123456789@example.com',
    },
  ],
};

export interface IFooterCategory {
  title: string;
  categories: ICategory[];
}

export interface ICategory {
  slug: string;
  name: string;
}

export const FOOTER_CATEGORIES: IFooterCategory = {
  title: 'Categories',
  categories: [
    {
      slug: 'headphones',
      name: 'headphones',
    },
    {
      slug: 'smart-watches',
      name: 'smart watch',
    },
    {
      slug: 'bluetooth-speakers',
      name: 'bluetooth speakers',
    },
    {
      slug: 'wireless-earbuds',
      name: 'wires earbuds',
    },
    {
      slug: 'home-theatre',
      name: 'home theatre',
    },
    {
      slug: 'projectors',
      name: 'projectors',
    },
  ],
};
export const FOOTER_PAGES = {
  title: 'pages',
  pages: [
    {
      slug: '',
      name: 'home',
    },
    {
      slug: 'about',
      name: 'about',
    },
    {
      slug: 'privacy-policy',
      name: 'privacy policy',
    },
    {
      slug: 'returns',
      name: 'returns',
    },
    {
      slug: 'terms-conditions',
      name: 'terms & conditions',
    },
    {
      slug: 'contact',
      name: 'contact us',
    },
  ],
};
export const CATEGORIES = [
  {
    id: 1,
    img: HeadphoneCat,
    name: 'HeadphoneCat',
  },
  {
    id: 2,
    img: SmartWatchCat,
    name: 'SmartWatchCat',
  },
  {
    id: 3,
    img: SpeakerCat,
    name: 'SpeakerCat',
  },
  {
    id: 4,
    img: EarbudsCat,
    name: 'EarbudsCat',
  },
];
