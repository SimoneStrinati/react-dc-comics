import style from "./Main.module.css";
import comics from "../data/comics.js"; 

function Main() {
    return (
        <main className={style.main}>
            <div>
                {
                    comics.map((comic) => {
                        return <div>
                            <img src={comic.thumb} alt="immagine fumetto" />
                            <h4>{comic.title}</h4>
                            
                        </div> 
                    })
                }
            </div>
        </main>
    );
}

export default Main;