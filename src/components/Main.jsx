import style from "./Main.module.css";
import comics from "../data/comics.js";
import ComicCard from "./ComicCard.jsx"

function Main() {
    return (
        <main className={style.main}>
            <div className={style.comicBox}>
                {
                    comics.map((comic) => {
                        return <ComicCard comic={comic}/>
                    })
                }

            </div>

            <div className={style.btnFlex}>
                <button className={style.loadButton}>LOAD MORE</button>
            </div>

        </main>
    );
}

export default Main;