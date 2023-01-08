<script>
let id = `sector-${new Date().getTime()}`
let d = `M0.5,0.5 l0.5,0 A0.5,0.5 0 0,0 0.75,.066987298 z`

const position = (node) => {
	let items = node.children.length
	let deg = 360/items
	
	let angleInRadians = -deg * Math.PI / 180.0;
	let x = .5 + .5 * Math.cos(angleInRadians);
	let y = .5 + .5 * Math.sin(angleInRadians);

	d = `M0.5,0.5 l0.5,0 A0.5,0.5 0 0,0 ${x},${y} z`

	let contentRotate = 180
	
	if (items % 2 === 0) {
		contentRotate = deg * ((items-2) / 2) + (deg / 2)
	} else {
		contentRotate = deg * ((items - 1) / 2)
	}
	
	for (let i = 0; i < items; i++) {
		let item = node.children[i]

		item.style.transform = `rotate(${i*deg}deg)`
		item.style.clipPath = `url(#${id})`
		item.dataset.child = i+1
		item.firstChild.style.transform = `rotate(${contentRotate}deg)`
	}
}
</script>

<svg height="0" width="0">
  <defs>
    <clipPath clipPathUnits="objectBoundingBox" {id}>
      <path fill="none" stroke="#111" stroke-width="1" class="sector" {d}></path>
    </clipPath>
  </defs>
</svg>

<ul use:position>
	<slot />
</ul>

<style lang="stylus">
@import './_constants.styl'

ul
	list-style none
	margin 0
	padding 0
	height 100%
	width 100%
:global
	li.vertical
		.placement > *
			transform rotate(-90deg)

</style>