// Never use the Boolean as a class
// Warning: You should rarely find yourself using Boolean as a constructor.

const a = new Boolean(false);
if (a) {
    // code in here would run
}

//  DO THIS INSTEAD
const b = Boolean(false);
// or
const c = !!(expression)


________________________________________________________________

// Boolean coersion

// & Symbols turn into true.

________________________________________________________________
// private class property
class Rectangle {
    #height = 0;
    #width;
    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }

    #privateMethod() {
        return "hello world";
    }
}


________________________________________________________________

// EXtending error class

class ValidationError extends Error {
    printCustomerMessage() {
        return `Validation failed :-( (details: ${this.message})`;
    }
}

try {
    throw new ValidationError("Not a valid phone number");
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(error.name); // This is Error instead of ValidationError!
        console.log(error.printCustomerMessage());
    } else {
        console.log("Unknown error", error);
        throw error;
    }
}

________________________________________________________________
// Return value is ignored in constructor method
________________________________________________________________
// DATE FORMATTING

const date = new Date("2020-05-12T23:50:21.817Z");
date.toString(); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)
date.toDateString(); // Tue May 12 2020
date.toTimeString(); // 18:50:21 GMT-0500 (Central Daylight Time)
date.toISOString(); // 2020-05-12T23:50:21.817Z
date.toUTCString(); // Tue, 12 May 2020 23:50:21 GMT
date.toJSON(); // 2020-05-12T23:50:21.817Z
date.toLocaleString(); // 5/12/2020, 6:50:21 PM
date.toLocaleDateString(); // 5/12/2020
date.toLocaleTimeString(); // 6:50:21 PM