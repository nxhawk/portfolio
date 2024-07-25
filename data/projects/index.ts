export interface IProject {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const prefix_github = "https://github.com";

const projects: IProject[] = [
  {
    title: "Medoctruyen - Application for synthesizing and reading novels",
    description:
      "Help users store the status of the novels they are reading, and at the same time helps users quickly move to each specific chapter, episode, and page of the story to continue following. Export the stories they are reading to ebook files (prc, epub, pdf, ...).",
    tags: ["Tailwindcss", "Tanstack", "Redux", "Reactjs", "Docker", "Typescript"],
    link: `${prefix_github}/Me-d-c-truy-n/frontend`,
  },
  {
    title: "SmartphoneStore - E-commerce website for selling phones",
    description:
      "Online phone sales website with the functions of an e-commerce website, supporting login with OAuth2, password confirmation and password update by authenticating messages from Gmail, payment with VNPay, Paypal.",
    tags: ["Typescript", "Reactjs", "Nestjs", "Redux", "Tanstack", "Docker", "PostgreSQL", "Tailwindcss", "Vnpay"],
    link: `${prefix_github}/nxhawk/SmartphoneStore`,
  },
  {
    title: "Quizz - Practice tests and 100% online single choice tests for free",
    description:
      "The software supports practice tests and 100% online multiple choice tests for free, with a variety of levels, subjects, and exercises. Get results and answers immediately after completing exercises and exam questions on the application, support searching for required exercises quickly.",
    tags: ["Typescript", "Vuejs", "Docker", "Tailwindcss", "Pinia"],
    link: `${prefix_github}/USNightOwl/quizz`,
  },
  {
    title: "TechShop - E-commerce website selling technology devices",
    description:
      "Website selling technology equipment with both admin and user sides with basic functions of e-commerce software, supporting login with OAuth2.",
    tags: ["Typescript", "Nextjs", "Prisma", "Mongodb"],
    link: `${prefix_github}/nxhawk/TechShop`,
  },
  {
    title: "ReactMovie - Website see movie information in theaters",
    description:
      "The website allows users to view information (introduction, cast list, demo videos) of theatrical movies, search on demand, api is taken from themoviedb.",
    tags: ["Typescript", "Reactjs", "Tanstack"],
    link: `${prefix_github}/USNightOwl/react-movie`,
  },
  {
    title: "Canteen Management - POS systems allow ordering food",
    description:
      "There are two sides: users can order through the system and pay, the admin side receives orders, processes and statistics revenue according to criteria.",
    tags: ["Expressjs", "Postgresql", "Handlebars", "Nodejs"],
    link: `${prefix_github}/mihoag/CanteenManagement`,
  },
];

export default projects;
