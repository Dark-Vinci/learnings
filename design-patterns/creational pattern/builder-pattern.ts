// this pattern creates each parts of the created objects separately

// example -> building house example (the parts are created and joined together as the design of the house demands)

// example

interface Builder {
    producePartA(): void;
    producePartB(): void;
    producePartC(): void;
}

class ConcreteBuilder1 implements Builder {
    private product: Product1;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Product1();
    }

    public producePartA(): void {
        this.product.parts.push('PartA1');
    }

    public producePartB(): void {
        this.product.parts.push('PartB1');
    }

    public producePartC(): void {
        this.product.parts.push('PartC1');
    }

    public getProduct(): Product1 {
        const result = this.product;
        this.reset();
        return result;
    }
}

class Product1 {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Product parts: ${this.parts.join(', ')}\n`);
    }
}

// this director class in not compulsory since the client can directly control the builders
class Director {
    private builder: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public buildMinimalViableProduct(): void {
        this.builder.producePartA();
    }

    public buildFullFeaturedProduct(): void {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}

// CHAT GPT EXAMPLE
class HouseBuilder {
    private foundation: string = '';
    private walls: string[] = [];
    private windows: number = 0;
    private doors: number = 0;
    private roof: string = '';

    setFoundation(foundation: string) {
        this.foundation = foundation;
        return this;
    }

    addWall(wall: string) {
        this.walls.push(wall);
        return this;
    }

    setWindows(numberOfWindows: number) {
        this.windows = numberOfWindows;
        return this;
    }

    setDoors(numberOfDoors: number) {
        this.doors = numberOfDoors;
        return this;
    }

    setRoof(roof: string) {
        this.roof = roof;
        return this;
    }

    build() {
        return new House(this.foundation, this.walls, this.windows, this.doors, this.roof);
    }
}

class House {
    constructor(private foundation: string, private walls: string[], private windows: number, private doors: number, private roof: string) { }

    describe() {
        console.log(`This house has a ${this.foundation} foundation, ${this.walls.length} walls, ${this.windows} windows, ${this.doors} doors, and a ${this.roof} roof.`);
    }
}

const myHouse = new HouseBuilder()
    .setFoundation('concrete')
    .addWall('brick')
    .addWall('brick')
    .addWall('brick')
    .addWall('brick')
    .setWindows(4)
    .setDoors(1)
    .setRoof('shingles')
    .build();

myHouse.describe(); // This house has a concrete foundation, 4 walls, 4 windows, 1 door, and a shingles roof.
