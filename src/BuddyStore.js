import type {Buddy} from "./types/Buddy";

export default class BuddyStore {
  #indexes = {};

  #buddies: Array<Buddy> = [
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
    ];

  constructor() {
    if (localStorage.getItem('keitaro') === 'true') {
      this.#buddies.unshift({
        name: 'Keitaro',
        emoteId: '514293667041771531',
        score: 0,
      });
    }

    for (let i = 0; i < this.#buddies.length; i++) {
      const buddy = this.#buddies[i];

      this.#indexes[buddy.name.toLowerCase()] = i;
    }

    const storedBuddies = localStorage.getItem('buddies');

    if (storedBuddies) {
      const buddies = JSON.parse(storedBuddies);
      const keys = Object.keys(buddies);

      for (const name of keys) {
        console.log(name);

        if (!buddies.hasOwnProperty(name)) {
          continue;
        }

        this.setScore(name, buddies[name]);
      }
    }
  }

  get buddies() {
    return this.#buddies;
  }

  setScore(name: string, score: number): void {
    const index = this.#indexes[name.toLowerCase()];

    if (typeof index === 'undefined') {
      return;
      // throw new Error(`Missing buddy: ${name}`);
    }

    this.#buddies[index].score = score;
  }

}