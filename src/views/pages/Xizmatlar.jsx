import React from "react";

export default function Xizmatlar() {
	const image = "/assets/images/oqtosh.jpg";
	const content =
		"OQTOSH\" sanatoriyasi tog'li iqlim kurortidir. Hudud bargli o'rmonli tog 'yonbag'irlari bilan o'ralgan. Uning yonidan Oqtosh va Ayubsoy tog 'daryolari oqib o'tadi.";
	const xizmatlar = [
		{
			title: "Tibbiy muolajalar majmuasiga quyidagilar kiradi:",
			xizmat: [
				{
					name: "UHF",
				},
				{
					name: "Elektroforez",
				},
				{
					name: "Delfin massaji",
				},
				{
					name: "UZE",
				},
				{
					name: "Eng yangi zamonaviy tibbiy asbob-uskunalar bilan jihozlangan elektrosleep",
				},
			],
		},
		{
			title: "Asosiy terapevtik xizmatlar: ",
			xizmat: [
				{
					name: "EKG",
				},
				{
					name: "Fizioterapiya",
				},
				{
					name: "Yuqori chastotali va past chastotali oqimlar",
				},
				{
					name: "Parafinosokerit",
				},
				{
					name: "Massaj",
				},
				{
					name: "Lazer bilan davolash,",
				},

				{
					name: "Nur terapiyasi",
				},
				{
					name: "Elektrokonvulsiv terapiya",
				},
				{
					name: "Mashqlar terapiyasi",
				},
				{
					name: "Sog'liqni saqlash yo'li va maqsadli ovqatlanish",
				},
			],
        },
        {
			title: "Majmuada suv muolajalari mavjud:",
			xizmat: [
				{
					name: "Sharko dush",
				},
				{
					name: "Madaniy vannalar",
				},
				{
					name: "Dumaloq dush",
				},
				{
					name: "Eman hammomi",
				},
				{
					name: "Suv osti massaji",
				},
			],
		},
	];
	console.log(xizmatlar);
	return (
		<div>
			<img src={image} alt="oqtosh" />
			{content}
		</div>
	);
}
