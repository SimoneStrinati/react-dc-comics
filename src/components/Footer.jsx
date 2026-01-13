import style from "./Footer.module.css";

function Footer() {

    const dcComicsLink = [
        { id: 1, label: "Characters", url: "#"},
        { id: 2, label: "Comics", url: "#"},
        { id: 3, label: "Movies", url: "#"},
        { id: 4, label: "TV", url: "#"},
        { id: 5, label: "Games", url: "#"},
        { id: 6, label: "Videos", url: "#"},
        { id: 7, label: "News", url: "#"},
    ];

    const shopLink = [
        { id: 1, label: "Shop DC", url: "#"},
        { id: 2, label: "Shop DC Collectibles", url: "#"}
    ];

    const DCLinks = [
        { id: 1, label: "Terms Of Use", url: "#"},
        { id: 2, label: "Privacy Policy", url: "#"},
        { id: 3, label: "Ad Choices", url: "#"},
        { id: 4, label: "Advertising", url: "#"},
        { id: 5, label: "Jobs", url: "#"},
        { id: 6, label: "Subscriptions", url: "#" },
        { id: 7, label: "Talent Workshops", url: "#" },
        { id: 8, label: "CPSC Certificates", url: "#" },
        { id: 9, label: "Ratings", url: "#" },
        { id: 10, label: "Shop Help", url: "#" },
        { id: 11, label: "Contact Us", url: "#" }
    ];

    const sitesLink = [
        { id: 1, label: "DC", url: "#" },
        { id: 2, label: "MAD Magazine", url: "#" },
        { id: 3, label: "DC Kids", url: "#" },
        { id: 4, label: "DC Universe", url: "#" },
        { id: 5, label: "DC Power Visa", url: "#" },
    ]




    return (
        <footer className={style.footer}>
            <div className={style.footerContainer}>

                <div className={style.footerLinks}>
                    <div>
                        <h4>DC Comics</h4>
                        <ul>
                            {
                                dcComicsLink.map(comics => {
                                    return <li key= {"DCComics-" + comics.id}><a href={comics.url}>{comics.label}</a></li>
                                })
                            }

                        </ul>

                        <h4>Shop</h4>
                        <ul>
                            {
                                shopLink.map(shop => {
                                    return <li  key= {"ShopLink-" + shop.id}><a href={shop.url}>{shop.label}</a></li>
                                })
                            }
                        </ul>
                    </div>

                    <div>
                        <h4>DC</h4>
                        <ul>
                            {
                                DCLinks.map(DCLink => {
                                    return <li  key= {"DCLinks-" + DCLink.id}><a href={DCLinks.url}>{DCLink.label}</a></li>
                                })
                            }
                        </ul>
                    </div>

                    <div>
                        <h4>Sites</h4>
                        <ul>
                            {
                                sitesLink.map(site => {
                                    return <li key= {"Sites-" + site.id}><a href={site.url}>{site.label}</a></li>
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className={style.footerImg}>
                    <img src="/dc-logo-bg.png" alt="DC Logo" />
                </div>

            </div>
        </footer>

    )
}

export default Footer;