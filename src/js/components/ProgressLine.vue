<template>
    <div class="progress-line primary" :style="{ width: running + '%' }"></div>
    <div class="progress-line" :style="{ width: total + '%' }"></div>
</template>
<script>
module.exports = {
    props: {
        running: Number,
        total: Number
    }
};
</script>
