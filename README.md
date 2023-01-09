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

> Must have `slot="menu"`

| Prop               | Type            | Required | Values
| :----------------- | :-------------- | :------- | :----------------------------------

### SvelteWheelMenuItem

| Prop               | Type            | Required | Values
| :----------------- | :-------------- | :------- | :----------------------------------
| `orientation`      | string          |          | `horizontal` \| `vertical`

## Styling

Coming soon...
