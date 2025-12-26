import style from "./Header.module.css";

const links = [
    { 
        id:1,
        text: "Characters"
    },
    { 
        id:2,
        text: "Comics"
    },
    { 
        id:3,
        text: "Movies"
    },
    { 
        id:4,
        text: "TV"
    },
    { 
        id:5,
        text: "Games"
    },
    { 
        id:6,
        text: "Collectibles"
    },
    { 
        id:7,
        text: "Videos"
    },
    { 
        id:8,
        text: "Fans"
    },
    { 
        id:9,
        text: "News"
    },
    { 
        id:10,
        text: "Shop"
    }
]

function Header() {
    return (

        <header className={style.header}>

            <div className={style.headerFlex}>
                <img className={style.logo} src="/dc-logo.png" alt="Logo DC Comics" />

                <nav>
                    <ul>
                        {/* <li><a href="">Characters</a></li>
                        <li><a href="">Comics</a></li>
                        <li><a href="">Movies</a></li>
                        <li><a href="">TV</a></li>
                        <li><a href="">Games</a></li>
                        <li><a href="">Collectibles</a></li>
                        <li><a href="">Videos</a></li>
                        <li><a href="">Fans</a></li>
                        <li><a href="">News</a></li>
                        <li><a href="">Shop</a></li> */}
                        {
                        links.map((link, i)=> {
                        return <li key={i}><a href="">{link.text}</a></li>})
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;