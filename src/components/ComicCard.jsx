import style from "./ComicCard.module.css";

function ComicCard(props) {

    const comic = props.comic;

    return <div key={comic.id} className={style.card}>
                <img src={comic.thumb} alt={comic.description} />
                <h4>{comic.title}</h4>
            </div>
}

export default ComicCard;