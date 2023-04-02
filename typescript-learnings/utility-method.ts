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
    