import React from "react";
import { Logo } from "../Logo";
export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-top">
				<div className="container">
					<div className="row">
						<div className="col-6">
							<div className="logo-title">
								<Logo />
								<p>
									U erga boring va <br />
									tog'liklar, yashil tabiat va malakali
									<br /> shifokorlar yordamida davolaning va
									dam oling!
								</p>
							</div>
							<span>Copyright OQTOSH | 2022</span>
						</div>
						<div className="col-6">
							<div className="row">
								<div className="col-6">
									<h3 className="menu-title">
										Biz bilan bog'lanish
									</h3>
									<a href="tel:+998712009500">
										<img
											src="/assets/images/icons/phone.svg"
											alt="contact"
										/>
										+998 71 200 95 00
									</a>
								</div>
								<div className="col-6">
									<h3 className="menu-title">
										Biz ijtimoiy tarmoqlarda
									</h3>
									<a
										href="https://www.instagram.com/oq_tosh_sanatoriyasi/"
										rel="noreferrer"
										target="_blank"
									>
										<img
											src="/assets/images/icons/instagram.svg"
											alt="instagram"
										/>
										Instagram platformasi
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
										Telegram platformasi
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
