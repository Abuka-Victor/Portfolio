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
  aws,
  buybater,
  metaversus,
  youtube_clone,
  crwn,
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
    title: 'Frontend Engineer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Engineer',
    icon: backend,
  },
  {
    title: 'Technical Writer',
    icon: creator,
  },
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
    name: 'AWS',
    icon: aws,
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
    title: 'Frontend Engineer',
    company_name: 'Buybater',
    icon: buybater,
    iconBg: '#E6DEDD',
    date: 'April 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Freelance Web Developer',
    company_name: 'Upwork',
    icon: 'https://media.licdn.com/dms/image/C4E0BAQFAvA55uI9RQQ/company-logo_100_100/0/1620158724382?e=1700092800&v=beta&t=gIZ8UWKfrmmnRX6paJKbDG3QEGJLliL2GPSz0JwZxrc',
    iconBg: '#E6DEDD',
    date: 'Feb 2022 - Present',
    points: [
      'Fix bugs in existing codebases',
      'Understand user requirements',
      'Integrated 3rd party systems like firebase into applications',
      'Tech infrastructure consultation',
    ],
  },
  {
    title: 'Backend Lead - Intern',
    company_name: 'Zuri Chat',
    icon: 'https://media.licdn.com/dms/image/C4E0BAQFct7gFb0u6Qw/company-logo_100_100/0/1634909431926?e=1700092800&v=beta&t=UrulYuhH5maYkqVmh9i1BNeQCLO4BU62STV083EmWCE',
    iconBg: '#383E56',
    date: 'Aug 2021 - Oct 2021',
    points: [
      'Contributed in the writing of 40+ APIs that establish functionality across mobile, web and desktop versions of the Zuri Chat app.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Managed about 30 developers, hosting regular meetings and assigning tasks as well as performing code review with my deputy for cleanliness and efficiency.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer Intern',
    company_name: 'Newson',
    icon: 'https://media.licdn.com/dms/image/D4E0BAQHybS4-u80Qgw/company-logo_200_200/0/1683751017613?e=1700092800&v=beta&t=xYA0stFFa1WlWk9fipY4L5GjlpjhKdfGUZQPXpeMKqw',
    iconBg: '#E6DEDD',
    date: 'Aug 2021 - Oct 2021',
    points: [
      'Developed complete extension of company website where users can monitor campaign details and performances, manage their accounts and take action on leads generated.',
      'Designed an entity relationship diagram for new company database',
      'Implemented responsive designs',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'As a friend, and student, his creativity is unmatched. He is always open-minded, always looking for new and improved solutions, and never afraid to take on a challenge.',
    name: 'Emmanuel Dada',
    designation: 'Software Developer (Faculty)',
    company: 'NIIT',
    image:
      'https://media.licdn.com/dms/image/C5603AQEcxsdle98WIA/profile-displayphoto-shrink_800_800/0/1572067157682?e=1697673600&v=beta&t=DPLWobci3Ir3lBorrsXUHg7wOiM3CrIq2Rou46Rpj90',
  },
  {
    testimonial:
      'Victor is a very good team player and he always amuses the team with his work. He comes up with ideas and plans to move forward. ',
    name: 'Mamundeeswari Ganesan',
    designation: 'Software Engineer',
    company: 'Marks and Spencer',
    image:
      'https://media.licdn.com/dms/image/D4E03AQGqPVmKXIyXUw/profile-displayphoto-shrink_100_100/0/1688760970048?e=1697673600&v=beta&t=vvBp2jxml1PH86I6gvRmWGMHI--_MpA9tLGk4eJwJME',
  },
];

const projects = [
  {
    name: 'Crown Clothings',
    description:
      'Web-based e-commerce platform that allows users to add item to cart, sign up and sign in with firebase auth, and checkout with Paystack.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'firebase',
        color: 'pink-text-gradient',
      },
      {
        name: 'SCSS',
        color: 'blue-text-gradient',
      },
      {
        name: 'payment-gateway',
        color: 'green-text-gradient',
      },
      {
        name: 'react-context',
        color: 'pink-text-gradient',
      },
    ],
    image: crwn,
    source_code_link: 'https://github.com/Abuka-Victor/Crwn',
    live_link: 'https://crwnclothie.netlify.app/',
  },
  {
    name: 'Youtube Clone',
    description:
      'Immersive video-sharing experience, allowing users to browse, search, and watch videos seamlessly. I focused on responsive design and smooth user interactions. With a clean approach to API fetching',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind css',
        color: 'pink-text-gradient',
      },
    ],
    image: youtube_clone,
    source_code_link: 'https://github.com/Abuka-Victor/Youtube-Clone',
    live_link: 'https://vyoutube.netlify.app/',
  },
  {
    name: 'Metaversus',
    description: 'An elegant and simple landing page website, metaverse themed',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind css',
        color: 'green-text-gradient',
      },
      {
        name: 'framer-motion',
        color: 'pink-text-gradient',
      },
    ],
    image: metaversus,
    source_code_link: 'https://github.com/Abuka-Victor/MetaConcept',
    live_link: 'https://metaverseconcept.vercel.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };
