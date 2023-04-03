
// Properties

// 1) private constructor
// 2) private instance
// 3) static instance getter

class Singleton {
    private static instance: any;

    private constructor() {}

    public static getInstnace(): Singleton {
        if (!Singleton.instance) {
            return new Singleton();
        }

        return Singleton.instance;
    }

    public someBusinessLogic() {
        // ...
    }
}

// abstract and prototype pattern can also implement Singleton