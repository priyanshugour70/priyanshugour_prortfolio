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
  hackerrank: 'https://www.hackerrank.com/priyanshugour70',
  leetcode: 'https://www.leetcode.com/priyanshugour70/',
  geeksforgeeks: 'https://auth.geeksforgeeks.org/user/priyanshugour70',
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
          skillName: 'npm',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'yarn',
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
  // }
];

export const projects: ProjectType[] = [
  {
    name: 'priyanshu-portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/priyanshugour70/priyanshugour_prortfolio',
    link: 'https://priyanshugour70.vercel.app/',
  },
];

export const feedbacks: FeedbackType[] = [
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // }
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Priyanshu Gour',
  description:
    'A passionate Full Stack Web Developer and Java Developer.',
  author: 'Priyanshu Gour',
  image: 'https://avatars.githubusercontent.com/u/111908314?s=400&u=7a933bd6e2577892cbb48edc0a634f5355712e95&v=4',
  url: 'https://priyanshugour70.vercel.app',
  keywords: [
    'Priyanshu',
    'Priyanshu Gour',
    '@priyanshugour70',
    'priyanshugour',
    'Portfolio',
    'priyanshu Portfolio ',
    'priyanshu gour Portfolio',
    'portfolio',
    'priyanshu',
    'gour',
    'priyanshugour70',
    'developer',
    'developer portfolio',
    'nextjs portfolio',
    'nextjs developer portfolio',
    'nextjs priyanshu gour',
    'priyanshu gour versel',
    'priyanshu gour instagram',
    'priyanshu gour github',
    'priyanshu gour linkedin',
    'priyanshu gour hackerearth',
    'priyanshu gour leetcode'
  ],
};
