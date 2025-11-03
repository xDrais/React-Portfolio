import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  dassaultSystemes,
  skyreal,
  satoriPop,
  konnectNetwok,
  dueToData,
  carrent,
  jobit,
  tripguide,
  threejs,
  net,
  angular,
  java,
  rxjs,
  cSharp,
  sysMl,
  factoryPCG,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Full stack developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Rxjs",
    icon: rxjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C#",
    icon: cSharp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: ".Net",
    icon: net,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Three js",
    icon: threejs,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Développeur Full Stack",
    company_name: "SkyReal",
    icon: skyreal,
    iconBg: "#000000",
    date: "Septembre 2024 - Août 2025",
    points: [
      "Optimisation des endpoints avec FastAPI, améliorant les performances et la scalabilité du système.",
      "Collaboration avec l’équipe VR pour réaliser un module de streaming 3D d’un environnement VR.",
      "Collaboration pour développer des interfaces de visualisation de données complexes et synchronisées.",
      "Développement d’une application de gestion et statistiques interactives pour la plateforme XR Center.",
      "Automatisation de la génération de composants, réduisant les erreurs et le temps de développement.",
    ],
  },
  {
    title: "Développeur Full Stack",
    company_name: "Dassault Systèmes(CATIA)",
    icon: dassaultSystemes,
    iconBg: "#014a73",
    date: "Février 2024 - Juillet 2024",
    points: [
      "Déploiement des solutions avec Docker/Kubernetes et refonte de l’architecture du projet.",
      "Encapsulation et intégration de modules existants dans des composants Angular réutilisables.",
      "Développement d’une librairie de navigation unifiée garantissant la cohérence des produits internes.",
      "Mise en place de tests et de thèmes pour assurer la cohérence visuelle et la qualité du produit.",
    ],
  },
  {
    title: "Développeur Full Stack",
    company_name: "SatoriPop",
    icon: satoriPop,
    iconBg: "#fff349",
    date: "Juin 2023 - Août 2023",
    points: [
      "Développement de modules temps réel (chat et visioconférence) avec sécurisation via middlewares.",
      "Intégration d’un système de paiement sécurisé, facilitant les transactions en crypto-monnaie.",
      "Conception d’interfaces web réactives et intuitives, améliorant l’expérience utilisateur.",
      "Optimisation des requêtes GraphQL et documentation technique pour améliorer les performances.",
    ],
  },
  {
    title: "Développeur Frontend",
    company_name: "Konnect Network",
    icon: konnectNetwok,
    iconBg: "#04013a",
    date: "Juin 2022 - Juillet 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Développeur Frontend",
    company_name: "Due To Data",
    icon: dueToData,
    iconBg: "#ffffff",
    date: "Juin 2021 - Juillet 2021",
    points: [
      "Évaluation des exigences clients, rédaction de cahiers des charges et conception de librairies NPM.",
      "Développement d’une recherche dynamique et avancé et l’intégration des sockets.",
      "Intégration d’algorithmes de data science pour l’analyse et le traitement des données.",
      "Création de chartes graphiques dynamiques avec Google Charts.",
    ],
  }
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
    name: "Agents automatation",
    description:
      "Agent d'automatisation permettant de lire les données d'un fichier CSV, d'envoyer des e-mails automatisés, de réaliser des recherches personnalisées via un LLM Ollama local et de déployer le projet sur Git et Docker.",
    tags: [
      {
        name: "n8n",
        color: "blue-text-gradient",
      },
      {
        name: "CI/CD",
        color: "green-text-gradient",
      },
      {
        name: "Llm",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/xDrais/Agents-automations-tasks",
    type: "image",

  },
  {
    name: "SysMl v2",
    description:
      "Interface permettant à l'utilisateur d'écrire un code sysMl v2 et de le compiler afin de générer des modèles avec une interface web et une personnalisation de l'interface utilisateur et l'editeur de text Monaco du VSCode.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Php",
        color: "green-text-gradient",
      },
      {
        name: "Angular material",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.3ds.com/products/catia",
    type: "video",
    video: sysMl,
  },
  {
    name: "Factory Layout PCG",
    description:
      "Interface permettant de charger des objets (Avion, obstacle...) dans une page web avec un plan 2D, de dessiner des polygones autour ces objects et de générer un environnement réalité virtuelle (VR) dans Unreal 5 par la génération procédurale (PCG).",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Gojs",
        color: "green-text-gradient",
      },
      {
        name: "Unreal",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://skyreal.tech/",
    type: "video",
    video: factoryPCG,
  },
];

export { services, technologies, experiences, testimonials, projects };
