import style from "./Home.module.css"

function Home(){
    return(
        <div className={style.containerMain}>
            <div className={style.welcome}>
                <p className={style.title}>Briyan Angel Bohtelo</p>
                <hr className={style.line}/>
                <p className={style.text}></p>
            </div>
        </div>
    );
}
export default Home;