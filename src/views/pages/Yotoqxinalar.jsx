import React from "react";

export default function Yotoqxonalar() {
	const image = "/assets/images/oqtosh.jpg";
	const content =
		"Sanatoriyaning yotoqxonalari shinam va ozoda bo’lib, barcha qulayliklarga ega. Bir va ikki kishilik yotoqxonalari ham mavjud. “Oq-Tosh” zonasi hududida sizning xizmatingizdagi maroqli hordiq olishingiz uchun kottejlar, mehmonxona, oshxonasi, konferens-zal, saunalar, sport zali, bilyard xonasi, futbol maydoni, basketbol va voleybol maydonchalari mavjud bo’lib, ular doimo davolanuvchilar xizmatida bo’ladi. Kottejlar barcha qulaylik bilan jihozlangan bo’lib, idish-tovoq, sun’iy yo’ldoshli televizor, dush, issiq va sovuq suv bilan ta’minlangan oshxonasi ham mavjud. Talablarga binoan ekskusiyalar ham uyushtiriladi. “OQ TOSH” sanatoriyasi yo’llanma narxiga kuniga 3 mahal ovqatlanish kiradi. O’z ovqatini o’zi pishirishni xohlaydigan davoluvchilar uchun barcha kottejlarda zarur idishlar bilan ta’minlangan oshxonasi mavjud. Har bir kottej oldida ochiq havoda dam olish uchun topchanda yotadigan joy mavjud. Sauna, basseyn, sport zali har kuni ishlaydi. Bu yerda, shaharning shovqinidan uzoqda, ajoyib tog’lar fonida siz o’zingizni chinakam qulay his qilishingiz mumkin.";

	return (
		<div>
			<img src={image} alt="oqtosh" />
			{content}
		</div>
	);
}
