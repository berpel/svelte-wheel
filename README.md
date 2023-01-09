# svelte-wheel

A Svelte component for a wheel based menu.

## Demo

Coming soon...

## Installation

```
npm install svelte-wheel --save-dev
```

## Basic usage

```
<script>
  import { SvelteWheel, SvelteWheelMenu, SvelteWheelMenuItem } from 'svelte-wheel'

  const items = [1,2,3,4,5]
  let selected = null
  const select = (item) => {
    selected = item
  }
</script>

<SvelteWheel>
  <span>Click to select a number: {selected}</span>
  <SvelteWheelMenu slot="menu">
    {#each items as item}
      <SvelteWheelMenuItem on:select>{item}</SvelteWheelMenuItem>
    {/each}
  </SvelteWheelMenu>
</SvelteWheel>
```

## Props

### SvelteWheel

| Prop               | Type            | Required | Values
| :----------------- | :-------------- | :------- | :----------------------------------
| `event`            | event           |          | `click` \| `contextmenu`

### SvelteWheelMenu

> Must have `slot="menu"` attribute

> May contain an element with `slot="close"` for a custom close icon

| Prop               | Type            | Required | Values
| :----------------- | :-------------- | :------- | :----------------------------------

### SvelteWheelMenuItem

| Prop               | Type            | Required | Values
| :----------------- | :-------------- | :------- | :----------------------------------
| `orientation`      | string          |          | `horizontal` \| `vertical`

## Styling

> You may style your Svelte Wheels using css variables. You may also use `--svelte-wheel-color-(1-50)` and `--svelte-wheel-color-hover-(1-50)`. Priority given to css variables are `--svelte-wheel-color-n` -> `--svelte-wheel-color-odd|even` -> `--svelte-wheel-color`.

Defaults

```
--svelte-wheel-size: 200px

--svelte-wheel-text-color: rgba(255,255,255,.9)

--svelte-wheel-color: rgba(92, 0, 184, .5)
--svelte-wheel-color-hover: rgb(58, 0, 116)
--svelte-wheel-color-odd: rgb(109, 0, 218)
--svelte-wheel-color-odd-hover: rgb(58, 0, 116)
--svelte-wheel-color-even: rgb(92, 0, 184)
--svelte-wheel-color-even-hover: rgb(58, 0, 116)

--svelte-wheel-close-size: 50px
--svelte-wheel-close-color: rgb(135,14,255)
```