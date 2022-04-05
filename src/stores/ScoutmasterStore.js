import BaseStore from "./BaseStore";

export default class ScoutmasterStore extends BaseStore {
    constructor (): void {
        super([
            {
                name: "Aiden",
                emoteId: "514293666936782850",
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

            {
                name: "Goro",
                emoteId: "514293666861416466",
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
        ], "scoutmasters");
    }

}
