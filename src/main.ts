import anime from "animejs"

const animation = anime({
	targets: [],
	d: (el: SVGPathElement, i: number): string => "",
	easing: "easeInOutQuint",
	duration: 500,
	autoplay: false,
})
