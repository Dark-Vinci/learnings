// 02-04-2023

// Pick utility method
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

// Omit utility method
interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

// Awaited method
type A = Awaited<Promise<string>>;

// typeof , keyof
// typeof return the type of an object at runtime
// keyof returns the union of that type at runtime
enum sample_keys {
    'TypeScript',
    'JavaScript',
    'ExpressJS',
    'NodeJS',
    'NextJS'
}

type enumk = keyof typeof sample_keys;


// TUPLE
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

// best practice is to make a tuple readonly

const readonOnlyTup: readonly [boolean, string] = [false, 'silake'];

// destructure
const graph: readonly [number, number] = [55.2, 41.3];
const [x, y] = graph;
    

// to make an object readonly

// option 1:
    let graph: readonly [number, number] = [1, 2];
    let newGraph: [number, number] = [1, 2] as const;