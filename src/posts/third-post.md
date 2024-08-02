---
title: Reactivity in Svelte
description: A short guide to achieving reactivity in Svelte.
date: '2024/07/02'
categories:
  - sveltekit
  - svelte
published: true
---

## Table of Contents

## Reactivity in Svelte

In Svelte, achieving reactive code is clear and simple.

First, begin by declaring a `let` variable, which _lets_ (see what I did there) Svelte know the value is going to change, and is therefore a reactive value.

For example:

```
<script>
  let count = 0;
</script>
```

_boom_, `count` is now reactive. All you have to do is assign `count` a new value, and Svelte will automatically update the DOM accordingly:

```
<script>
  let count = 0;

  const increment = () => count += 1;
</script>

<button on:click={increment}>
  {count}
</button>
```

### Reactive Declarations in Svelte

What if you have a value that you want to update every time `count` changes? Perhaps you want to achieve a result similiar to `useEffect` in React.

You can use the `$` label in Svelte to declare a reactive value that updates everytime one of its mentioned values changes, similar to `useEffect` and its dependency array.

Here's what it looks like:

```
<script>
  let count = 0;
  $: doubled = count * 2;
</script>
```

Now, every time `count` is updated, `doubled` will also update. Svelte is smart; it _knows_ the value of `doubled` depends on `count`, so everytime `count` updates it simply knows to reevaluate the value of `doubled`. This is _so_ much easier than worrying about React's `useEffect` hook and the quirks of its dependency array!
