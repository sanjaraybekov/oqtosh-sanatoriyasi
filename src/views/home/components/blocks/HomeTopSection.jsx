import React from "react";
import Header from "../../../../components/common/headers/header";

export default function HomeTopSection() {
	return (
		<div className="home-top">
			<div className="dark-bg" />
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="top-content">
							<Header />
							<div className="top-section-body">
								<div className="body-content">
									<div className="social-links">
										<p>Bizga qo'shiling</p>
										<a
											href="https://www.instagram.com/oq_tosh_sanatoriyasi/"
											rel="noreferrer"
											target="_blank"
										>
											<img
												src="/assets/images/icons/instagram.svg"
												alt="instagram"
											/>
										</a>
										<a
											href="https://t.me/Oqtosh_uz"
											rel="noreferrer"
											target="_blank"
										>
											<img
												src="/assets/images/icons/telegram.svg"
												alt="telegram"
											/>
										</a>
									</div>
									<div className="body-content-title">
										<p>
											<span>-------</span>Mojizakor tabiat bag'rida
										</p>
										<h1>
											Mijozlarga yuqori malakali <br />
											shifokorlar
											tomonidan xizmat ko'rsatiladigan
											maskan!
										</h1>
										<a href="/" rel="noreffer">
											pastga scroll qilish
											<img
												src="/assets/images/icons/arrow.svg"
												alt="arrow"
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bottom-gradient" />
		</div>
	);
}
