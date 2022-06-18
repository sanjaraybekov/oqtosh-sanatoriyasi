import React from "react";
import { Link } from "react-router-dom";

const blocksInfo = [
	{
		miniTitle: "Boshlash",
		title: "Sanatoriya malakali shifokorlari",
		content:
			"Mijozlar yuqori malakali shifokorlar tomonidan davolanadilar. Sihatgohning samimiy tibbiyot hodimlari mijozlar uchun beminnat xizmat ko’rsatishadi.",
		image: "/assets/images/blocks/block1.jpg",
		link: "/shifokorlar",
	},
	{
		miniTitle: "Boshlash",
		title: "Oqtosh sanatoriyasi tabiati haqida",
		content:
			"Oqtosh sanatoriyasi tog’-iqlimiy kurort bo’lib, sihatgohning hududi keng bargli o’rmonzorlar bilan o’ralgan bo’lib, undan Oqtosh va Ayubsoy tog’ daryolari oqib o’tadi. Davolanuvchilar toza mussaffo tog’ havosidan bahra olish bilan birga, betakror go’zal tog’ manzaralarini tomosha qilib, sayr qilishlari mumkin.",
		image: "/assets/images/blocks/block2.jpeg",
		link: "/",
	},
	{
		miniTitle: "Boshlash",
		title: "Sanatoriya yotoqxonalari va qulayliklari",
		content:
			"Sanatoriyaning yotoqxonalari shinam va ozoda bo’lib, barcha qulayliklarga ega. Bir va ikki kishilik yotoqxonalari ham mavjud. Bu yerda, shaharning shovqinidan uzoqda, ajoyib tog’lar fonida siz o’zingizni chinakam qulay his qilishingiz mumkin.",
		image: "/assets/images/blocks/block3.jpeg",
		link: "/",
	},
	{
		miniTitle: "Boshlash",
		title: "Oqtosh sanatoriyasi tibbiyoti haqida",
		content:
			"Sanatoriyada tashxis qo’yish uchun EKG, ultratovush, spirometriya, klinik va biokimyoviy laboratoriya kabi zamonaviy diagnostika vositalari qo’llaniladi. Terapevtik omil: toza tog’ havosi, tog’ daryolaridan tabiiy gidroizlanish – bularning barchasi dam oluvchilarning o’ziga xos bo’lmagan etiologiyali nafas yo’llari kasalliklari bilan tiklanishiga foydali ta’sir ko’rsatadi.",
		image: "/assets/images/blocks/block4.jpg",
		link: "/",
	},
];

export default function HomeBlocksSection() {
	return (
		<div className="home-blocks container">
			{blocksInfo.map((item, index) => (
				<div className="row home-block">
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
