import Link from "next/link";
import "./page.css";

export default function Home() {
	return (
		<div className="page">
			<div className="head">
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
			</div>
			<div className="focuswall">
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
			</div>
			<div className="focuswall_construction">
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
			</div>
			<div className="cubes"></div>
			<div className="cubes_construction"></div>
			<div className="winder"></div>
			<div className="winder_grid"></div>
			<div className="winder_base"></div>
			<div className="contact"></div>
		</div>
	);
}
