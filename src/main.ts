import './style.css'
import anime from 'animejs'

const nameElement = document.querySelector('.logo') as HTMLElement
const nameElementPaths = Array.from(nameElement.querySelectorAll('path'))
const nameElementPathsToMorph = [
	'M16.032,10.5c-0.5,-2.5,-1.717,-3.75,-3.65,-3.75h-1.282c-1.034,0,-1.892,0.425,-2.575,1.275c-0.684,0.85,-1.025,1.775,-1.025,2.775c0,1.067,0.333,2.059,1,2.975c0.667,0.917,1.533,1.375,2.6,1.375h1.281c2.033,0,3.892,0.475,5.575,1.425c1.683,0.95,3.017,2.225,4,3.825c0.983,1.6,1.475,3.317,1.475,5.15c0,1.967,-0.467,3.825,-1.4,5.575c-0.934,1.75,-2.234,3.159,-3.9,4.225c-1.667,1.067,-3.583,1.6,-5.75,1.6h-1.281c-2.067,0,-3.917,-0.458,-5.55,-1.375c-1.633,-0.917,-2.942,-2.183,-3.925,-3.8c-0.983,-1.616,-1.525,-3.408,-1.625,-5.375c0,-0.367,0.183,-0.55,0.55,-0.55h6.3c0.333,0,0.533,0.184,0.6,0.55c0.033,1,0.366,1.883,1,2.65c0.633,0.767,1.516,1.15,2.65,1.15h1.281c1.1,0,2.008,-0.425,2.725,-1.275c0.716,-0.85,1.075,-1.808,1.075,-2.875c0,-1.1,-0.359,-2.075,-1.075,-2.925c-0.717,-0.85,-1.625,-1.275,-2.725,-1.275h-1.281c-1.967,0,-3.8,-0.491,-5.5,-1.475c-1.7,-0.982,-3.05,-2.291,-4.05,-3.925c-1,-1.633,-1.5,-3.383,-1.5,-5.25c0,-1.9,0.492,-3.716,1.475,-5.45c0.983,-1.732,2.325,-3.125,4.025,-4.175c1.7,-1.05,3.55,-1.575,5.55,-1.575h1.281c1.9,0,3.675,0.475,5.325,1.425c1.65,0.95,3,2.225,4.05,3.825c1.05,1.6,1.625,3.35,1.725,5.25c0,0.367,-0.184,0.55,-0.55,0.55h-6.3c-0.367,0,-0.567,-0.183,-0.599,-0.55z',
	'M50.832,36.55c0,0.267,-0.167,0.4,-0.5,0.4h-6.65c-0.333,0,-0.517,-0.167,-0.55,-0.5l-1.05,-4.95h-7.75l-1.05,4.95c-0.1,0.333,-0.3,0.5,-0.6,0.5h-6.6c-0.434,0,-0.6,-0.216,-0.5,-0.65l8.25,-35.8c0.033,-0.333,0.233,-0.5,0.6,-0.5h7.55c0.333,0,0.517,0.167,0.55,0.5l8.25,35.8l0.05,0.25zm-10.3,-12.15l-2.35,-10.75l-2.3,10.75h4.65z',
	'M116,0.55v35.85c0,0.367,-0.184,0.55,-0.55,0.55h-6.3c-0.367,0,-0.55,-0.183,-0.55,-0.55v-26.6l-19.7,26.8c-0.155,0.203,-0.334,0.35,-0.7,0.35h-6.15c-0.333,0,-0.485,-0.121,-0.649,-0.35l-19.701,-26.45v26.25c0,0.367,-0.184,0.55,-0.551,0.55h-6.3c-0.367,0,-0.55,-0.183,-0.55,-0.55v-35.85c0.001,-0.366,0.183,-0.55,0.551,-0.55h9.7c0.267,0,0.424,0.133,0.6,0.4l20.05,28.45l20.35,-28.45c0.175,-0.263,0.301,-0.4,0.601,-0.4h9.3c0.365,0,0.549,0.184,0.549,0.55z',
]

let isPointerDown = false

const animation = anime({
	targets: nameElementPaths,
	d: (el: SVGPathElement, i: number) => nameElementPathsToMorph[i],
	easing: 'easeInOutQuint',
	duration: 500,
	autoplay: false,
})

const toggleAnimation = () => {
	if (animation.began) {
		animation.reverse()
	}

	if (animation.paused) {
		animation.play()
	}
}

const onPointerEvent = (event: Event) => {
	const { type } = event

	if (type === 'touchstart') {
		event.preventDefault()
	}

	if (type === 'touchstart' || type === 'mousedown') {
		isPointerDown = true
		toggleAnimation()

		return
	}

	if (type === 'touchend' || type === 'mouseup') {
		if (isPointerDown) {
			isPointerDown = false
			toggleAnimation()
		}

		return
	}

	toggleAnimation()
}

const elementEvents = ['touchstart', 'mouseenter', 'mouseleave', 'mousedown']
const windowEvents = ['touchend', 'mouseup']

elementEvents.forEach((event) => nameElement.addEventListener(event, onPointerEvent, false))
windowEvents.forEach((event) => window.addEventListener(event, onPointerEvent, false))
