function solve() {
    const canCast = (state) => ({
        cast: (spell) => {
            console.log(`${state.name} cast ${spell}`);
            state.mana--;
        }
    });

    const canFight = (state) => ({
        fight: () => {
            console.log(`${state.name} slashes at foe!`);
            state.stamina--;
        }
    });

    const mage = (name) => {
        const state = {
            name,
            health: 100,
            mana: 100
        };

        return Object.assign(state, canCast(state));
    };

    const fighter = (name) => {
        const state = {
            name,
            health: 100,
            stamina: 100
        };

        return Object.assign(state, canFight(state));
    };

    return {mage: mage, fighter: fighter}
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);
