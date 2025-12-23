import style from "./Header.module.css";

function Header() {
    return (
        <header className={style.header}>

            <div className={style.headerFlex}>
                <img className={style.logo} src="/dc-logo.png" alt="Logo DC Comics" />

                <nav>
                    <ul>
                        <li><a href="">Characters</a></li>
                        <li><a href="">Comics</a></li>
                        <li><a href="">Movies</a></li>
                        <li><a href="">TV</a></li>
                        <li><a href="">Games</a></li>
                        <li><a href="">Collectibles</a></li>
                        <li><a href="">Videos</a></li>
                        <li><a href="">Fans</a></li>
                        <li><a href="">News</a></li>
                        <li><a href="">Shop</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;