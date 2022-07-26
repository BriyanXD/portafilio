import style from "./Contact.module.css"
import Swal from 'sweetalert2'
import emailjs from "@emailjs/browser"

import logoGithub from "../../assets/image/github.png"
import logoLinkedin from "../../assets/image/linkedin.png"
import logoTwitter from "../../assets/image/twitter.png"

function Contact(){

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, event.target, process.env.REACT_APP_USER_ID)
        .then(function(response) {
            Toast.fire({
                icon: 'success',
                title: 'Correo Enviado'
              })
            event.target.reset()
        }, function(error) {
            Toast.fire({
                icon: 'error',
                title: 'Correo no enviado'
              })
        });
    }
    return(
        <div className={style.containerContact}>
            <form className={style.formEmail} onSubmit={sendEmail}>
                <h2 className={style.titleForm}>Contáctame</h2>
                <input className={style.inputForm} type="text"  name="from_name" placeholder="Nombre" required/>
                <br />
                <input className={style.inputForm} type="email" name="from_email" placeholder="Correo" required/>
                <br />
                <textarea className={style.textareaForm} name="from_message" id="" cols="30" rows="10" placeholder="Mensaje..." required></textarea>
                <br />
                <input className={style.buttonForm} type="submit" value="Enviar"/>
            </form>
            <div className={style.containerSocial}>
                <a className={style.linkSocial} href="https://github.com/BriyanXD" target="_blank" rel="noopener noreferrer">
                    <img className={style.imageSocial} src={logoGithub} alt="Github" />
                </a>
                <a className={style.linkSocial} href="https://www.linkedin.com/in/briyanbohtelo/" target="_blank" rel="noopener noreferrer">
                    <img className={style.imageSocial} src={logoLinkedin} alt="Linkedin" />
                </a>
                <a className={style.linkSocial} href="https://twitter.com/Briyan_An" target="_blank" rel="noopener noreferrer">
                    <img className={style.imageSocial} src={logoTwitter} alt="Twitter" />
                </a>
            </div>
        </div>
    )
}
export default Contact;