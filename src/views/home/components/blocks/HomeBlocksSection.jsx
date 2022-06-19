import React from "react";
import { Link } from "react-router-dom";

const blocksInfo = [
	{
		miniTitle: "Boshlash",
		title: "Oqtosh sanatoriyasi haqida",
		content:
			"OQTOSH\" SANATORIYSI - Toshkent viloyati Bo'stonliq tumani Oqtosh qishlog'ida Tyan Shan tog'larining G'arbiy tumanida joylashgan. Toshkent shahridan 65 km uzoqlikda, dengiz sathidan 1140 m balandlikda joylashgan (G'arbiy Tyanshan — Qorjontovning pastki qismi). Sanatoriya hududida dastlab geologlar yashab tog' qidiruv ishlarini olib borishgan.",
		image: "/assets/images/blocks/block1.jpg",
		link: "/biz-haqimizda",
	},
	{
		miniTitle: "Boshlash",
		title: "Oqtosh sanatoriyasi tabiati",
		content:
			"Oqtosh sanatoriyasi tog’-iqlimiy kurort bo’lib, sihatgohning hududi keng bargli o’rmonzorlar bilan o’ralgan bo’lib, undan Oqtosh va Ayubsoy tog’ daryolari oqib o’tadi. Davolanuvchilar toza mussaffo tog’ havosidan bahra olish bilan birga, betakror go’zal tog’ manzaralarini tomosha qilib, sayr qilishlari mumkin.",
		image: "/assets/images/blocks/block2.jpeg",
		link: "/tabiat",
	},
	{
		miniTitle: "Boshlash",
		title: "Sanatoriya yotoqxonalari va qulayliklari",
		content:
			"Sanatoriyaning yotoqxonalari shinam va ozoda bo’lib, barcha qulayliklarga ega. Bir va ikki kishilik yotoqxonalari ham mavjud. Bu yerda, shaharning shovqinidan uzoqda, ajoyib tog’lar fonida siz o’zingizni chinakam qulay his qilishingiz mumkin.",
		image: "/assets/images/blocks/block3.jpeg",
		link: "/yotoqxonalar",
	},
	{
		miniTitle: "Boshlash",
		title: "Oqtosh sanatoriyasi tibbiyoti haqida",
		content:
			"Sanatoriyada tashxis qo’yish uchun EKG, ultratovush, spirometriya, klinik va biokimyoviy laboratoriya kabi zamonaviy diagnostika vositalari qo’llaniladi. Terapevtik omil: toza tog’ havosi, tog’ daryolaridan tabiiy gidroizlanish – bularning barchasi dam oluvchilarning o’ziga xos bo’lmagan etiologiyali nafas yo’llari kasalliklari bilan tiklanishiga foydali ta’sir ko’rsatadi.",
		image: "/assets/images/blocks/block4.jpg",
		link: "/tibbiyot",
	},
];

export default function HomeBlocksSection() {
	return (
		<div className="home-blocks container">
			{blocksInfo.map((item, index) => (
				<div className="row home-block" key={index}>
					<div className="col-1 home-block__index">
						{(index + 1).toString().padStart(2, "0")}
					</div>
					<div className="col-5 me-5 order-3">
						<div className="home-block__mini-title with-pre-line">
							{item.miniTitle}
						</div>
						<div className="home-block__title">{item.title}</div>
						<div className="home-block__content">
							{item.content}
                        </div>
						<div className="home-block__link">
                            <Link to={item.link}>Ko'proq ko'rish</Link><img src="/assets/images/icons/arrow_variant.svg" alt="arrow" />
                        </div>
					</div>
					<div className="col-4 order-4 home-block__image">
						<img
							className="w-100"
							src={item.image}
							alt={item.image}
						/>
					</div>
				</div>
			))}
		</div>
	);
}
