import { Tooltip } from "@mui/material"
import style from "./Abount.module.css"
import imagenjs from "../../assets/image/javascript.png"
import imagennode from "../../assets/image/node.jpg"
import imagereact from "../../assets/image/react.png"
import imagehtml from "../../assets/image/html.png"
import imagecss from "../../assets/image/css.png"
import imageredux from "../../assets/image/redux.png"
import imageexpress from "../../assets/image/express.png"
import imagepostgress from "../../assets/image/postgres.png"
import imagesequelize from "../../assets/image/sequelize.png"
import imagegit from "../../assets/image/git.png"
import imagematerialui from "../../assets/image/materialui.png"
const imagenAvatar = "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_640.png"



function Abount(){
    return(
        <div className={style.homeContainer}>
        <div className={style.description}>
            <h2 className={style.whoami}>Sobre mi</h2>
            <p>
            Mi nombre es Briyan Angel Bohtelo soy un apasionado por la tecnología y la astronomía resido en La Paz Bolivia ando en busca de mi camino dentro de la programación me interesa aprender más sobre las tecnologías que ya conozco y explorar nuevos campos dentro de la tecnología en  mi persona encontraras alguien perseverante, empático y curioso dispuesto a unirse a un proyecto desafiante dispuesto a darlo todo y listo para aprender en el proceso.
            </p>
            <button className={style.download}>Descargar CV</button>
            <div className={style.skillsAndHobbies}>
                <div className={style.skills}>
                    <h1>Skills</h1>
                    <div className={style.skillImageContain}>
                        <div className={style.containImage} alt="javascript" >
                            <Tooltip title="Javascript"  placement="top" arrow disableInteractive>
                                <img className={style.imageskill} src={imagenjs}/>
                            </Tooltip>
                        </div>
                        <div className={style.containImage}>
                            <Tooltip title="NodeJS"  placement="top" arrow disableInteractive>
                                <img className={style.imageskill} src={imagennode} alt="node" />
                            </Tooltip>
                        </div>
                        <div className={style.containImage}>
                            <Tooltip title="ReactJS"  placement="top" arrow disableInteractive>
                                <img className={style.imageskill} src={imagereact} alt="react" />
                            </Tooltip>
                            </div>
                        <div className={style.containImage}>
                            <Tooltip title="ReduxJS"  placement="top" arrow disableInteractive>
                                <img className={style.imageskill} src={imageredux} alt="redux" />
                            </Tooltip>
                            </div>
                        <div className={style.containImage}>
                            <Tooltip title="Html"  placement="top" arrow disableInteractive>
                                <img className={style.imageskill} src={imagehtml} alt="html" />
                            </Tooltip>
                            </div>
                        <div className={style.containImage}>
                            <Tooltip title="CSS"  placement="top" arrow disableInteractive>
                                <img className={style.imageskill} src={imagecss} alt="css"/>
                            </Tooltip>
                            </div>
                        <div className={style.containImage}>
                            <Tooltip title="ExpressJS"  placement="bottom" arrow disableInteractive>
                                <img className={style.imageskill} src={imageexpress} alt="expressjs" />
                            </Tooltip>
                            </div>
                        <div className={style.containImage}>
                            <Tooltip title="Postgres"  placement="bottom" arrow disableInteractive>
                                <img className={style.imageskill} src={imagepostgress} alt="postgres" />
                            </Tooltip>
                            </div>
                        <div className={style.containImage}>
                            <Tooltip title="SequelizeJS"  placement="bottom" arrow disableInteractive>
                                <img className={style.imageskill} src={imagesequelize} alt="sequelize" />
                            </Tooltip>
                            </div>
                        <div className={style.containImage}>
                            <Tooltip title="Git"  placement="bottom" arrow disableInteractive>
                                <img className={style.imageskill} src={imagegit} alt="git" />
                            </Tooltip>
                        </div>
                        <div className={style.containImage}>
                            <Tooltip title="meterialUI"  placement="bottom" arrow disableInteractive>
                                <img className={style.imageskill} src={imagematerialui} alt="meterialUI" />
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={style.hobies}>
                    <h1>Others</h1>
                </div>
            </div>
        </div>
        <div className={style.imageContainer}>
            <img className={style.image} src={imagenAvatar} alt="BriyanBohtelo" />
        </div>
    </div>
    );
}
export default Abount;