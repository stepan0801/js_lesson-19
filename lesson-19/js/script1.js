class LinkCard {
	constructor({ label, imgSrc, title, link, price }) {
		this.label = label
		this.imgSrc = imgSrc
		this.title = title
		this.price = price
		this.link = link
	}

	render(container) {
		const cardItem = document.createElement('div')
		cardItem.classList.add('cards__item')
		cardItem.classList.add('card')

		const labelCard = document.createElement('div')
		labelCard.className = 'card__label'
		labelCard.innerText = this.label
		cardItem.append(labelCard)

		const imageContainer = document.createElement('div')
		imageContainer.className = 'card__image-container'
		cardItem.append(imageContainer)
		const imageCard = document.createElement('img')
		imageCard.className = 'card__image'
		imageCard.src = this.imgSrc
		imageContainer.append(imageCard)

		const titleCard = document.createElement('div')
		titleCard.className = 'card__title'
		cardItem.append(titleCard)
		const linkCard = document.createElement('a')
		linkCard.className = 'card__link'
		linkCard.href = this.link
		linkCard.innerText = this.title
		titleCard.append(linkCard)

		const priceCard = document.createElement('div')
		priceCard.className = 'card__price'
		priceCard.innerText = this.price
		cardItem.append(priceCard)


		const targetContainer = document.querySelector(container)
		targetContainer.append(cardItem)
	}
}

const noteBooksSet = [
	{
		label: 'Топ продаж',
		imgSrc: '../img/notebook/1.jpg',
		title: 'Ноутбук Acer Aspire 7 A715 - 42G- R3EZ',
		price: '29 999₴',
		link: 'https://rozetka.com.ua/ua/acer_nh_qbfeu_00c/p288376303/'
	},
	{
		label: 'Топ продаж',
		imgSrc: '../img/notebook/2.jpg',
		title: 'Ноутбук Lenovo IdeaPad L3 15ITL6(82HL00HCRA)',
		price: '16 999₴',
		link: 'https://rozetka.com.ua/ua/lenovo-82hl00hcra/p352335126/'
	},
	{
		label: 'Акція',
		imgSrc: '../img/notebook/3.jpg',
		title: 'Ноутбук ASUS TUF Gaming F15 FX506LHB-',
		price: '29 999₴',
		link: 'https://rozetka.com.ua/ua/asus-90nr03u2-m008e0/p353689830/'
	},
	{
		label: 'Топ продаж',
		imgSrc: '../img/notebook/4.jpg',
		title: 'Ноутбук ASUS Laptop X515EA- BQ206',
		price: '19 999₴',
		link: 'https://rozetka.com.ua/ua/asus-90nb0ty1-m00vf0/p346597995/'
	}
]

window.onload = function () {
	for (const linkData of noteBooksSet) {
		const cards = new LinkCard(linkData)
		cards.render('.cards')
	}
}