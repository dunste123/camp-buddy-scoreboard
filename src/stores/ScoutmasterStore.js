import BaseStore from "./BaseStore";

export default class ScoutmasterStore extends BaseStore {
    constructor (): void {
        super([
            {
                name: "Aiden",
                emoteId: "514293666936782850",
                score: 0,
            },

            {
                name: "Hyunjin",
                emoteId: "833333254634602496",
                score: 0,
            },

            {
                name: "Emilia",
                emoteId: "837254267252899860",
                score: 0,
            },

            {
                name: "Goro",
                emoteId: "514293666861416466",
                score: 0,
            },
        ], "scoutmasters");
    }

}
