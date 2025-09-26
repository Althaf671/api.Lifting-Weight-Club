// Global logger


export class Logger {
    
    // Get current timestamp
    private static getTimestamp(): string {
        const now = new Date();
        return now.toTimeString().slice(0, 8); 
    };

    // start
    static start = (message: string): void => {
        const timestamp = Logger.getTimestamp();
        if (process.env.NODE_ENV === "development") {
            console.log("");
            console.group('\x1b[44m%s\x1b[0m', ` ========== [ BEGIN OPERATION ] ${message} ========= `);
            console.log("");
        };
    };

    // end
    static end = (): void => {
        if (process.env.NODE_ENV === "development") {
            console.groupEnd();
            console.log("");
            console.trace();
            console.log("");
            console.log('\x1b[43m%s\x1b[0m', " ============== [ END OPERATION ] =============== ")
        };
    };

    // time  start
    static timeStart = (): void => {
        if (process.env.NODE_ENV === "development") {
            console.time();
        };
    };

    // time end
    static timeEnd = (): void => {
        if (process.env.NODE_ENV === "development") {
            console.timeEnd();
        };
    };

    // debug
    static debug = (message: object): void => {
        if (process.env.NODE_ENV === "development") {
            console.debug();
        };       
    }

    // Info
    static info = (message: string, meta?: unknown): void => {
        const timestamp = Logger.getTimestamp();
        if (process.env.NODE_ENV === "development") {
            if (meta) {
                console.log('\x1b[90m%s\x1b[0m', 
                    `[ INFO ]        ${timestamp} ${message}`), JSON.stringify(meta, null, 2);
            } else {
                console.log('\x1b[90m%s\x1b[0m', 
                    `[ INFO ]        ${timestamp} ${message}`);
            };
        };
    };

    // Warn
    static warn = (message: string, meta?: unknown): void => {
        const timestamp = Logger.getTimestamp();
        if (process.env.NODE_ENV === "development") {
            if (meta) {
                console.log('\x1b[33m%s\x1b[0m', 
                    `[ WARN ]        ${timestamp} ${message}`), JSON.stringify(meta, null, 2);
            } else {
                console.log('\x1b[33m%s\x1b[0m', 
                    `[ WARN ]        ${timestamp} ${message}`);
            };
        };
    };

    // Error
    static error = (message: string, meta?: unknown): void => {
        const timestamp = Logger.getTimestamp();
        if (process.env.NODE_ENV === "development") {
            if (meta) {
                console.log('\x1b[31m%s\x1b[0m', 
                    `[ ERROR ]       ${timestamp} ${message}`), JSON.stringify(meta, null, 2);
            } else {
                console.log('\x1b[31m%s\x1b[0m', 
                    `[ ERROR ]       ${timestamp} ${message}`);
            };
        };
    };

    // Success
    static success = (message: string, meta?: unknown): void => {
        const timestamp = Logger.getTimestamp();
        if (process.env.NODE_ENV === "development") {
            if (meta) {
                console.log('\x1b[32m%s\x1b[0m', 
                    `[ SUCCESS ]     ${timestamp} ${message}`), JSON.stringify(meta, null, 2);
            } else {
                console.log('\x1b[32m%s\x1b[0m', 
                    `[ SUCCESS ]     ${timestamp} ${message}`);
            };
        };
    };

    // Critical
    static critical = (message: string, meta?: unknown): void => {
        const timestamp = Logger.getTimestamp();
        if (process.env.NODE_ENV === "development") {
            if (meta) {
                console.log('\x1b[41m%s\x1b[0m', 
                    `[ CRITICAL ]    ${timestamp} ${message}`), JSON.stringify(meta, null, 2);
            } else {
                console.log('\x1b[38;2;255;0;0m%s\x1b[0m', 
                    `[ CRITICAL ]    ${timestamp} ${message}`);
            };
        };
    };

    // Middleware
    static middleware = (message: string, meta?: unknown): void => {
        const timestamp = Logger.getTimestamp();
        if (process.env.NODE_ENV === "development") {
            if (meta) {
                console.log('\x1b[94m%s\x1b[0m', 
                    `[ MIDDLEWARE ]  ${timestamp} ${message}`), JSON.stringify(meta, null, 2);
            } else {
                console.log('\x1b[94m%s\x1b[0m', 
                    `[ MIDDLEWARE ]  ${timestamp} ${message}`);
            };
        };
    };

};