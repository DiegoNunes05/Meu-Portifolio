import {
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiGit,
    DiBootstrap,
    DiSass,
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologiescontainer = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJavascript1 /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "git", name: "Git", icon: <DiGit /> },
    { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap /> },
    { id: "sass", name: "Sass", icon: <DiSass /> },
];

const TechnologiesContainer = () => {
    return <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className='technologies-grid'>
            {technologiescontainer.map((tech) => (
                <div className='technology-card' id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>
                        <p>conhecimento sobre</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
}

export default TechnologiesContainer