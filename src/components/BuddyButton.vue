<template>
    <button @click.prevent="action" :class="{ 'no-margin': noMargin }">{{ text }}</button>
</template>

<script>
    export default {
        name: 'BuddyButton',
        props: {
            action: {
                type: Function,
                required: true,
            },
            text: {
                type: String,
                required: true,
            },
            noMargin: Boolean,
        },
    };
</script>

<style lang="scss" scoped>
    button {
        background: url("../assets/btn_idle.png") no-repeat;
        background-size: 100% 100%;
        line-height: 0;
        outline: 0 !important;
        border: none;
        color: #FFFFFF;
        font-size: 50px;
        cursor: pointer;
        min-width: 50px;
        height: 50px;
        margin-left: 10px;

        &.no-margin {
            margin: 0 !important;
        }

        &:hover {
            background: url("../assets/btn_hover.png") no-repeat;
            background-size: 100% 100%;
        }
    }
</style>
