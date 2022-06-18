import React from "react";
import HomeTopSection from "../components/blocks/HomeTopSection";
import MapLocation from "../components/blocks/MapLocation";

export default function HomePageDefaul() {
	function toTop() {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}

	return (
		<>
			<div className="home-page main">
				<button className="btn scroll-to-top" onClick={toTop}>
					<img src="/assets/images/icons/arrow.svg" alt="top" />
				</button>
				<HomeTopSection />
				<MapLocation />
				
			</div>
		</>
	);
}
