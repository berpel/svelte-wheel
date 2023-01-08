<script>
import Fa from 'svelte-fa'
import { faStar, faUser, faPhone } from '@fortawesome/free-solid-svg-icons'

import SvelteWheel from '$lib/SvelteWheel.svelte'
import SvelteWheelMenu from '$lib/SvelteWheelMenu.svelte'
import SvelteWheelMenuItem from '$lib/SvelteWheelMenuItem.svelte'

const action_Item = (item) => {
	alert(`${item} clicked`)
}

const example = ['red','orange','yellow','green','blue','indigo','violet', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13]
//const example = [1, 2]
const example2 = [faStar, faUser, faPhone]
let selectedIcon = null
const action_Example1 = (icon) => {
	selectedIcon = icon
}

const colors = ['red','orange','yellow','green','blue','indigo','violet']
let bgColor = ''
const action_Color = (color) => {
	console.log(color)
	bgColor = color
}



</script>

<SvelteWheel event="contextmenu">
	<img src="https://images.saymedia-content.com/.image/t_share/MTc0NDYxMDU4ODUyMTM2Mjk2/best-amass-cards-mtg.jpg" />
	<!--span slot="close">x</span-->
	<SvelteWheelMenu slot="menu">
		{#each example as item}
			<SvelteWheelMenuItem on:select={() => action_Item(item)}>
				{item}
			</SvelteWheelMenuItem>
		{/each}
	</SvelteWheelMenu>
</SvelteWheel>


<span class="custom-colors">
	<SvelteWheel>
		<div>
			My favorite icon is
			<span>
				<Fa icon={selectedIcon} size="xl" />
			</span>
		</div>
		<SvelteWheelMenu slot="menu">
			{#each example2 as item}
				<SvelteWheelMenuItem on:select={() => action_Example1(item)} orientation="vertical">
					<Fa icon={item} fw />
				</SvelteWheelMenuItem>
			{/each}
		</SvelteWheelMenu>
	</SvelteWheel>
</span>

<span class="custom-colors-1">
	<SvelteWheel>
		<div class="square" style="background-color: {bgColor};">
			
		</div>
		<SvelteWheelMenu slot="menu">
			{#each colors as color}
				<SvelteWheelMenuItem on:select={() => action_Color(color)}></SvelteWheelMenuItem>
			{/each}
		</SvelteWheelMenu>
	</SvelteWheel>
</span>

<style lang="stylus">
.custom-colors span
	border-bottom 1px dotted #000
	display inline-block
	padding 4px 8px
	text-align center
	width 30px
:global
	body
		background-color #999

	:root .custom-colors .svelte-wheel
		--svelte-wheel-size: 100px

		--svelte-wheel-color-odd rgba(207, 181, 59, .9)
		--svelte-wheel-color-even rgba(207, 181, 59, .8)
		--svelte-wheel-color-odd-hover rgb(207, 181, 59)
		--svelte-wheel-color-even-hover rgb(207, 181, 59)
	
		--svelte-wheel-close-size: 25px
	:root .custom-colors-1 .svelte-wheel
		--svelte-wheel-color-1 rgba(255,0,0,.8)
		--svelte-wheel-color-1-hover rgba(255,0,0,1)
		--svelte-wheel-color-2 rgba(255,165,0,.8)
		--svelte-wheel-color-2-hover rgba(255,165,0,1)
		--svelte-wheel-color-3 rgba(255,255,0,.8)
		--svelte-wheel-color-3-hover rgba(255,255,0,1)
		--svelte-wheel-color-4 rgba(0,128,0,.8)
		--svelte-wheel-color-4-hover rgba(0,128,0,1)
		--svelte-wheel-color-5 rgba(0,0,255,.8)
		--svelte-wheel-color-5-hover rgba(0,0,255,1)
		--svelte-wheel-color-6 rgba(75,0,130,.8)
		--svelte-wheel-color-6-hover rgba(75,0,130,1)
		--svelte-wheel-color-7 rgba(238,130,238,.8)
		--svelte-wheel-color-7-hover rgba(238,130,238, 1)
.square
	border 2px solid #ddd
	border-radius 14px
	height 300px
	width 300px
img
	border-radius 14px
	width 300px
</style>