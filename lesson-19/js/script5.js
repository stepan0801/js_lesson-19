class Bayraktar {
	constructor(tankQuantity) {
		this.tankQuantity = tankQuantity
		this.ImgTankSrc = '../img/tank/tank.png'
		this.ImgBoomSrc = '../img/tank/boom.png'
	}

	getAnimationDurationTime() {
		return 3 + Math.floor(Math.random() * 5)
	}
	getTankPosition() {
		return 1 + Math.floor(Math.random() * 1400)
	}


	render() {
		for (let i = 0; i < this.tankQuantity; i++) {
			const container = document.querySelector('.bayraktar')
			const tank = document.createElement('img')
			tank.className = 'bayraktar__tank'
			tank.src = this.ImgTankSrc
			tank.style.left = `${this.getTankPosition()}px`
			tank.style.animationName = 'tank'
			tank.style.animationTimingFunction = 'ease'
			tank.style.animationDuration = `${this.getAnimationDurationTime()}s`
			tank.style.animationIterationCount = 'infinite'
			tank.onclick = () => {
				tank.src = this.ImgBoomSrc
				tank.classList.add('bayraktar__boom')
				setTimeout(() => {
					tank.style.display = 'none'
				}, 500);
			}
			container.append(tank)
			tank.append(this.boom)
		}

	}
}

window.onload = function () {
	const bayraktar = new Bayraktar(10)
	bayraktar.render()
	// setInterval(() => {
	// const bayraktar = new Bayraktar(10)
	// bayraktar.render()	
	// }, 5000);

}