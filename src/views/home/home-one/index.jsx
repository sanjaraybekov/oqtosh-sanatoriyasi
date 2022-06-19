import React, {useState} from "react";
import HomeBlocksSection from "../components/blocks/HomeBlocksSection";
import HomeTopSection from "../components/blocks/HomeTopSection";
import MapLocation from "../components/blocks/MapLocation";
import PageAnimation from "../../../components/common/PageAnimation";

export default function HomePageDefaul() {
    const [animateExit, setAnimateExit] = useState(true)

    function toTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    return (
        <PageAnimation outEffect={animateExit}>
            <div className="home-page main">
                <button className="btn scroll-to-top" onClick={toTop}>
                    <img src="/assets/images/icons/arrow.svg" alt="top"/>
                </button>
                <HomeTopSection/>
                <HomeBlocksSection setAnimateExit={setAnimateExit}/>
                <MapLocation/>
            </div>
        </PageAnimation>
    );
}
