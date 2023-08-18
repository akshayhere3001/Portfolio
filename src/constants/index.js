import { HooBank, Manage, Jcurve } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const techStack = [
  {
    id: 0,
    language:
      "https://stefantopalovicdev.vercel.app/static/media/html.6e7b1b463015c056aeb9a624c8dc2876.svg",
    title: "HTML5",
  },
  {
    id: 1,
    language:
      "https://stefantopalovicdev.vercel.app/static/media/css3.9cecabbf6ce67609c48bc4f280a11002.svg",
    title: "CSS3",
  },
  {
    id: 2,
    language:
      "https://stefantopalovicdev.vercel.app/static/media/javascript.de4c2594613e34b15666206bbede7327.svg",
    title: "Javascript",
  },
  {
    id: 3,
    language:
      "https://stefantopalovicdev.vercel.app/static/media/react.afac9c43724070bf6674f2692b7356a9.svg",
    title: "ReactJS",
  },
  {
    id: 4,
    language:
      "https://stefantopalovicdev.vercel.app/static/media/tailwind.79614a5f61617ba49a0891494521226b.svg",
    title: "TailwindCSS",
  },
];

export const projectCards = [
  {
    id: 0,
    title: "HooBank",
    description:
      "HooBank uses a methodology to identify the credit cards most likely to fit your needs. Built with Modern User Interface & User Experience",
    stack: [
      {
        first: "React",
        second: "TailwindCSS",
      },
    ],
    img: HooBank,
    code: [
      {
        codeLink: "https://github.com/akshayhere3001/HooBank",
        demoLink: "https://hoo-bank-puce.vercel.app/",
      },
    ],
  },
  {
    id: 1,
    title: "Manage",
    description:
      "Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view. It Brings everyone together to build better Products",
    stack: [
      {
        first: "React",
        second: "TailwindCSS",
      },
    ],
    img: Manage,
    code: [
      {
        codeLink: "https://github.com/akshayhere3001/-Manage-Landing-Page",
        demoLink: "https://manage-landing-page-nine-ruby.vercel.app/",
      },
    ],
  },
  {
    id: 2,
    title: "JCurve",
    description:
      "JCurve is a news website, It delivers timely and accurate information to its readers about current events, developments, and stories from around the world. News websites help keep the public informed",
    stack: [
      {
        first: "Javascript",
        second: "Vanilla CSS",
      },
    ],
    img: Jcurve,
    code: [
      {
        codeLink: "https://github.com/akshayhere3001/J-Curve",
        demoLink: "https://sslpruigq8bgkgjoxfvlvw.on.drv.tw/www.Blog-Project/",
      },
    ],
  },
];
