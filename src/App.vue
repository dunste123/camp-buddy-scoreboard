<template>
    <div id="app">
        <div class="buddies">
            <div class="buddy" v-for="(item, key) in buddies" :key="key">
                <Buddy v-model="buddies[key]"/>
            </div>
        </div>


        <div class="reset">
            <BuddyButton :action="resetScores" text="Reset" />
        </div>
    </div>
</template>

<script>
    import Buddy from './components/Buddy.vue';
    import BuddyButton from './components/BuddyButton';

    export default {
        name: 'app',
        components: {
            BuddyButton,
            Buddy,
        },
        data: () => ({
            buddies: [
                // He should be added tbh
                /*{
                    name: 'Keitaro',
                    emoteId: '514293667041771531',
                    score: 0,
                },*/

                {
                    name: 'Hiro',
                    emoteId: '514293666853158913',
                    score: 0,
                },

                {
                    name: 'Natsumi',
                    emoteId: '514293667192766465',
                    score: 0,
                },

                {
                    name: 'Hunter',
                    emoteId: '514294078570102784',
                    score: 0,
                },

                {
                    name: 'Yoichi',
                    emoteId: '514293667595419663',
                    score: 0,
                },

                {
                    name: 'Taiga',
                    emoteId: '514293667507208193',
                    score: 0,
                },
            ],
        }),
        mounted() {
            if (localStorage.getItem('buddies')) {
                this.buddies = JSON.parse(localStorage.getItem('buddies'));
            }
        },
        watch: {
            buddies: {
                handler() {
                   localStorage.setItem('buddies', JSON.stringify(this.buddies));
                },
                deep: true,
            },
        },
        methods: {
            resetScores () {
                localStorage.removeItem('buddies');
                window.location.reload();
            },
        },
    };
</script>

<style lang="scss" scoped>
    #app {
        margin: 3rem;
        display: flex;
        flex-direction: column;

        .reset {
            align-self: center;
            width: 100px;
            padding-top: 3rem;
        }

        .buddies {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
</style>
