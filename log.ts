declare var console: any;

export namespace mz {
    export class Log {
        public static logState = 0;

        public static on (): void {
            Log.logState = 1
        }

        public static off (): void {
            Log.logState = 0
        }

        public static consoleOff(): void {
            console.log = function () {};
            console.error = function () {};
            console.warn = function () {};
        }

        public static checkAccessForLog (): boolean {
            return !!Log.logState;

        }

        public static print (type: string, ...vN: any[]): boolean {
            if(!Log.checkAccessForLog()) return false;

            if(typeof type != 'string') type = 'log';

            console[type](...vN);

            return true;
        }


        public static  printObject (type: any, ...vN: any[]) {
            if(!Log.checkAccessForLog()) return false;

            let arrayInJson: any[] = vN.reduce(
                (acumalator, value) => {
                    acumalator.push(
                        JSON.stringify(value)
                    )
                },
                []
            );

            return Log.print(type, ...arrayInJson);
        }


        public static  error (...vN:any[]): boolean {
            if(!Log.checkAccessForLog()) return false;
            return Log.print ('error', ...vN);
        }

        public static  errorObject (...vN:any[]): boolean {
            if(!Log.checkAccessForLog()) return false;
            return Log.printObject ('error', ...vN);
        }

        public static warn (...vN:any[]): boolean {
            if(!Log.checkAccessForLog()) return false;
            return Log.print ('warn', ...vN);
        }

        public static warnObject (...vN:any[]): boolean {
            if(!Log.checkAccessForLog()) return false;
            return Log.printObject ('warn', ...vN);
        }

        //change
        public static defaultMessage (type: string, id: string | number, code: string | number, text: string, auth: string, ...vN: any[]): any {
            if(!Log.checkAccessForLog()) return false;

            if(typeof auth != 'string')
                auth = '';
            else
                auth = '<' + auth + '>';

            id = '#'+id;

            let objForViewError: any = {
                'id'    : id,
                'code'  : code
            };

            if(typeof text != 'undefined') objForViewError['text'] = text;

            let v1 = 'z-log <'+type.toUpperCase()+'> '+auth.toUpperCase() + ' ('+id+' - '+code+')';
            // show error
            Log.printObject (type, v1, text,...vN);
            return objForViewError;
        }

        public static defaultErrorMessage ( id: string | number,code: string | number,text: string,auth: string,...vN: any[]): any {
            return Log.defaultMessage('error',id,code,text,auth,...vN);
        }

        public static defaultWarnMessage ( id: string | number,code: string | number,text: string,auth: string,...vN: any[]): any {
            return Log.defaultMessage('warn',id,code,text, auth, ...vN);
        }

        public static step ( id: string | number,code: string | number,text: string,auth: string, ...vN: any[]): any {
            if(!Log.checkAccessForLog()) return false;
            return Log.defaultMessage('log',id,code,text, auth, ...vN);
        }

        public static fstep (id: string | number,code: string | number,text: string,auth: string, ...vN: any[]): void {
            Log.step( id,code,text,auth,...vN);
        }

        public static ferror (id: string | number,code: string | number,text: string,auth: string,...vN: any[]): any {
            return Log.defaultMessage('error',id,code,text, auth, ...vN);
        }
    }
}
