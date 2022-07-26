import style from "./Error.module.css"
import imageError from "../../assets/svg/error.svg"
import { Link } from "react-router-dom";

function Error(){
    return(
        <div className={style.containerError}>
            <p className={style.title}>Error 404</p>
            <p className={style.message}>La ruta no exsite</p>
            <img className={style.image} src={imageError} alt="Error 404" />
            <Link className={style.redirect} to="/">Inicio</Link>
        </div>
    );
}
export default Error;