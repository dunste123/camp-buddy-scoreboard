<template>
    <div>
        <img :src="`https://cdn.discordapp.com/emojis/${emoteId}.png?v=1`" :alt="name" crossorigin="anonymous"/>
        <h1>{{ name }}</h1>
        <h2>Score: {{ score }}</h2>
        <div class="buttons">
            <BuddyButton text="+" :action="incScore" />
            <BuddyButton text="-" :action="decScore" />
        </div>
    </div>
</template>

<script>
    import BuddyButton from './BuddyButton';

    export default {
        name: 'Buddy',
        components: {
            BuddyButton,
        },
        props: {
            value: {
                type: Object,
                required: true,
            },
        },
        methods: {
            incScore(event, amount = 1) {
                this.value.score = this.score + amount;
            },
            decScore(event, amount = 1) {
                this.value.score = this.score - amount;
            },
        },
        computed: {
            emoteId() {
                return this.value.emoteId;
            },
            name() {
                return this.value.name;
            },
            score() {
                return this.value.score;
            },
        },
    };
</script>

<style lang="scss" scoped>
    div {
        text-align: center;
    }

    // @for $i from 1 through 2 {
    //     h#{$i} {
    //         text-align: center;
    //     }
    // }

    img {
        width: 128px;
        height: 128px;
    }

    @media only screen and (max-width: 600px) {
        img {
            width: 64px;
            height: 64px;
        }
    }

    @media only screen and (max-width: 371px) {
        div {
            width: 100%;
        }
    }
</style>
