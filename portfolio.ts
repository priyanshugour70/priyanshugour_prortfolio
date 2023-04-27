import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Priyanshu Gour',
  title: "Hi all, I'm Priyanshu",
  description:
    "I'm an enthusiastic Full Stack web developer that has expertise building websites with React, Next, Tailwind CSS, RestAPIs, MySql and Java programming with Advance Java, JSP, Hibernet, spring Framework, spring boot, and Microservises.",
  resumeLink:
    'https://docs.google.com/document/d/1SnlJhzChAF64FRGH4oZB-hkRG_IknO17FrLntrWsR3U/edit?usp=share_link',
};

export const openSource = {
  githubUserName: 'priyanshugour70',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://priyanshugour70.vercel.app/',
  linkedin: 'https://www.linkedin.com/in/priyanshugour70/',
  github: 'https://github.com/priyanshugour70',
  instagram: 'https://www.instagram.com/priyanshugour70',
  facebook: 'https://www.facebook.com/gourpriyanshu/',
  twitter: 'https://twitter.com/Priyanshugour70',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs using the Spring REST Framework and Hibernate'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Java',
          fontAwesomeClassName: 'logos:java',
        },
        {
          skillName: 'Spring',
          fontAwesomeClassName: 'bxl:spring-boot',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Java Developer',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Proficiency in Java, with a good understanding of its ecosystems'
        ),
        emoji(
          '⚡ Familiar with different design and architectural patterns. instances along with integration of databases'
          ),
        emoji('⚡ Experience of working on Java backend'),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Spring-Framework',
          fontAwesomeClassName: 'logos:spring',
        },
        {
          skillName: 'hibernate',
          fontAwesomeClassName: 'logos:hibernate',
        },
        {
          skillName: 'MySql',
          fontAwesomeClassName: 'logos:mysql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Apache',
          fontAwesomeClassName: 'logos:apache',
        },
        {
          skillName: 'Spring-boot',
          fontAwesomeClassName: 'bxl:spring-boot',
        },
        {
          skillName: 'Git',
          fontAwesomeClassName: 'logos:git',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker',
        },
        {
          skillName: 'Linux',
          fontAwesomeClassName: 'logos:ubuntu',
        },
      ],
    },
    // {
    //   title: 'Blockchain',
    //   lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
    //     ),
    //     emoji(
    //       '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
    //     ),
    //     emoji(
    //       '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
    //     ),
    //     emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
    //     emoji(
    //       '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'Ethereum',
    //       fontAwesomeClassName: 'logos:ethereum',
    //     },
    //     {
    //       skillName: 'Solidity',
    //       fontAwesomeClassName: 'logos:solidity',
    //     },
    //     {
    //       skillName: 'Web3js',
    //       fontAwesomeClassName: 'logos:web3js',
    //     },
    //     {
    //       skillName: 'Metamask',
    //       fontAwesomeClassName: 'logos:metamask-icon',
    //     },
    //     {
    //       skillName: 'Ganache',
    //       fontAwesomeClassName: 'logos:ganache-icon',
    //     },
    //   ],
    // },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Full Stack Development', //Insert stack or technology you have experience in
    progressPercentage: '70', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Java Development',
    progressPercentage: '70',
  },
  {
    Stack: 'Competitive Programming',
    progressPercentage: '80',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Jawahar Navodaya Vidyalaya, Harda',
    subHeader: 'Schooling',
    duration: 'July 2015 - June 2022',
    desc: 'Vice-captain of the school.',
    grade: 'Grade : A',
    descBullets: [
      'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
  {
    schoolName: 'Sage University, Bhopal',
    subHeader: 'Bachelor of Computer Application',
    duration: 'September 2022 - Present',
    desc: 'specialization in cloud computing.',
    grade: 'Grade A',
    descBullets: [
      'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
];

export const experience: ExperienceType[] = [
  // {
  //   role: 'Frontend Developer',
  //   company: 'Duseca Software',
  //   companyLogo: '/img/icons/common/dusecaSoftware.jpg',
  //   date: 'Apr 2022 – Jun 2022',
  //   desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
  // },
  // {
  //   role: 'API Engineer',
  //   company: 'Duseca Software',
  //   companyLogo: '/img/icons/common/dusecaSoftware.jpg',
  //   date: 'Jan 2022 – Mar 2022',
  //   desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
  //   // descBullets: [
  //   // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
  //   // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   // ],
  // },
  // {
  //   role: 'Full Stack Developer',
  //   company: 'Bleed-AI',
  //   companyLogo: '/img/icons/common/bleedAI.jpg',
  //   date: 'Sept 2021 - Oct 2021',
  //   desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
  // },
  // {
  //   role: 'Backend Developer',
  //   company: 'Wapidu',
  //   companyLogo: '/img/icons/common/wapidu.jpg',
  //   date: 'Sept 2021',
  //   desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
  // },
];

export const projects: ProjectType[] = [
  // {
  //   name: 'developer-portfolio',
  //   desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
  //   github: 'https://github.com/1hanzla100/developer-portfolio',
  //   link: 'https://developer-portfolio-1hanzla100.vercel.app/',
  // },
  // {
  //   name: 'AtlasMart',
  //   desc: 'With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.',
  //   github: 'https://github.com/1hanzla100/Django-React-Marketplace',
  // },
  // {
  //   name: 'Technota (Forum)',
  //   desc: 'Get hands-on experience in technical skills with Technota',
  //   github: 'https://github.com/1hanzla100/django-react-forum',
  // },
  // {
  //   name: 'Shopaza (Ecommerce)',
  //   desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
  //   github: 'https://github.com/1hanzla100/Django-ecommerce',
  // },
];

export const feedbacks: FeedbackType[] = [
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Priyanshu Gour',
  description:
    'A passionate Full Stack Web Developer and Java Developer.',
  author: 'Priyanshu Gour',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Priyanshu',
    'Priyanshu Gour',
    '@priyanshugour70',
    'priyanshugour',
    'Portfolio',
    'priyanshu Portfolio ',
    'priyanshu gour Portfolio',
  ],
};
