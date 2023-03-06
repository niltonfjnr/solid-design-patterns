import * as readline from 'readline';
import * as process from 'process';
import * as console from 'console';

const NUMBER_ZERO = 0;
const NUMBER_ONE = 1;
const NUMBER_FIFTY = 50;
const NUMBER_TWO_HUNDRED = 200;

class AbstractInstanceError extends Error {
    constructor(message = 'Abstract class demands implementation') {
        super(message);
    }
}

class HotDrink {
    constructor() { if (this.constructor.name === 'HotDrink') throw new AbstractInstanceError(); }
    consume() { throw new AbstractInstanceError(); }
    consumeFast() { throw new AbstractInstanceError(); }
}

class Tea extends HotDrink {
    consume() {
        console.log('This tea is nice with lemon!');
    }
    consumeFast() {
        console.log('This tea is all I needed!');
    }
}

class Coffee extends HotDrink {
    consume() {
        console.log('This coffee is delicious!');
    }
    consumeFast() {
        console.log('This coffee is all I needed!');
    }
}

class HotDrinkFactory {
    constructor() { if (this.constructor.name === 'HotDrinkFactory') throw new AbstractInstanceError(); }
    /**
     * @param {number} amount 
     */
    prepare(amount) { throw new AbstractInstanceError(); }
}

class TeaFactory extends HotDrinkFactory {
    prepare(amount) {
        console.log(`Put in tea bag, boil water, pour ${amount}ml`);
        return new Tea();
    }
}

class CoffeeFactory extends HotDrinkFactory {
    prepare(amount) {
        console.log(`Grind some coffee beans, boil water, pour ${amount}ml`);
        return new Coffee();
    }
}

const AvailableDrink = {
    coffee: CoffeeFactory,
    tea: TeaFactory
};

class HotDrinkMachine {
    constructor() {
        this.factories = {};
        for (const drink in AvailableDrink) {
            this.factories[drink] = new AvailableDrink[drink]();
        }
    }

    makeDrink(type) {
        switch (type) {
            case 'tea':
                return new TeaFactory().prepare(NUMBER_TWO_HUNDRED);
            case 'coffee':
                return new CoffeeFactory().prepare(NUMBER_FIFTY);
            default:
                throw new Error(`Don't know how to make ${type}`);
        }
    }

    getDrinkParams(answer) {
        const parts = answer.split(' ');
        const name = parts[NUMBER_ZERO];
        const amount = parseInt(parts[NUMBER_ONE]);
        return { name, amount };
    }

    interact(consumer) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('Please specify drink and amount ' +
            '(e.g., tea 50):', (answer) => {
                const { name, amount } = this.getDrinkParams(answer);
                const drink = this.factories[name].prepare(amount);
                consumer(drink);
                rl.close();
            });

    }
}

/**
 * @param {HotDrink} drink 
 */
const consumerBehavior = (drink) => {
    drink.consume();
    drink.consumeFast();
};

const machine = new HotDrinkMachine();
machine.interact(consumerBehavior);
