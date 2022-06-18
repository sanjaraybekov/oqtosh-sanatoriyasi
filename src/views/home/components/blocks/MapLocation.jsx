import React from "react";
import { Map, YMaps } from "react-yandex-maps";

export default function MapLocation() {
	return (
		<div className="map-location)">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3 className="title">Bizning manzil</h3>
						<div className="map">
							<YMaps>
								<Map
									defaultState={{
										center: [41.75821, 70.4238],
										zoom: 16,
									}}
								/>
                            </YMaps>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
