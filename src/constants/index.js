import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  hoanglinh,
  namiq,
  prm,
  weather,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Front-end Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  // {
  //   title: 'Content Creator',
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Mobile Game Developer',
    company_name: 'Hoang Linh Online',
    icon: hoanglinh,
    iconBg: '#E6DEDD',
    date: 'December 2023 - July 2024',
    points: [
      'Leveraged JavaScript and TypeScript as primary languages to architect and implement core gameplay mechanics.',
      'Developed and refined complex user interface (UI) logic using TypeScript, ensuring code maintainability and a seamless user experience.',
      'Optimized game logic and debugging workflows, successfully reducing in-game latency by 5%.',
      'Utilized TypeScript’s static typing to build robust game components, significantly minimizing runtime errors and system instability.',
      'Worked with internal game editors to script content and streamline production workflows using JS/TS frameworks.',
    ],
  },
  {
    title: 'Front-end Developer',
    company_name: 'NamIQ',
    icon: namiq,
    iconBg: '#383E56',
    date: 'September 2022 - June 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Project Management',
    description:
      'A personal initiative focused on building an efficient Project Management System. This project explores the balance between user-centric design and robust backend logic to help teams stay organized, meet deadlines, and optimize resource allocation.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: prm,
    source_code_link: 'https://prm.giason.xyz/',
  },
  {
    name: 'Weather Web',
    description:
      'Developed a responsive Weather App using Angular and TypeScript to gain hands-on experience with reactive programming, data binding, and fetching real-time data from weather APIs.',
    tags: [
      {
        name: 'angular',
        color: 'pink-text-gradient',
      },
      {
        name: 'weather-api',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
    ],
    image: weather,
    source_code_link: 'https://weather.giason.xyz/',
  },
];

export { services, technologies, experiences, testimonials, projects };
