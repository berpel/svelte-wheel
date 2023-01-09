<script>
import { scale } from 'svelte/transition';
import { bounceInOut } from 'svelte/easing'

export let event = 'click'
let opened = false
let x = 0
let y = 0

const toggleOpen = (e) => {
	x = e.clientX
	y = e.clientY
	e.preventDefault()
	opened = !opened
}

const closeWheel = (e) => {
	if (e) e.cancelBubble = true
	opened = false
}

const centerOnOpen = (node) => {
	node.style.left = x - (node.clientWidth / 2) + 'px'
	node.style.top = y - (node.clientHeight / 2) + 'px'
}

const select = () => {
	closeWheel()
}

const clickOutside = (node) => {
  
	const handleClick = event => {
		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			node.dispatchEvent(
				new CustomEvent('click_outside', node)
			)
		}
	}

	document.addEventListener('click', handleClick, true);
  
	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	}
}
</script>

<div class="svelte-wheel"
	use:clickOutside on:click_outside={closeWheel}
	on:click={event === 'click' ? toggleOpen : select}
	on:contextmenu={event === 'contextmenu' ? toggleOpen : null}>
	<slot />
	{#if opened}
		<div class="menu" transition:scale="{{duration: 300, delay: 50, opacity: 0.5, start: .01, easing: bounceInOut}}" use:centerOnOpen>
			<slot name="menu" />
			<button class="close" type="button" on:click={closeWheel}>
				<slot name="close">
					<span>&times;</span>
				</slot>
			</button>
		</div>
	{/if}
</div>

<style lang="stylus">
@import './_constants.styl'

.svelte-wheel
	display inline-block
	position relative
	
	.menu
		box-shadow 0 0 5px 2px rgba(0,0,0,.5)
		border-radius 100%
		display grid
		place-content center
		position fixed
		top 0
		left 0
		//display inline-block
		height var(--svelte-wheel-size)
		width var(--svelte-wheel-size)
		user-select none
		z-index 1000
	.close
		appearance auto
		background-color var(--svelte-wheel-close-color)
		border none
		border-radius 100%
		color var(--svelte-wheel-text-color)
		cursor pointer
		display grid
		place-content center
		position relative
		height var(--svelte-wheel-close-size)
		transition 200ms
		width var(--svelte-wheel-close-size)
		z-index 2
		user-select none
		&:hover
			transform scale(1.1)
</style>