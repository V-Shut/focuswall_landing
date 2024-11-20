"use client";
import Link from "next/link";
import "./page.css";
import { useState } from "react";

const sliderData = [
	{ imgName: "flag_1", name: "Фасадна універсальна" },
	{ imgName: "flag_2", name: "Плоска квадратна" },
	{ imgName: "flag_3", name: "Хрестоподібна з підшипником" },
	{ imgName: "flag_4", name: "Гвинтова (Бур)" },
	{ imgName: "flag_5", name: "Хрестоподібна (Люкс)" },
];


export default function Home() {
	const [message, setMessage] = useState("Причина звернення");

	const handleChange = (e) => {
		setMessage(e.target.value);
	};

	return (
		<div className="page">
			<section className="head">
				<img
					src="img/focuswall.png"
					alt="head background"
					className="background"
				/>
				<div className="header">
					<img
						src="img/logo.png"
						alt="logo"
						className="logo"
					/>
					<nav>
						<ul className="nav_list">
							<li className="link">
								<Link href="/">Focuswall</Link>
							</li>
							<li className="link">
								<Link href="/cube">Cube</Link>
							</li>
							<li className="link">
								<Link href="/flag">Flag</Link>
							</li>
							<li className="link">
								<Link href="/contacts">Contacts</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className="make_order">
					<div className="text">
						<p>Текстильні лайтбокси </p>
						<p>Рекламні куби</p>
						<p>Віндери, прапори</p>
					</div>
					<button className="order">Замовляй прямо зараз!</button>
				</div>
			</section>
			<section className="focuswall">
				<div className="steps">
					<p>01.Фокусволи</p>
					<p>02.Куби</p>
					<p>03.Віндери</p>
					<p>04.Підтримка</p>
				</div>

				<div className="container">
					<div className="description">
						<p>
							<span className="highlight">Focus Wall </span>
							(текстильний лайтбокс) - це втілення передових технологій та
							комплекс рішень для ефективної візуальної комунікації та
							оформлення простору. Вироби ідеально поєднують функціональність із
							сучасним дизайном, що робить їх придатними для широкого спектру
							застосувань, від рекламних до декоративних цілей.
						</p>
						<button>Замовити</button>
					</div>
					<img
						src="img/on_the_wall.png"
						alt="on the wall"
					/>
				</div>
				<div></div>
			</section>
			<section className="focuswall_construction">
				<img
					src="img/construction.png"
					alt="constuction"
				/>
				<h1>Конструкція Focus Wall</h1>
				<div className="container">
					<div className="element">
						<h1>1</h1>
						<h2>Алюмінієва рама</h2>
						<p>
							Рами виготовлені з високоякісного легкого алюмінію,  є
							довговічними, а також й естетично привабливі. Легкість рами сприяє
							простоті монтажу та транспортування, а також дозволяє легко
							оновлювати текстильні постери, що ідеально підходить для частих
							маркетингових кампаній.
						</p>
					</div>
					<div className="element">
						<h1>2</h1>
						<h2>Текстильний постер</h2>
						<p>
							Виготовлені з екологічно чистих матеріалів, тканинні постери
							характеризуються високою якістю зображення та відсутністю
							неприємних запахів, що робить їх ідеальними для внутрішнього
							використання. Зображення на текстилі виглядає яскраво, природно та
							реалістично.
						</p>
					</div>
					<div className="element">
						<h1>3</h1>
						<h2>LED-освітлення</h2>
						<p>
							Новітні технології світлодіодного освітлення забезпечують
							рівномірне світло, що підкреслює якість зображення і зменшує
							енергоспоживання.
						</p>
					</div>
				</div>
				<button>Детальніше</button>
			</section>
			<section className="cubes">
				<h1>02.Kуби</h1>
				<div className="container">
					<div className="description">
						<p>
							<span className="highlight">Куби </span>- це є стильний і
							функціональний акцент для будь-якого заходу, який привертає увагу
							та запам’ятовується. Сидіння-куби легко адаптується до будь-якого
							простору і миттєво привертає увагу. Запорукою універсальності та
							зручності рекламного пуфа - є легкість та мобільність. Максимальна
							універсальність і зручність завдяки легкості та мобільності
							рекламного пуфа. Пуфи Cube створені для довготривалого
							використання з можливістю легкої заміни чохла. Використовуйте всю
							поверхню сидінь та втілюйте в життя свої креативні ідеї.
						</p>
						<button>Замовити</button>
					</div>
					<img
						src="img/cube.png"
						alt="on the wall"
					/>
				</div>
			</section>
			<section className="cube_info">
				<img
					src="img/Монтажна область 1 1.svg"
					alt="assembly area"
				/>

				<div className="cube_info_content">
					<h2 className="cube_info_title">Конструкція Куба</h2>
					<ul className="cube_info_list">
						<li className="cube_info_item">
							<h3 className="cube_info_item_num">1</h3>
							<h5 className="cube_info_item_title">Наповнення</h5>
							<p className="cube_info_item_desc">
								Брендовані м’які куби виготовлені з щільного поролону. Це є
								безпечним для дітей та дозволяє створювати велике рекламне поле
								за допомогою виставлення кубів один на одного.
							</p>
						</li>
						<hr className="cube_info_line" />
						<li className="cube_info_item">
							<h3 className="cube_info_item_num">2</h3>
							<h5 className="cube_info_item_title">Зовнішні чохли</h5>
							<p className="cube_info_item_desc">
								Виготовлені з тканини Оксфорд, яка відштовхує воду та не вимагає
								особливого догляду.
							</p>
						</li>
						<hr className="cube_info_line" />
						<li className="cube_info_item">
							<h3 className="cube_info_item_num">3</h3>
							<h5 className="cube_info_item_title">Брендування</h5>
							<p className="cube_info_item_desc">
								На рекламному кубі можна розміщувати будь-яке повноколірне
								зображення на усіх 6-ти гранях, що надає максимальної видимості
								та ефективності реклами для вашої компанії чи продукту.
							</p>
						</li>
					</ul>
					<button className="cube_info_button">Детальніше</button>
				</div>
			</section>

			<section className="winder">
				<h2 className="winder_title">03.Віндер</h2>

				<div className="winder_content">
					<div className="winder_content_right">
						<p className="winder_content_right_desc">
							<span className="winder_content_right_span">Віндери</span>
							<span className="winder_content_right_line">-</span> зручний
							спосіб реклами для привернення уваги ваших клієнтів до бренду та
							подій. Це мобільні рекламні конструкції у вигляді прапорів на
							стійкому флагштоку. Вони відрізняються легкістю та зручністю у
							використанні.
						</p>
						<button className="winder_content_right_button">Замовити</button>
					</div>
					<div className="winder_content_left">
						<img
							src="img/Group 20.svg"
							alt="winders"
						/>
					</div>
				</div>
			</section>

			<section className="winder_info">
				<div className="winder_info_content">
					<img
						src="img/Монтажна область 1 2.svg"
						alt="assembly area"
					/>

					<div className="winder_info_sizes">
						<h4 className="winder_info_title">Розмірна сітка віндера:</h4>
						<div className="winder_info_more">
							<ul className="winder_info_list_sizes">
								<li className="winder_info_item_size">XS</li>
								<li className="winder_info_item_size">S</li>
								<li className="winder_info_item_size">M</li>
								<li className="winder_info_item_size">L</li>
							</ul>
							<ul className="winder_info_list_desc">
								<li className="winder_info_item_desc">400x2000 мм</li>
								<li className="winder_info_item_desc">650x2200 мм</li>
								<li className="winder_info_item_desc">700x3400 мм</li>
								<li className="winder_info_item_desc">820x4700 мм</li>
							</ul>
						</div>
					</div>
				</div>
      </section>
      
      <section className="winder_base">
				<h1>Основа для конструкції</h1>
				<div className="container">
					<div className="slider"></div>
					<div className="buttons">
						<div className="button" />
						<div className="button" />
					</div>
				</div>
			</section>

			<section className="contact_us">
				<div className="contact_us_content">
					<div className="contact_us_left">
						<h2 className="contact_us_left_title">
							Зв’яжіться з нашим <br /> менеджером
						</h2>
						<p className="contact_us_left_desc">
							Вас зацікавили пропозиції або виникли питання? <br />
							Заповніть форму зворотного зв’язку і наші менеджери <br />
							якнайшвидше зв’яжуться з вами
						</p>
					</div>
					<div className="contact_us_right">
						<form className="contact_us_form">
							<label className="contact_us_form_label">
								Контактні дані
								<input
									className="contact_us_form_input"
									type="text"
									placeholder="ПІБ"
								/>
							</label>
							<label className="contact_us_form_label">
								Номер телефону
								<input
									className="contact_us_form_input"
									type="text"
									placeholder="+380"
								/>
							</label>
							<label className="contact_us_form_label">
								Коментарі
								<label className="contact_us_form_label">
									Коментарі
									<textarea
										className="contact_us_form_textarea"
										name="message"
										value={message}
										onChange={handleChange}
									/>
								</label>
							</label>
							<button className="contact_us_button">Зв’язатись</button>
						</form>
					</div>
				</div>
			</section>

			<footer className="footer">
				<div className="footer_container">
					<img
						className="footer_logo"
						src="img/logo.svg"
						alt="logo"
					/>
					<ul className="footer_nav">
						<li className="footer_item_nav">Focuswall</li>
						<li className="footer_item_nav">Cube</li>
						<li className="footer_item_nav">Flag</li>
					</ul>
					<ul className="footer_contact">
						<li className="footer_item_contact">
							<a
								className="footer_item_contact_link"
								href="mailto:order@toptrend.com.ua">
								order@toptrend.com.ua
							</a>
						</li>
						<li className="footer_item_contact">
							<a
								className="footer_item_contact_link"
								href="tel:+380 (67) 314-55-15">
								+ 380 (67) 314-55-15
							</a>
						</li>
						<li className="footer_item_contact">
							<a
								className="footer_item_contact_link"
								href="tel:+380 (67) 314-55-00">
								+ 380 (67) 314-55-00
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
}
