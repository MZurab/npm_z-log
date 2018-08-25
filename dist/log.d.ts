export declare namespace mz {
    class Log {
        static logState: number;
        static on(): void;
        static off(): void;
        static consoleOff(): void;
        static checkAccessForLog(): boolean;
        static print(type: string, ...vN: any[]): boolean;
        static printObject(type: any, ...vN: any[]): boolean;
        static error(...vN: any[]): boolean;
        static errorObject(...vN: any[]): boolean;
        static warn(...vN: any[]): boolean;
        static warnObject(...vN: any[]): boolean;
        static defaultMessage(type: string, id: string | number, code: string | number, text: string, auth: string, ...vN: any[]): any;
        static defaultErrorMessage(id: string | number, code: string | number, text: string, auth: string, ...vN: any[]): any;
        static defaultWarnMessage(id: string | number, code: string | number, text: string, auth: string, ...vN: any[]): any;
        static step(id: string | number, code: string | number, text: string, auth: string, ...vN: any[]): any;
        static fstep(id: string | number, code: string | number, text: string, auth: string, ...vN: any[]): void;
        static ferror(id: string | number, code: string | number, text: string, auth: string, ...vN: any[]): any;
    }
}
