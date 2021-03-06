import BaseStore from "./BaseStore";

export default class BuddyStore extends BaseStore {
    constructor (): void {
        super([
            // He should be added tbh
            /*{
                name: 'Keitaro',
                emoteId: '514293667041771531',
                score: 0,
            },*/

            {
                name: "Hiro",
                emoteId: "514293666853158913",
                score: 0,
            },

            {
                name: "Natsumi",
                emoteId: "514293667192766465",
                score: 0,
            },

            {
                name: "Hunter",
                emoteId: "514294078570102784",
                score: 0,
            },

            {
                name: "Yoichi",
                emoteId: "514293667595419663",
                score: 0,
            },

            {
                name: "Taiga",
                emoteId: "514293667507208193",
                score: 0,
                extra_scores: [
                    {
                        title: "Top",
                        score: 0,
                    },
                    {
                        title: "Bottom",
                        score: 0,
                    },
                ],
            },
        ], "buddies");
    }

    /* get buddies () {
        return this.#buddies;
    }

    _checkKeitaro (): void {
        if (localStorage.getItem("keitaro") === "true") {
            this.#buddies.unshift({
                name: "Keitaro",
                emoteId: "514293667041771531",
                score: 0,
            });
        }
    } */
}
