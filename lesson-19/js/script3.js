class LetItSnow {
	constructor(snowflakeQuantity) {
		this.snowflakeQuantity = snowflakeQuantity
		this.imgSrc = '../img/snowflake/snowflake.png'
	}
	getAnimationDurationTime() {
		return 5 + Math.floor(Math.random() * 15)
	}
	getSnowflakePosition() {
		return 1 + Math.floor(Math.random() * 1400)
	}
	render() {
		for (let i = 0; i < this.snowflakeQuantity; i++) {
			const snowContainer = document.querySelector('.let-it-snow')
			const snowflake = document.createElement('img')
			snowflake.className = 'let-it-snow__snowflake'
			snowflake.src = this.imgSrc
			snowflake.style.left = `${this.getSnowflakePosition()}px`
			snowflake.style.animationName = 'snowFlake'
			snowflake.style.animationTimingFunction = 'ease'
			snowflake.style.animationDuration = `${this.getAnimationDurationTime()}s`
			snowflake.style.animationIterationCount = 'infinite'
			snowContainer.append(snowflake)
		}
	}
}

window.onload = function () {
	const letItSnow = new LetItSnow(50)
	letItSnow.render()
}