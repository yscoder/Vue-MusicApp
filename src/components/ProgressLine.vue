<template>
    <div class="progress-line" :style="{ width: total + '%' }">
        <div class="progress-line primary" :style="{ width: running + '%' }"></div>
    </div>
</template>
<script>
export default {
    props: {
        running: {
            type: Number,
            default: 0
        },
        total: {
            type: Number,
            default: 0
        }
    }
}
</script>
