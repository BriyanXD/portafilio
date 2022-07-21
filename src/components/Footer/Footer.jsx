import style from "./Footer.module.css"

function Footer(){
    return(
        <div className={style.footerContainer}>
            <span>Linkedin</span>
            <span>GitHub</span>
            <span>Twitter</span>
        </div>
    );
}
export default Footer;