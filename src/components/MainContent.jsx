import "../styles/components/mainContent.sass"

import AboutContainer from "./AboutContainer"
import ProjectsContainer from "./ProjectsContainer"
import TecnologiesContainer from "./TechnologiesContainer"

const mainContent = () => {
    return (
        <main id="main-content">
            <AboutContainer />
            <TecnologiesContainer />
            <ProjectsContainer />

        </main>
    )
}

export default mainContent