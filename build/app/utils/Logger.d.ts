import winston from 'winston';
export declare const customLogFormat: winston.Logform.Format;
export declare const log: {
    debug: winston.LeveledLogMethod;
    error: winston.LeveledLogMethod;
    info: winston.LeveledLogMethod;
    verbose: winston.LeveledLogMethod;
    warn: winston.LeveledLogMethod;
};
