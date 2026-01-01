import style from "./Main.module.css";
import comics from "../data/comics.js";

function Main() {
    return (
        <main className={style.main}>
            <div className={style.comicBox}>
                {
                    comics.map((comic) => {
                        return <div className={style.card}>

                            <img src={comic.thumb} alt={comic.description} />
                            <h4>{comic.title}</h4>

                        </div>

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