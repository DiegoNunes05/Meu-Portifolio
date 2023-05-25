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
    { id: "html", name: "HTML5", icon: <DiHtml5 />, knowledge: "conhecimento sobre HTML5", comment: "Ampla experiência em HTML5, um pouco mais de 1 ano e 6 meses de experiência com a linguagem fundamental para a estruturação e organização do conteúdo em páginas da web." },
    { id: "css", name: "CSS3", icon: <DiCss3 />, knowledge: "conhecimento sobre CSS3", comment: "Conhecimento sólido em CSS3, permitindo-me criar estilos atraentes e responsivos para melhorar a aparência visual dos elementos em sites e aplicações web." },
    { id: "js", name: "JavaScript", icon: <DiJavascript1 />, knowledge: "conhecimento sobre JavaScript", comment: "Proficiente em JavaScript, uma linguagem de programação essencial para adicionar interatividade e funcionalidade dinâmica aos sites, permitindo uma experiência de usuário aprimorada." },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, knowledge: "conhecimento sobre Node.js", comment: "Sólido conhecimento em Node.js, uma plataforma JavaScript que me permite desenvolver aplicações de alto desempenho e escaláveis no lado do servidor." },
    { id: "mysql", name: "MySQL", icon: <DiMysql />, knowledge: "conhecimento sobre MySQL", comment: "Experiência em MySQL, um sistema de gerenciamento de banco de dados relacional, que me capacita a projetar e manipular bancos de dados eficientes e seguros." },
    { id: "react", name: "React", icon: <DiReact />, knowledge: "conhecimento sobre React", comment: "Ampla experiência em React, um framework JavaScript popular para construir interfaces de usuário reativas e componentizadas, permitindo criar aplicações web modernas e eficientes." },
    { id: "git", name: "Git", icon: <DiGit />, knowledge: "conhecimento sobre Git", comment: "Experiência com Git, um sistema de controle de versão distribuído, que me permite gerenciar e controlar efetivamente as alterações no código fonte dos projetos, facilitando a colaboração em equipe." },
    { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap />, knowledge: "conhecimento sobre Bootstrap", comment: "Conhecimento sólido em Bootstrap, um framework CSS que me permite criar layouts responsivos e estilizados de forma rápida e eficiente, acelerando o processo de desenvolvimento web." },
    { id: "sass", name: "Sass", icon: <DiSass />, knowledge: "conhecimento sobre Sass", comment: "Experiência em Sass, uma linguagem de extensão CSS que me permite escrever estilos CSS mais organizados e reutilizáveis, tornando o processo de estilização mais eficiente e modular." },
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
                        <p className='sobre'>{tech.knowledge}</p>
                        <p className='comment'>{tech.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
}

export default TechnologiesContainer