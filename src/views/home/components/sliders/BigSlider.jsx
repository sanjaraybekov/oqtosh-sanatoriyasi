import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";

export default function Slider() {
	const comments = [
		{
			name: "Surayyo Usmanova",
			comment:
				"Отличное место для отдыха,чистый воздух,уютные номера,вкусная еда и качественное обслуживание. Кухня особенно вкусно.Спасибо всему обслуживающему персоналу!",
		},
		{
			name: "Diyor Siddikov",
			comment:
				"Очень красивое место, сделали кап ремонт очень красиво и аккуратно. Много деревьев ручей воды ветерок все что нужно. Кухня очень хорошо готовят от фруктов до десертов.",
		},
		{
			name: "Alimkhanoff",
			comment:
				"Воздух чистейший, цены относительно приемлимые, еда вкусная.",
		},
		{
			name: "Адолат Бердыбекова",
			comment:
				"Санаторий для лечение бронхиальной астмы и астматики, санаторий находиться между двух гор, озоновый воздух, чистый уютный, рекомендую посетить!",
		},
		{
			name: "Темур Азизов",
			comment: "Люблю эту зону отдыха, свежий воздух горы природа",
		},
		{
			name: "Аълохон Олимхонов",
			comment: "Очень красиво, удобно, воздух классный.",
		},
		{
			name: "Avazbek Dusmatov",
			comment:
				"Живу в Москве и хотел отправить маму в санатории. Но с вами связаться не получилось, от сюда звонил и не кто не отвечает, несколько раз попробовал но к сожалению нет ..!",
		},
		{
			name: "Aziz Toychiev /AdmiN/",
			comment: "Чистый воздух, красивая природа.",
		},
		{
			name: "Рахимжан Атаходжаев.",
			comment: "санатория классная,предлагаю 👍,питания отличное.",
		},
		{ name: "Бахритдинов Музробхон", comment: "Очень уютно и хорошо" },
		{ name: "Rustam Tursunkulov", comment: "Санатория октош просто класс" },
		{
			name: "NoD Israilov",
			comment:
				"Хорошее место, но очень дорого! Простым людям не по карману 😐",
		},
		{ name: "Murod Yuldashev", comment: "Очень классно!" },
		{
			name: "Фатима Таджиева",
			comment: "Отличный санаторий! Мне очень понравилось.",
		},
		{
			name: "Abdumannop S.",
			comment:
				"Всё хорошо. Только в столовой в блюдах очень мало мяса. Зав. столовой об этом говорили, но изменений к лучшему нет.",
		},
		{
			name: "Sadullo Nasirov",
			comment:
				"Супер санаторий для астматиков и людей с проблемами дыхательных путей! Также пост ковид 19",
		},
		{ name: "Владимир Л.", comment: "Красивая природа,свежий воздух" },
		{
			name: "Шухрат Ильясов",
			comment: "Красиво. Хорошее место. Мне понравилось.",
		},
		{
			name: "Комилжон Маулянов",
			comment: "Один из лучших учреждений отдыха.",
		},
		{ name: "Хасан Аликулов", comment: "Очень хорошо место для отдыха." },
		{
			name: "Sevara S.",
			comment:
				"В детстве отдыхала у меня была астма я там каждый год была",
		},
		{
			name: "Akram Tashpulatov",
			comment: "Чистый воздух и прекрасная кухня.",
		},
		{ name: "Dilshod Kamilov", comment: "хороший отдых" },
		{ name: "Евгений К.", comment: "Отличное место. Молодцы" },
		{
			name: "хамида фирузова",
			comment:
				"Все отлично.мнк не хватает каких-нибудь тренажеров и вайфая",
		},
		{ name: "М К", comment: "Чистый воздух" },
		{
			name: "Юсупходжаев Джасур",
			comment: "По сравнению с городом очень много снега",
		},
		{ name: "Рустам", comment: "Прекрасный отдых" },
	];

	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="slider">
						<h1>Mijozlar fikirlari</h1>
						<Splide
							options={{
								type: "loop",
                                drag: "free",
								gap: "20px",
                                perPage: 3,
                                pagination: false,
								autoplay: true,
                                pauseOnHover: true,
								autoScroll: {
									speed: 3,
								},
							}}
						>
							{comments.map((user) => (
								<SplideSlide>
									<div className="box">
										<h2 className="name">{user.name}</h2>
										<h3 className="comment">
											{user.comment}
										</h3>
									</div>
								</SplideSlide>
							))}
						</Splide>
					</div>
				</div>
			</div>
		</div>
	);
}
