<template>
    <div id="app">
        <div class="buddies">
            <div class="buddy" v-for="(item, key) in buddies" :key="key">
                <Buddy v-model="buddies[key]"/>
            </div>
        </div>


        <div class="reset">
            <BuddyButton :action="resetScores" text="Reset" no-margin />
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
                this.buddies = this.unmapScores();
            }
        },
        watch: {
            buddies: {
                handler() {
                   localStorage.setItem('buddies', this.mapScores());
                },
                deep: true,
            },
        },
        methods: {
            mapScores () {
                const mapped = {};

                this.buddies.forEach((buddy) => {
                    mapped[buddy.name.toLowerCase()] = buddy.score;
                });

                return JSON.stringify(mapped);
            },
            // This should not set the data but return it in the format that we want
            unmapScores () {
                const stored = JSON.parse(localStorage.getItem('buddies'));
                const unmapped = [];

                Object.keys(stored).forEach((key) => {
                    for (const buddy of this.buddies) {
                        if (buddy.name.toLowerCase() === key) {
                            unmapped.push({
                                ...buddy,
                                score: stored[key],
                            });
                        }
                    }
                });

                return unmapped;
            },
            resetScores () {
                localStorage.removeItem('buddies');
                window.location.reload();
            },
        },
    };
</script>

<!--<style>
    *:not(path):not(g) {
        color:                    hsla(210, 100%, 100%, 0.9) !important;
        background:               hsla(210, 100%,  50%, 0.5) !important;
        outline:    solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;

        box-shadow: none !important;
    }
</style>-->

<style lang="scss" scoped>
    #app {
        margin: 3rem;
        display: flex;
        flex-direction: column;

        .reset {
            margin: 0 auto;
            display: block;
            padding-top: 3rem;
            align-self: center;

            /*align-self: center;
            justify-items: center;
            padding-top: 3rem;
            overflow: hidden;
            width: 100vw;*/

            button {
                align-self: center;
                /*width: 150px;*/
            }
        }

        .buddies {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
</style>
