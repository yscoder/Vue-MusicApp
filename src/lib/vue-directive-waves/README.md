# vue-directive-waves
Use the wave effect in Vue. Based on [Waves](https://github.com/fians/Waves).

## Install

```
npm install vue-directive-waves --save
```

## Example

Add directive in the template.

```
<template>
    <button v-waves></button>
</template>
```

References in the script.

```
var Vue = require('vue');
var Waves = require('vue-directive-waves');

Vue.use(Waves);
```

## Modifiers

Default modifiers is `v-waves.block`.

```
<button v-waves.button></button>
<button v-waves.button.float></button>
<button v-waves.button.light></button>

<span v-waves.circle></span>
<span v-waves.circle.float></span>
<span v-waves.circle.light></span>

<div v-waves.block></div>
<div v-waves.block.float></div>
```

## Config

Same as [Waves](http://fian.my.id/Waves/#api).

```
Vue.use(Waves, {
    duration: 500,
    delay: 200
});
```


## License

MIT
