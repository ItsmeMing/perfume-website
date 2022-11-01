import missionimage from "./Our-mission-_Desktop.jpg";
import "./Missions.scss";

const Missions = () => {
    return (
        <section className="missions-wrapper container g-0">
            <article className="missions">
                <h1 className="missions-header">Our missions.</h1>
                <p className="mission">
                    Dossier was founded out of a desire to make premium fragrances accessible to everyone. As scent
                    enthusiasts ourselves, it became impossible for us to turn a blind eye to the price markups
                    traditionally seen in the industry. Whether it be marking up scents because of celebrity endorsement
                    fees or pricey packaging, we realized perfumes were being sold for way more than they cost to make.
                </p>
                <p className="mission">
                    It’s time to say goodbye to feeling lost or left behind when it comes to experiencing premium
                    fragrances and to welcome a new way to shop; your own. With Dossier, enjoying clean, ethically
                    sourced, long-lasting, high-end perfume is within reach.
                </p>
                <p className="mission">
                    For those who feel overlooked by the industry, who are tired of fragrances being an investment, or
                    who are curious about stepping into a new way of consuming perfumes, we can’t wait to take the
                    journey with you.
                </p>
            </article>
            <figure className="missions-img">
                <img src={missionimage} alt="" />
            </figure>
        </section>
    );
};

export default Missions;
