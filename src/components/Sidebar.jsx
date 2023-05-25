import InformationContainer from "./InformationContainer";
import SocialNetworks from "./SocialNetworks";

import Avatar from "../img/foto.jpg";

import "../styles/components/sidebar.sass";

const sidebar = () => {
    return (
        <aside id='sidebar'>
            <img src={Avatar} alt="Diego Nunes" />
            <p className='title'>Desenvolvedor Front-end</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="https://diegonunes05.github.io/Meu-Curriculo/" className='btn'>
                Ver Currículo
            </a>
        </aside>
    )
}

export default sidebar