class Sportsmen {
	constructor(currentSportsmenList) {
		this.currentSportsmenList = currentSportsmenList
		this.imgGreenSrc = '../img/arrows/arrow-right.png'
		this.imgRedSrc = '../img/arrows/arrow-left.png'
		this.choosenSportsmenList = []

	}
	createCurrentSportsmenList() {
		const container = document.querySelector('.list')
		const greenList = document.createElement('ul')
		greenList.className = 'list__all-sportsmen'
		container.append(greenList)
		for (const el of this.currentSportsmenList) {
			const li = document.createElement('li')
			li.className = 'list__sportsman'
			li.innerText = el
			const img = document.createElement('img')
			img.src = this.imgGreenSrc
			img.className = 'list__image'
			img.onclick = this.changeStatusToCompetition.bind(this, el)
			li.append(img)
			greenList.append(li)
		}
		return greenList
	}
	changeStatusToCompetition(el) {
		for (let i = 0; i < this.currentSportsmenList.length; i++) {
			if (el === this.currentSportsmenList[i]) {
				this.choosenSportsmenList.push(el)
				this.currentSportsmenList.splice(i, 1)
				console.log(this.currentSportsmenList);
			}

		}
		this.render()
	}

	createCompetitionSportsmenList() {
		const container = document.querySelector('.list')
		const redList = document.createElement('ul')
		redList.className = 'list__competition-sportsmen'
		container.append(redList)
		for (const el of this.choosenSportsmenList) {
			const li = document.createElement('li')
			li.className = 'list__sportsman'
			li.innerText = el
			const img = document.createElement('img')
			img.src = this.imgRedSrc
			img.className = 'list__image'
			img.onclick = this.changeStatusBack.bind(this, el)
			li.append(img)
			redList.append(li)
		}
		return redList
	}
	changeStatusBack(el) {
		for (let i = 0; i < this.choosenSportsmenList.length; i++) {
			if (el === this.choosenSportsmenList[i]) {
				this.currentSportsmenList.push(el)
				this.choosenSportsmenList.splice(i, 1)
				console.log(this.currentSportsmenList);
			}

		}
		this.render()
	}

	render() {
		const rseult = document.querySelector('.list')
		rseult.innerHTML = ''
		rseult.append(this.createCurrentSportsmenList())
		rseult.append(this.createCompetitionSportsmenList())
	}


}

const sportsmenList = [
	'John Depp',
	'Sara Wik',
	'Dan Miro',
	'Alan Woo',
	'Olga Sich',
	'Ivan Hal'
]

window.onload = function () {
	const sp1 = new Sportsmen(sportsmenList)
	sp1.render()
}