import React from 'react'

const ProjectsContainer = () => {
    return <section className="projects-container">
        <h2>Projetos</h2>
        <p>aqui está um pouco sobre alguns dos meus projetos. Entre eles, destaco: <br />
            <br />
            <li>Lista de Chegada: Desenvolvi uma aplicação com ReactJs e TypeScript para controle de chegada de pessoas em eventos.
                Essa lista  & permite registrar a presença de cada participante e gerar relatórios.</li>  <br />
            <br />
            <li> Controle Financeiro: Criei um sistema de controle financeiro tambem com ReactJs e TypeScript que auxilia no gerenciamento de receitas e despesas. Ele fornece uma visão clara das finanças, facilitando o planejamento financeiro.</li> <br />
            <br />
            <li> Landing Page para Empresa de Gesso e Drywall: Trabalhei como freelancer para uma empresa especializada em gesso e drywall. Desenvolvi uma landing page atraente e informativa para ajudar a promover seus serviços e atrair mais clientes.</li>
        </p>
        <a href="https://github.com/DiegoNunes05?tab=repositories" className='btn'>Ver projetos</a>
    </section>
}

export default ProjectsContainer