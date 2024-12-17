import html from './html.svg'
import css from './css.svg'
import tail from './tailcss.svg'
import js from './js.svg'
import node from './node.svg'
import sql from './sql.svg'
import project_logo from './project-logo.svg'
import skill_logo from './Skills.svg'
import learn from './learn2code.png'
import app from './gropy.png'

export const logo ={
    project_logo,
    skill_logo,

}

export const skills = [
    {
        Title:"HTML",
        image:html,
        link:'https://html.com/'
    },
    {
        Title:"CSS-3",
        image:css,
        link:'https://www.w3schools.com/css/'
    },
    {
        Title:"Tailwind CSS",
        image:tail,
        link:'https://tailwindcss.com/'
    },
    {
        Title:"JavaScript",
        image:js,
        link:'https://www.w3schools.com/js/'
    },
    {
        Title:"Node.JS",
        image:node,
        link:'https://nodejs.org/en'
    },
    {
        Title:"MySQL",
        image:sql,
        link:'https://www.mysql.com/'
    }
]



export const projects_list = [
    {
        title:"Learn 2 Code",
        description:'A online platform where all the users can test theri own code and compile it, In this application they can even download their code in pdf format',
        stack:['Html','Css','Js','Node','Express','MySql'],
        link1:'',
        link2:'',
        image:learn
    },
    {
        title:"Gropy chatBot",
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime alias laudantium dolorem quod iusto porro esse aut nisi velit et obcaecati ipsum rem aliquid, consequuntur non, vel consectetur culpa! Necessitatibus.',
        stack:['React','Js','Node','Express','MySql'],
        link1:'',
        link2:'',
        image:app
    },
    {
        title:"Doctolib",
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime alias laudantium dolorem quod iusto porro esse aut nisi velit et obcaecati ipsum rem aliquid, consequuntur non, vel consectetur culpa! Necessitatibus.',
        stack:['React.Js','Js','Node','Express','MongoDb'],
        link1:'',
        link2:'',
        image:learn
    },
    
]




export const experience = [
    {
        Company:'Cognifyz',
        role:'FrontEnd Developer',
        des:'Worked as a front end developer by doning the task which was assigned to me by using the stacks "HTML","CSS","JavaScript" after completing they provided a certificate.',
        start:'10-12-2024',
        end:'21-01-2025'
    }
]