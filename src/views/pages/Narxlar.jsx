import React from "react";

export default function Narxlar() {
	const image = "/assets/images/oqtosh.jpg";
	const narx_list = [
		{
			xizmat: "Mehmonxona xonasini kuniga 3 mahal ovqat bilan ta'minlash. Kuniga 1 to'shak / yotoq",
			narx: "242 000 so'm",
			eslatma: "Ikki kishilik xonalar",
		},
		{
			xizmat: "Kuniga 3 mahal ovqat bilan yozgi uy bilan ta'minlash. Kuniga 1 to'shak / yotoq",
			narx: "220 000 so'm",
			eslatma: "Kottejlar 4,6,8 o'rinli mahalliy",
		},
		{
			xizmat: "Kuniga 3 marta ovqatlanish bilan yaxshilangan tartibli yozgi uy bilan ta'minlash. Kuniga 1 to'shak / yotoq",
			narx: "231 000 so'm",
			eslatma: "Kottejlar 6 o'rinli mahalliy",
		},
		{
			xizmat: "VIP\" kottejni kuniga 3 mahal ovqat bilan ta'minlash. Kuniga 1 to'shak / yotoq",
			narx: "326 000 so'm",
			eslatma: "Kottejlar 4 o'rinli",
		},
		{
			xizmat: "Konferentsiya xonasi bilan ta'minlash. 1 kun",
			narx: "2 050 000 so'm",
			eslatma: "80 o'rinli zal",
		},
		{
			xizmat: "Sportzal. 1 soat",
			narx: "10 000 so'm",
			eslatma: undefined,
		},
		{
			xizmat: "Sauna. 2 soat (eng kamida)",
			narx: "100 000 so'm",
			eslatma: "Bir vaqtning o'zida 6 kishigacha",
		},
		{
			xizmat: "Bilyard stoli. 1 soat",
			narx: "10 000 so'm",
			eslatma: undefined,
		},
		{
			xizmat: "Stol tennisi. 1 soat",
			narx: "8 000 so'm",
			eslatma: undefined,
		},
		{
			xizmat: "Karaoke xizmatlarini ko'rsatish. 1 soat",
			narx: "20 000 so'm",
			eslatma: "Bir vaqtning o'zida 6 kishigacha",
		},
		{
			xizmat: "SONY PlayStation o'yin konsoli. 1 soat",
			narx: "8 000 so'm",
			eslatma: undefined,
		},
		{
			xizmat: "Choyxona xizmatlaridan foydalanish. 1 yotoq/kun",
			narx: "550 000 so'm",
			eslatma: "Xizmat ko'rsatish narxlari bilan",
		},
	];
	const izoh =
		"Izoh: Axborot va kommunikatsiyalarni rivojlantirish vazirligi tizimiga kiruvchi korxonalar xodimlarining hordiq chiqarishini tashkil etish maqsadida preyskurant ishlab chiqilgan. Agar elektr energiyasi, gaz va boshqa moddiy xarajatlar ko'tarilsa, narxlar qayta ko'rib chiqilishi mumkin. Bir yil muddatga shartnoma tuzilib, shu yil 31-dekabrgacha 100% oldindan to‘lov amalga oshirilgan taqdirda, shu yil uchun preyskurant qo‘llaniladi.";
	console.log(narx_list);
	return (
		<div>
			<img src={image} alt="oqtosh" />
			{/* {content} */}
		</div>
	);
}
