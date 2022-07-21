import style from "./Home.module.css"
const imagenAvatar = "https://yoolk.ninja/wp-content/uploads/2019/07/DC-Comics-batman.png"
function Home(){
    return(
        <div className={style.homeContainer}>
            <div className={style.description}>
                <h2>Descripcion</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, consequatur dolorem! Suscipit, cumque. Dolorum fugit quae, a et quod suscipit, neque ab eligendi voluptatibus exercitationem quia! Dignissimos voluptatum numquam dolorem.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus hic temporibus non excepturi veritatis nihil repellendus perspiciatis quis nisi nesciunt laudantium ut libero saepe impedit facilis, ratione mollitia aliquam! Perferendis!
                </p>
            </div>
            <div className={style.imageContainer}>
                <img className={style.image} src={imagenAvatar} alt="BriyanBohtelo" />
            </div>
        </div>
    );
}
export default Home;