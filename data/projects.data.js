import { Javascript, React, Html, Css, Sass, Nextjs, Styled, Pug, Figma, Mysql, Php, Firebase, Tailwind, Github, Git, Npm } from "data/technologiesIcons.data"




const technologiesIcons = {
    react: {
        name: "React",
        id: 1,
        Icon: React,
        color: "#61DBFB"
    },
    javascript: {
        name: "Javascript",
        id: 2,
        Icon: Javascript,
        color: "#F0DB4F",
    },
    html: {
        name: "HTML5",
        id: 3,
        Icon: Html,
        color: "#F06529",
    },
    css: {
        name: "CSS3",
        id: 4,
        Icon: Css,
        color: "#3C99DC",
    },
    sass: {
        name: "Sass",
        id: 5,
        Icon: Sass,
        color: "#CD6799",
    },
    nextjs: {
        name: "NextJS",
        id: 6,
        Icon: Nextjs,
        color: "#000",
    },
    styled: {
        name: "Styled Components",
        id: 7,
        Icon: Styled,
        color: "#dc78b6",
    },
    pug: {
        name: "Pug",
        id: 8,
        Icon: Pug,
        color: "#21130d",
    },
    figma: {
        name: "Figma",
        id: 9,
        Icon: Figma,
        color: "#00BEFF",
    },
    mysql: {
        name: "MySQL",
        id: 10,
        Icon: Mysql,
        color: "#00758F",
    },
    php: {
        name: "PHP",
        id: 11,
        Icon: Php,
        color: "#8993BE",
    },
    firebase: {
        name: "Firebase",
        id: 12,
        Icon: Firebase,
        color: "#F5820D",

    },
    tailwind: {
        name: "TailwindCSS",
        id: 13,
        Icon: Tailwind,
        color: "#06b6d4",
    },
    github: {
        link: "",
        name: "Github",
        id: 14,
        Icon: Github,
        color: "#1D202D",
    },
    git: {
        name: "Git",
        id: 15,
        Icon: Git,
        color: "#F1502F",
    },
    npm: {
        name: "NPM",
        id: 16,
        Icon: Npm,
        color: "#CC3534",
    },
}
const { react, javascript, html, css, sass, nextjs, styled, pug, figma, mysql, php, firebase, tailwind, github, git, npm } = technologiesIcons

const projects = [
    {
        name: "Entertaiment App",
        description: "Full stack application that I consider as one of the best I have built. In it you can find almost all the existing movies and series to date. In each one you can see their information such as year of release, directors, cast, earnings, their native language, among other things. If you want to leave an opinion about the work, you can do it too! I created a review system if you want to talk about how much you love \"Pulp Fiction\", all this controlled with a system of users and sessions",
        image: "entertaiment-app.png",
        github: "Entertaiment-App",
        link: "https://entertaiment-app-eta.vercel.app/",
        technologies: [react, javascript, nextjs, sass, figma],
    },
    {
        name: "Galleria",
        description: "Application inspired by the FrontendMentor website. This consists of a virtual gallery where you can observe, as well as know in detail, the most famous works of history, such as \"Mona Lisa\", \"Starry Night\", \"Guernica\", \"The Swing\", among others.",
        image: "galleria.png",
        github: "galleria",
        link: "https://galleria-indol.vercel.app",
        technologies: [react, javascript, nextjs, sass]
    },
    {
        name: "Audiophile",
        description: "This Ecommerce prototype comes, once again, from the FrontendMentor website. In it you will be able to see, with a very nice interface, the products presented by this headphones and speakers store. You can also simulate the purchase of products with a shopping cart system.",
        image: "audiophile.png",
        github: "audiophile",
        link: "https://santiago220506.github.io/audiophile",
        technologies: [react, javascript, sass, html, css]
    },
    {
        name: "Space 2.0",
        description: "This landing page is a remake of the one I had already built some time ago. In this page you will find information about a fictitious space travel company, from the duration of the trip to the destination, to the people in charge of making sure you arrive safely. So don't delay and order your tickets to see the moon!",
        image: "space.png",
        github: "space-v2",
        link: "https://santiago220506.github.io/space-v2",
        technologies: [react, javascript, styled, html, css]
    },

    {
        name: "Password generator",
        description: "Small application to generate random passwords",
        image: "password-generator.png",
        github: "password-generator",
        link: "https://santiago220506.github.io/password-generator",
        technologies: [react, javascript, styled, html, css]
    },


    {
        name: "Wiki country",
        description: "Wiki country is a small application where you can search and explore all the countries in the world. In it you will be able to find information about any country",
        image: "countries.png",
        github: "Entertaiment-App",
        link: "https://santiago220506.github.io/countries",
        technologies: [javascript, sass, html, css, pug]
    },

    {
        name: "Sneakers eccomerce",
        description: "Application of a prototype of a sneakers store. It has a view where you can simulate the action of buying shoes.",
        image: "sneakers.png",
        github: "countries",
        link: "https://santiago220506.github.io/sneakers",
        technologies: [javascript, html, css, pug]
    },
    {
        name: "Job Listing",
        description: "Fictitious job listing application where you can filter the jobs by each category",
        image: "jobs.png",
        github: "jobs",
        link: "https://santiago220506.github.io/jobs",
        technologies: [javascript, html, css, pug]

    },
]

export default projects
