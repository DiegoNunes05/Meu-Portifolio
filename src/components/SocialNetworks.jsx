import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"

import "../styles/components/socialnetworks.sass"

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/diego-nunes-78a5bb235/" },
    { name: "github", icon: <FaGithub />, url: "https://github.com/diegonunes05" },
    { name: "instagram", icon: <FaInstagram />, url: "https://www.instagram.com/nunes_05/" },
];

const SocialNetworks = () => {
    return <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.url} className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>;
};
export default SocialNetworks;