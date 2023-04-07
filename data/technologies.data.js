import technologiesNames from "constants"
import { Javascript, React, Html, Css, Sass, Nextjs, Styled, Pug, Figma, Mysql, Php, Firebase, Tailwind, Github, Git, Npm } from "data/technologiesIcons.data"

const technologies = [
    {
        name: "React",
        id: 1,
        Icon: React,
        color: "#61DBFB",
        information: [
            {
                title: "What can i do with ",
                content: "With React, i can build highly responsive and interactive UIs that can be easily integrated with other JavaScript libraries or frameworks"
            },
            {
                title: "What have i built with ",
                content: "With react I have created multiple web applications, among the most outstanding are an application for movie and series reviews, an ecommerce prototype for headphones, and an art gallery"
            },
            {
                title: "Why i use ",
                content: "Overall, React is a powerful and versatile library that helps me build efficient, scalable, and maintainable web applications Its main qualities are that it is easy to use, has a wide community and also integrates easily with other tools"
            },
        ],
        description: "The React.js framework is an open-source JavaScript framework and library developed by Facebook. It’s used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript",
    },
    {
        name: "Javascript",
        id: 2,
        Icon: Javascript,
        color: "#F0DB4F",
        information: [
            {
                title: "What can i do with ",
                content: "JavaScript is the programming language I use best to solve problems. The main use I give it is to create interactive and dynamic websites"
            },
            {
                title: "What have i built with ",
                content: "In addition to the projects built with react, some interesting projects built with this technology have been: a customer CRM, a landing page for a fake space travel company, and a clock"
            },
            {
                title: "Why i use ",
                content: "The main reason why I use javascript is its flexibility, which, unlike other programming languages, allows you to develop applications for different platforms"
            },
        ],
        description: "JavaScript is a scripting or programming language that allows you to implement complex features on web pages displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc",
    },
    {
        name: "HTML5",
        id: 3,
        Icon: Html,
        color: "#F06529",
        information: [
            {
                title: "What can i do with ",
                content: "HTML5 allows me to create web structures like headings, paragraphs, lists, tables, forms, and more to give your web content shape and structure"
            },
            {
                title: "What have i built with ",
                content: "Because HTML5 is the standard markup language in browsers, every front end application I've built has used this technology. The one that stands out the most is the movie and series review application"
            },
            {
                title: "Why i use ",
                content: "I use HTML5 because it is the current web standard for creating web pages and web applications. This means that it is widely compatible with most modern web browsers and is the safest and most reliable option for creating web content"
            },
        ],
        description: "HTML stands for HyperText Markup Language. It is a standard markup language for web page creation. It allows the creation and structure of sections, paragraphs, and links using HTML elements (the building blocks of a web page) such as tags and attributes",
    },
    {
        name: "CSS3",
        id: 4,
        Icon: Css,
        color: "#3C99DC",
        information: [
            {
                title: "What can i do with ",
                content: "CSS is the language I use to style and present my page or web application. With CSS, I control the layout, style, and appearance of elements on my website, allowing me to create compelling layouts, animations, and visual effects"
            },
            {
                title: "What have i built with ",
                content: "Because CSS3 is the standard styling language in browsers, every front-end application I've built has used this technology. The one that stands out the most is the movie and series review application"
            },
            {
                title: "Why i use ",
                content: "With CSS3 I have full control of the presentation on my website, regardless of platform or browser. In addition, it is easy to maintain and update"
            },
        ],
        description: "CSS handles the look and feel part of a web page. Using CSS, you can control the color of the text, the style of fonts, the ,spacing between paragraphs, how columns are sized and laid out, what background images or colors are used, layout designs,variations in display for different devices and screen sizes as well as a variety of other effects",
    },
    {
        name: "Sass",
        id: 5,
        Icon: Sass,
        color: "#CD6799",
        information: [
            {
                title: "What can i do with ",
                content: "SASS (Syntactically Awesome Style Sheets) is a CSS preprocessor that allows you to write CSS code more efficiently and faster"
            },
            {
                title: "What have i built with ",
                content: "SASS is the main and favorite tool that I use to style my web applications. I have been using it for 1 year, and from this moment I have built all my applications with this technology"
            },
            {
                title: "Why i use ",
                content: "I use SASS in my day-to-day life because, as a preprocessor, it helps me save time and reduce code repetition with variables, functions, and selector nesting. Also, a key point is its modularization and organization system, that I can keep my code organized and easy to understand, especially in large projects"
            },
        ],
        description: "Sass (which stands for 'Syntactically awesome style sheets) is an extension of CSS that enables you to use things like variables, nested rules, inline imports and more. It also helps to keep things organised and allows you to create style sheets faster",
    },
    {
        name: "NextJS",
        id: 6,
        Icon: Nextjs,
        color: "#000",
        information: [
            {
                title: "What can i do with ",
                content: "NextJS is the React framework par excellence. It gives me server-side rendering, static page generation, performance optimization, and even integration with external APIS"
            },
            {
                title: "What have i built with ",
                content: "NextJS is the technology with which I work the most today. In fact this portfolio is built using this tool. Two of my main projects have been built on NextJS: The movie and series reviews app and the art gallery"
            },
            {
                title: "Why i use ",
                content: "The need for NextJS arises from the deficiency of React to manage SEO on a website. In addition, it allows us to write javascript and react code on the server, which opens many doors for us when developing full stack applications"
            },
        ],
        description: "Next.js is a flexible React framework that gives you building blocks to create fast web applications",
    },
    {
        name: "Styled Components",
        id: 7,
        Icon: Styled,
        color: "#dc78b6",
        information: [
            {
                title: "What can i do with ",
                content: "Styled Components allows me to define styles for my React components in a more intuitive and dynamic way, making the code easier to read and maintain. It also allows me to create custom themes and nest styles to create more complex styles"
            },
            {
                title: "What have i built with ",
                content: "Styled Components is not my favorite way to style my apps, but still, I built small apps using this technology, like weather apps, forms, etc"
            },
            {
                title: "Why i use ",
                content: "Styled Components is a fast and declarative way of writing styles, which, although it has cons compared to other tools, development time is much less"
            },
        ],
        description: " Using tagged template literals and arrow functions in ES6+ and CSS, styled-components is a React-specific CSS-in-JS styling solution that creates a platform for developers to write actual CSS code to style React components, as well as in React Native",
    },
    {
        name: "Pug",
        id: 8,
        Icon: Pug,
        color: "#21130d",
        information: [
            {
                title: "What can i do with ",
                content: "This tool allows you to write html code in an elegant, concise and readable way. With this technology I have the ability to transform maintainable, reusable and readable code from pug to standard html"
            },
            {
                title: "What have i built with ",
                content: "At the beginning of my learning stage, pug was the tool I used to write html code. This led me to create several interesting projects with this technology, such as a country wiki, a space landing page, a shoe ecommerce prototype, among others"
            },
            {
                title: "Why i use ",
                content: "Pug gives me a simplified syntax of standard HTML. In addition, code reuse and efficiency when writing are factors that led me to use this tool as one of my favorites"
            },
        ],
        description: "Pug.js, formerly known as Jade, is a templating engine designed to render HTML in server-side technologies such as Node.js. Like any JavaScript templating engine, Pug.js supports writing reusable HTML code and rendering dynamic data",
    },
    {
        name: "Figma",
        id: 9,
        Icon: Figma,
        color: "#00BEFF",
        information: [
            {
                title: "What can i do with ",
                content: "Figma is a design tool, generally used to create user interfaces. With this I can create attractive interfaces, which, although they are not the most sophisticated because I am not a designer, fulfill their function in the process of developing a product"
            },
            {
                title: "What have i built with ",
                content: "With Figma I have designed several of my own applications, such as my first portfolio, a client manager, and my favorite: a real estate agency. All from scratch"
            },
            {
                title: "Why i use ",
                content: "Figma is a design tool in the cloud, which allows me to create any user interface from my own browser. Furthermore, it is a complete design tool, that is to say, it is possible to create the identity of a product completely with Figma. Finally, comment that it is the most comfortable and easy design tool that I have used"
            },
        ],
        description: "Figma is a powerful design tool that helps you to create anything: websites, applications, logos, and much more",
    },
    {
        name: "MySQL",
        id: 10,
        Icon: Mysql,
        color: "#00758F",
        information: [
            {
                title: "What can i do with ",
                content: "MySQL is possibly the most famous database manager in the world. With it I have the ability to model databases from scratch, perform DDL and DML queries and even change the logic of the database."
            },
            {
                title: "What have i built with ",
                content: "My path in the back end has not been as long as in the front end, but still I have created and modeled some databases, such as a manager for buying and selling houses, a contact system and a manager for a clinic. vet"
            },
            {
                title: "Why i use ",
                content: "I use this database manager because, in addition to being open source and free, its compatibility with almost all programming languages ​​gives freedom in development. Likewise, it is worth mentioning that it is a reliable platform due to its large community and the time it has been consolidated in the market"
            },
        ],
        description: "MySQL, the most popular Open Source SQL database management system, is developed, distributed, and supported by Oracle Corporation",
    },
    {
        name: "PHP",
        id: 11,
        Icon: Php,
        color: "#8993BE",
        information: [
            {
                title: "What can i do with ",
                content: "PHP is the only backend programming language I have enough skills with to build decent systems. Using this technology I have the ability to manage databases, and this leads to being able to create CRUD systems (create, remove, update, delete)"
            },
            {
                title: "What have i built with ",
                content: "My path in the back-end hasn't been as long as in the front-end, but I've still created some basic systems, such as a manager for buying and selling houses or a contact system"
            },
            {
                title: "Why i use ",
                content: "PHP is a high level programming language. This means that its learning scale is low compared to other programming languages. This was the main reason why I learned to use PHP as a backend language"
            },
        ],
        description: "PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML",
    },
    {
        name: "Firebase",
        id: 12,
        Icon: Firebase,
        color: "#F5820D",
        information: [
            {
                title: "What can i do with ",
                content: "Firebase is a web and mobile platform that allows developers to quickly and easily build backend systems. With this tool he was able to create session systems, manage users, information and files"
            },
            {
                title: "What have i built with ",
                content: "With the help of Firebase I have created what I consider my best personal project: A movie and series review application. In it I learned a lot about Firebase, its operation, its limitations and above all what can be achieved using this technology"
            },
            {
                title: "Why i use ",
                content: "It is a free platform that offers a wide variety of useful services and tools for mobile or web development. It's also easy to use and learn, with a faster learning curve than a backend programming language. Although obviously this comes with limitations"
            },
        ],
        description: "Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment",

    },
    {
        name: "TailwindCSS",
        id: 13,
        Icon: Tailwind,
        color: "#06b6d4",
        information: [
            {
                title: "What can i do with ",
                content: "TailwindCSS is another technique or technology for styling web pages. With it I can create styles for 100% of my application. Although it's not my favorite option for creating styles, I always consider it if the project is not going to grow"
            },
            {
                title: "What have i built with ",
                content: "With the help of this tool I have created several basic applications, such as forms, filters, CRM, among others."
            },
            {
                title: "Why i use ",
                content: "TailwindCSS is a technology that gives you productivity and flexibility when writing css code. In addition, its limitations make creating responsive designs much easier"
            },
        ],
        description: "Tailwind CSS makes it quicker to write and maintain the code of your application. By using this utility-first framework, you don't have to write custom CSS to style your application",
    },
    {
        name: "Github",
        id: 14,
        Icon: Github,
        color: "#1D202D",
        information: [
            {
                title: "What can i do with ",
                content: "GitHub is an online platform that is primarily used to host and manage software projects. I generally use the platform to manage my own projects and sometimes I use it as documentation for certain projects"
            },
            {
                title: "What have i built with ",
                content: "With Github I have managed each and every one of the projects that I have uploaded to the web"
            },
            {
                title: "Why i use ",
                content: "Github and its ecosystem is the most used tool on the web to manage code, and this is not for nothing. This technology has multiple functions and services that allow me as a developer to change versions in my projects, manage who can change the content of my files, among other things"
            },
        ],
        description: "GitHub is a website and cloud-based service that helps developers store and manage their code, as well as track and control changes to their code",
    },
    {
        name: "Git",
        id: 15,
        Icon: Git,
        color: "#F1502F",
        information: [
            {
                title: "What can i do with ",
                content: "Git is another tool for managing projects, their versions, and their changes. This tool is essential for the development and subsequent maintenance of any application. With this said, comment that I use it every day to create new projects, edit the ones already created and sometimes delete them"
            },
            {
                title: "What have i built with ",
                content: "With Git I have managed each and every one of the projects that I have uploaded to the web"
            },
            {
                title: "Why i use ",
                content: "Git allows collaboration on a project between multiple developers. This is fundamental in the development of a product. Also, its release system allows me to keep track of any issues at any time"
            },
        ],
        description: "Git is a DevOps tool used for source code management. It is a free and open-source version control system used to handle small to very large projects efficiently",
    },
    {
        name: "NPM",
        id: 16,
        Icon: Npm,
        color: "#CC3534",
        information: [
            {
                title: "What can i do with ",
                content: "NPM is a package manager that allows me to easily manage them in my project. It is a fundamental tool in modern web development"
            },
            {
                title: "What have i built with ",
                content: "Since my early days learning React, I have used NPM in one way or another. This means that all projects built on React use NPM"
            },
            {
                title: "Why i use ",
                content: "NPM is the standard Node.js package manager for any project. Although there are alternatives, this option is the most stable, the one with the most information and also the most used"
            },
        ],
        description: "NPM stands for Node Package Manager. It's a library and registry for JavaScript software packages. npm also has command-line tools to help you install the different packages and manage their dependencies. npm is free and relied on by over 11 million developers worldwide",
    },
]

export default technologies