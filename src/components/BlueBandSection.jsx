import style from "./BlueBandSection.module.css";

function BlueBandSection() {
    return (
        <section className= {style.blueBand}>
            <div className= {style.blueContainer}>
                <div className= {style.blueItem}>
                    <img src="/buy-comics-digital-comics.png" alt="Digital Comics" />
                    <span>Digital Comics</span>
                </div>

                <div className= {style.blueItem}>
                    <img src="/buy-comics-merchandise.png" alt="Merchandise" />
                    <span>DC Merchandise</span>
                </div>

                <div className= {style.blueItem}>
                    <img src="/buy-comics-subscriptions.png" alt="Subscritions" />
                    <span>Subscription</span>
                </div>

                <div className= {style.blueItem}>
                    <img src="/buy-comics-shop-locator.png" alt="Comics Shop" />
                    <span>Comic Shop Locator</span>
                </div>

                <div className= {style.blueItem}>
                    <img src="/buy-dc-power-visa.svg" alt="Power Visa" />
                    <span>DC Power Visa</span>
                </div>
            </div>
        </section>
    );
}

export default BlueBandSection;