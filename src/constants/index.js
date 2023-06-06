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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Programmes",
  },
  {
    id: "work",
    title: "Ateliers",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Robotique et AI",
    icon: web,
  },
  {
    title: "Programmation",
    icon: mobile,
  },
  {
    title: "Impression 3D",
    icon: backend,
  },
  {
    title: "Computer Science",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Ateliers hebdomadaires",
    company_name: "RoboKids Dakhla",
    icon: starbucks,
    iconBg: "#ffffff",
    date: "Ateliers hebdomadaires",
    points: [
      "Pendant une durée de 2 heures d’atelier, nous retrouvons vos enfants de façon hebdomadaire.",
      "Des ateliers hebdomadaires sont proposés dès l’âge de 7 ans à l’âge de 18 ans, enfants et adolescents peuvent s’initier aux nouvelles technologies.",
      "Chaque projet finalisé, un objectif acquis. Nous varions nos programmes au cours de l’année.",
      
    ],
  },
  {
    title: "Stage vacances",
    company_name: "RoboKids Dakhla",
    icon: tesla,
    iconBg: "#ffffff",
    date: "Stage vacances",
    points: [
      "Envie d’activité originale, ludique et pédagogique pour vos enfants pendant les vacances scolaires?",
      "Votre enfant à la possibilité pendant les vacances scolaire d’explorer, d’approfondir une technologie.",
      "Les enfants apprennent l’informatique en s’amusant et deviennent acteurs de leurs projets face aux nouvelles technologies.",
      
    ],
  },
  
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
