class StarBrighting {
	constructor(starQuantity) {
		this.starQuantity = starQuantity
		this.imgSrc = '../img/star/star.png'
	}
	getAnimationDurationTime() {
		return 5 + Math.floor(Math.random() * 15)
	}
	getStarPositionY() {
		return 100 + Math.floor(Math.random() * 300)
	}
	getStarPositionX() {
		return 1 + Math.floor(Math.random() * 1400)
	}

	render() {
		for (let i = 0; i < this.starQuantity; i++) {
			const starContainer = document.querySelector('.stars')
			const starItem = document.createElement('img')
			starItem.className = 'stars__item'
			starItem.src = this.imgSrc
			starItem.style.left = `${this.getStarPositionX()}px`
			starItem.style.top = `${this.getStarPositionY()}px`
			starItem.style.animationName = 'star'
			starItem.style.animationTimingFunction = 'ease'
			starItem.style.animationDuration = `${this.getAnimationDurationTime()}s`
			starItem.style.animationIterationCount = 'Ifinity'
			starContainer.append(starItem)
			const timeBrigting = setInterval(() => {
				const deleteItem = document.querySelector('.stars__item')
				deleteItem.remove()
				clearInterval(timeBrigting)
			}, 3000);

		}
	}

}

window.onload = function () {
	setInterval(() => {
		const starBrighting = new StarBrighting(20)
		starBrighting.render()
	}, 3000);

}