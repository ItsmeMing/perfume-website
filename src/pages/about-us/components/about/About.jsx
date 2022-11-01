import AboutItem from "./AboutItem";
import "./About.scss";

const About = () => {
    return (
        <section className="about-container container g-0">
            <h1 className="about-header">What we stand for.</h1>
            <p className="about-text">
                We believe in values that remain the core of what Dossier is today: a force for good.
            </p>
            <AboutItem
                imgurl="https://cdn.shopify.com/s/files/1/0047/4067/7699/files/transparency.png?v=1626714941"
                title="Transparency."
                details="We are open about our operations and empower our community with honest, valuable information about the industry and our products. From giving you all the details on the sourcing of our ingredients to being upfront about our pricing, we do things differently—no smoke and mirrors."
            />
            <AboutItem
                imgurl="https://cdn.shopify.com/s/files/1/0047/4067/7699/files/craftsmanship.png?v=1626714991"
                title="Craftsmanship."
                details="We never sacrifice quality or cut corners. Ever. While we may price our perfumes below what you’re accustomed to, with every bottle of Dossier perfume purchased, you’re receiving the highest-quality perfume sourced from Grasse, France—the perfume capital of the world. Our perfumers have the highest standards and values in mind and we use higher concentrations than most famous brands to ensure a long-lasting effect."
            />
            <AboutItem
                imgurl="https://cdn.shopify.com/s/files/1/0047/4067/7699/files/you_are_enough.png?v=1626715040"
                title="You are enough."
                details="In an industry that notoriously feeds on insecurities and profits from making us feel like we lack something only they can supply, we won’t dictate trends or tell you which scents are best for you. Try the scents that ignite your senses and make your own rules."
            />
            <AboutItem
                imgurl="https://cdn.shopify.com/s/files/1/0047/4067/7699/files/perfume_for_all.png?v=1626715083"
                title="Perfume for all."
                details="Access to premium fragrances shouldn’t be a privilege for just the 1%, but the norm for all. We strive for fairness and believe in offering high-quality fragrances at a price you can afford."
            />
        </section>
    );
};

export default About;
