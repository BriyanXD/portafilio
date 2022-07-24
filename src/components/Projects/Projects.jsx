import style from "./Projects.module.css"
import imageConcerTeck from "../../assets/image/concerteck.png"
import imageDogApi from "../../assets/image/DogApi.png"
import svgGithub from "../../assets/svg/github.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
function Projects(){
    return(
        <div className={style.containerProjects}>
            <h1 className={style.title}>Proyectos</h1>
            <div className={style.containerCards}>
                <div className={style.cardProject}>
                    <img className={style.cardImage} src={imageConcerTeck} alt="ConcerTeck" />
                    <span className={style.titleCard}>ConcerTeck</span>
                    <p className={style.textCard}>Es un E-Commerce orientado a que puedas comprar los boletos para tus eventos favoritos, también puedes publicar tus eventos para que podamos vender tickets con nosotros contamos con todo lo necesario para hacerte fácil el comprar y vender tickets para un envento. </p>
                    <a href="https://concer-teck-front-end.vercel.app/" target="_blank" rel="noopener noreferrer"><button className={style.buttonCardVisit}> <FontAwesomeIcon icon={faCircleChevronRight}/> Ver web</button></a>
                    <a href="https://github.com/BriyanXD/concerTeck" target="_blank" rel="noopener noreferrer"><button className={style.buttonCard}><FontAwesomeIcon icon={faCodeBranch}/> Ver proyecto</button></a>
                </div>
                <div className={style.cardProject}>
                    <img className={style.cardImage} src={imageDogApi} alt="DogApi" />
                    <span className={style.titleCard}>DogApi</span>
                    <p className={style.textCard}>Es una Wiki donde podrás encontrar toda la información necesaria sobre las diferentes razas de perros, podrás ver muchos datos interesantes como el peso, temperamento entre muchos otros.</p>
                    <a href="https://dogs-app-br.vercel.app/" target="_blank" rel="noopener noreferrer"><button className={style.buttonCardVisit}> <FontAwesomeIcon icon={faCircleChevronRight}/> Ver web</button></a>
                    <a href="https://github.com/BriyanXD/PI-Dogs" target="_blank" rel="noopener noreferrer"><button className={style.buttonCard}> <FontAwesomeIcon icon={faCodeBranch}/> Ver proyecto</button></a>
                </div>
            </div>
        </div>
    )
}
export default Projects;