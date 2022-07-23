import { useState } from "react";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import style from './Nav.module.css'

function Nav(){
    const [activeMenu, setActiveMenu] = useState(true)
    return(
        <nav className={style.navbar}>
            <div className={style.info}>
                <span className={style.logo}>Briyan</span>
                <span className={style.menu} onClick={() => setActiveMenu(!activeMenu)}><FontAwesomeIcon icon={faBars} /></span>
                <div className={activeMenu ? ` ${style.inactive} ${style.linksContainer}`
                : ` ${style.active} ${style.linksContainer}`} onClick={() => setActiveMenu(!activeMenu)}>
                    <Link className={style.link} to='/home'>Inicio</Link>
                    <Link className={style.link} to='/abount'>Sobre mi</Link>
                    <Link className={style.link} to='/projects'>Proyectos</Link>
                    <Link className={style.link} to='/contact'>Contactame</Link>
                </div>
            </div>
        </nav>
    );
}
export default Nav;