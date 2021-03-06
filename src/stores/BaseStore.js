import type { Buddy } from "../types/Buddy";

export default class BaseStore {
    #indexes = {};
    #items;
    #storeKey;

    constructor(items: Buddy[], storeKey: string) {
        this.#items = items;
        this.#storeKey = storeKey;

        this._setIndexes();
        this._loadScores();
    }

    get items (): Buddy[] {
        return this.#items;
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

        return this.#items[index].score;
    }

    getExtraScore (name: string, title: string): number {
        const index = this.#indexes[name.toLowerCase()];

        if (typeof index === "undefined") {
            throw new Error(`Missing buddy: ${name}`);
        }

        const scores = this.#items[index].extra_scores;
        const sIndex = scores.findIndex((item) => item.title === title);

        return scores[sIndex].score;
    }

    setScore (name: string, score: number): void {
        const index = this.#indexes[name.toLowerCase()];

        if (typeof index === "undefined") {
            return;
            // throw new Error(`Missing buddy: ${name}`);
        }

        this.#items[index].score = score;

        this._saveScores();
    }

    setExtraScore (name: string, title: string, score: number): void {
        const index = this.#indexes[name.toLowerCase()];

        if (typeof index === "undefined") {
            return;
            // throw new Error(`Missing buddy: ${name}`);
        }

        const scores = this.#items[index].extra_scores;
        const sIndex = scores.findIndex((item) => item.title === title);

        if (sIndex < 0) {
            return;
        }

        scores[sIndex].score = score;

        this._saveScores();
    }

    resetScores (): void {
        localStorage.removeItem(this.#storeKey);
    }

    _setIndexes (): void {
        for (let i = 0; i < this.#items.length; i++) {
            const buddy = this.#items[i];

            this.#indexes[buddy.name.toLowerCase()] = i;
        }
    }

    _loadScores (): void {
        const storedBuddies = localStorage.getItem(this.#storeKey);

        if (storedBuddies) {
            const buddies = JSON.parse(storedBuddies);
            const keys = Object.keys(buddies);

            for (const name of keys) {
                //console.log(name);

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

        this.#items.forEach((buddy) => {
            mapped[buddy.name.toLowerCase()] = buddy.score;

            if (buddy.extra_scores) {
                buddy.extra_scores.forEach((score) => {
                    mapped[`${buddy.name.toLowerCase()}__${score.title}`] = score.score;
                });
            }
        });

        const json = JSON.stringify(mapped);

        localStorage.setItem(this.#storeKey, json);
    }
}
