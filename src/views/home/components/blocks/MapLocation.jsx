import React from "react";
import { GeolocationControl, Map, Placemark, YMaps, ZoomControl } from "react-yandex-maps";

export default function MapLocation() {
	return (
		<div className="map-location">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1 className="title">Bizning manzil</h1>
						<div className="map">
							<YMaps query={{ lang: "en_RU" }}>
								<Map
									width={"100%"}
									height={"500px"}
									defaultState={{
										center: [41.646176, 69.76665],
										zoom: 14,
									}}
								>
									<GeolocationControl
										options={{
											float: "left",
											position: {
												bottom: 30,
												right: 30,
											},
										}}
                                    />
                                    <ZoomControl id="zoom" options={{ float: "right" }} />
									<Placemark
										geometry={[41.646176, 69.76665]}
									/>
								</Map>
							</YMaps>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
