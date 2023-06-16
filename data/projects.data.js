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

function projects(t) {
    return [
        {
            name: "Entertaiment App",
            description: t("projects.elements.0.description"),
            image: "entertaiment-app.png",
            github: "Entertaiment-App",
            link: "https://entertaiment-app-eta.vercel.app/",
            technologies: [react, javascript, nextjs, sass, figma],
        },
        {
            name: "Galleria",
            description:t("projects.elements.1.description"),
            image: "galleria.png",
            github: "galleria",
            link: "https://galleria-indol.vercel.app",
            technologies: [react, javascript, nextjs, sass]
        },
        {
            name: "Audiophile",
            description: t("projects.elements.2.description"),
            image: "audiophile.png",
            github: "audiophile",
            link: "https://santiago220506.github.io/audiophile",
            technologies: [react, javascript, sass, html, css]
        },
        {
            name: "Space 2.0",
            description: t("projects.elements.3.description"),
            image: "space.png",
            github: "space-v2",
            link: "https://santiago220506.github.io/space-v2",
            technologies: [react, javascript, styled, html, css]
        },

        {
            name: "Password generator",
            description: t("projects.elements.4.description"),
            image: "password-generator.png",
            github: "password-generator",
            link: "https://santiago220506.github.io/password-generator",
            technologies: [react, javascript, styled, html, css]
        },


        {
            name: "Wiki country",
            description: t("projects.elements.5.description"),
            image: "countries.png",
            github: "Entertaiment-App",
            link: "https://santiago220506.github.io/countries",
            technologies: [javascript, sass, html, css, pug]
        },

        {
            name: "Sneakers eccomerce",
            description: t("projects.elements.6.description"),
            image: "sneakers.png",
            github: "countries",
            link: "https://santiago220506.github.io/sneakers",
            technologies: [javascript, html, css, pug]
        },
        {
            name: "Job Listing",
            description: t("projects.elements.7.description"),
            image: "jobs.png",
            github: "jobs",
            link: "https://santiago220506.github.io/jobs",
            technologies: [javascript, html, css, pug]

        },
    ]

}

export default projects
