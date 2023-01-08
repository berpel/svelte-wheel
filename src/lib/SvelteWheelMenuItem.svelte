<script>
import { createEventDispatcher } from 'svelte'
const dispatch = createEventDispatcher()

export let orientation = 'horizontal'

const dispatchClick = () => {
	dispatch('select')
}

</script>
<li class:vertical={orientation === 'vertical'}>
	<a href="#" on:click={dispatchClick}>
		<span class="placement">
			<slot />
		</span>
	</a>
</li>

<style lang="stylus">
@import './_constants.styl'
li
	display block
	height 100%
	top 0
	left 0
	overflow hidden
	position absolute
	width: 100%
	clip-path url(#sector)
	
	a
		align-items center
		background-color var(--svelte-wheel-color)
		color var(--svelte-wheel-text-color)
		display grid
		height 100%
		text-decoration none
		transition 200ms
		width 100%
		&:hover
			background-color var(--svelte-wheel-color-hover)
				
	.placement
		padding-left 10px
		white-space nowrap
		font-size 16px

			
	for num in (1..50)
		if (num % 2 == 0)
			&:nth-child({num}) a
				background-color unquote('var(--svelte-wheel-color-' + num + ', var(--svelte-wheel-color-even, var(--svelte-wheel-color)))')
				&:hover
					background-color unquote('var(--svelte-wheel-color-' + num + '-hover, var(--svelte-wheel-color-even-hover, var(--svelte-wheel-color-hover)))')
		else
			&:nth-child({num}) a
				background-color unquote('var(--svelte-wheel-color-' + num + ', var(--svelte-wheel-color-odd, var(--svelte-wheel-color)))')
				&:hover
					background-color unquote('var(--svelte-wheel-color-' + num + '-hover, var(--svelte-wheel-color-odd-hover, var(--svelte-wheel-color-hover)))')
</style>