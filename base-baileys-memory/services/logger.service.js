export class LoggerService {
    constructor() {
    }
    log(...args) {
        console.log(...args);
    }
    error(...args) {
        console.error(...args);
    }
}