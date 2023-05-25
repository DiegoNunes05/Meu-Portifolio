import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
    return <section id="information">
        <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Telefone</h3>
                <p><a href="https://wa.me/21999427160">(21) 999427160</a> </p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id="email-icon" />
            <div>
                <h3>E-mail</h3>
                <p><a id="email" href="mailto:diegonunesabc@gmail.com">diegonunesabc@gmail.com</a></p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Localização</h3>
                <p>Rio de Janeiro</p>
            </div>
        </div>
    </section>
};

export default InformationContainer;