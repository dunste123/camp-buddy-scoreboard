export default class BuddyStore {
    #indexes = {};

    /**
     *
     * @type Buddy[]
     */
    #buddies = [
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
    ];

    constructor (): void {
        this._checkKeitaro();
        this._setIndexes();
        this._loadScores();
    }

    get buddies () {
        return this.#buddies;
    }

    incrementScore (name: string): void {
        const score = this.getScore(name);

        this.setScore(name, score + 1);
    }

    decrementScore (name: string): void {
        const score = this.getScore(name);

        this.setScore(name, score - 1);
    }

    incrementExtraScore (name: string, title: string): void {
        const score = this.getExtraScore(name, title);

        this.setExtraScore(name, title, score + 1);
    }

    decrementExtraScore (name: string, title: string): void {
        const score = this.getExtraScore(name, title);

        this.setExtraScore(name, title, score - 1);
    }

    getScore (name: string): number {
        const index = this.#indexes[name.toLowerCase()];

        if (typeof index === "undefined") {
            throw new Error(`Missing buddy: ${name}`);
        }

        return this.#buddies[index].score;
    }

    getExtraScore (name: string, title: string): number {
        const index = this.#indexes[name.toLowerCase()];

        if (typeof index === "undefined") {
            throw new Error(`Missing buddy: ${name}`);
        }


        const scores = this.#buddies[index].extra_scores;
        const sIndex = scores.findIndex((item) => item.title === title);

        return scores[sIndex].score;
    }

    setScore (name: string, score: number): void {
        const index = this.#indexes[name.toLowerCase()];

        if (typeof index === "undefined") {
            return;
            // throw new Error(`Missing buddy: ${name}`);
        }

        this.#buddies[index].score = score;

        this._saveScores();
    }

    setExtraScore (name: string, title: string, score: number): void {
        const index = this.#indexes[name.toLowerCase()];

        if (typeof index === "undefined") {
            return;
            // throw new Error(`Missing buddy: ${name}`);
        }

        const scores = this.#buddies[index].extra_scores;
        const sIndex = scores.findIndex((item) => item.title === title);

        if (sIndex < 0) {
            return;
        }

        scores[sIndex].score = score;

        this._saveScores();
    }

    resetScores (): void {
        localStorage.removeItem("buddies");
    }

    _checkKeitaro (): void {
        if (localStorage.getItem("keitaro") === "true") {
            this.#buddies.unshift({
                name: "Keitaro",
                emoteId: "514293667041771531",
                score: 0,
            });
        }
    }

    _setIndexes (): void {
        for (let i = 0; i < this.#buddies.length; i++) {
            const buddy = this.#buddies[i];

            this.#indexes[buddy.name.toLowerCase()] = i;
        }
    }

    _loadScores (): void {
        const storedBuddies = localStorage.getItem("buddies");

        if (storedBuddies) {
            const buddies = JSON.parse(storedBuddies);
            const keys = Object.keys(buddies);

            for (const name of keys) {
                console.log(name);

                if (name.includes("__")) {
                    // [0] == buddy name, [1] == extra name
                    const strings = name.split("__");

                    this.setExtraScore(strings[0], strings[1], buddies[name]);

                    continue;
                }

                if (!buddies.hasOwnProperty(name)) {
                    continue;
                }

                this.setScore(name, buddies[name]);
            }
        }
    }

    _saveScores (): void {
        const mapped = {};

        this.#buddies.forEach((buddy) => {
            mapped[buddy.name.toLowerCase()] = buddy.score;

            if (buddy.extra_scores) {
                buddy.extra_scores.forEach((score) => {
                    mapped[`${buddy.name.toLowerCase()}__${score.title}`] = score.score;
                });
            }
        });

        const json = JSON.stringify(mapped);

        localStorage.setItem("buddies", json);
    }

}
