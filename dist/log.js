"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mz;
(function (mz) {
    var Log = /** @class */ (function () {
        function Log() {
        }
        Log.on = function () {
            Log.logState = 1;
        };
        Log.off = function () {
            Log.logState = 0;
        };
        Log.consoleOff = function () {
            console.log = function () { };
            console.error = function () { };
            console.warn = function () { };
        };
        Log.checkAccessForLog = function () {
            return !!Log.logState;
        };
        Log.print = function (type) {
            var vN = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                vN[_i - 1] = arguments[_i];
            }
            if (!Log.checkAccessForLog())
                return false;
            if (typeof type != 'string')
                type = 'log';
            console[type].apply(console, vN);
            return true;
        };
        Log.printObject = function (type) {
            var vN = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                vN[_i - 1] = arguments[_i];
            }
            if (!Log.checkAccessForLog())
                return false;
            var arrayInJson = vN.reduce(function (acumalator, value) {
                acumalator.push(JSON.stringify(value));
            }, []);
            return Log.print.apply(Log, [type].concat(arrayInJson));
        };
        Log.error = function () {
            var vN = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                vN[_i] = arguments[_i];
            }
            if (!Log.checkAccessForLog())
                return false;
            return Log.print.apply(Log, ['error'].concat(vN));
        };
        Log.errorObject = function () {
            var vN = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                vN[_i] = arguments[_i];
            }
            if (!Log.checkAccessForLog())
                return false;
            return Log.printObject.apply(Log, ['error'].concat(vN));
        };
        Log.warn = function () {
            var vN = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                vN[_i] = arguments[_i];
            }
            if (!Log.checkAccessForLog())
                return false;
            return Log.print.apply(Log, ['warn'].concat(vN));
        };
        Log.warnObject = function () {
            var vN = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                vN[_i] = arguments[_i];
            }
            if (!Log.checkAccessForLog())
                return false;
            return Log.printObject.apply(Log, ['warn'].concat(vN));
        };
        //change
        Log.defaultMessage = function (type, id, code, text, auth) {
            var vN = [];
            for (var _i = 5; _i < arguments.length; _i++) {
                vN[_i - 5] = arguments[_i];
            }
            if (!Log.checkAccessForLog())
                return false;
            if (typeof auth != 'string')
                auth = '';
            else
                auth = '<' + auth + '>';
            id = '#' + id;
            var objForViewError = {
                'id': id,
                'code': code
            };
            if (typeof text != 'undefined')
                objForViewError['text'] = text;
            var v1 = 'z-log <' + type.toUpperCase() + '> ' + auth.toUpperCase() + ' (' + id + ' - ' + code + ')';
            // show error
            Log.printObject.apply(Log, [type, v1, text].concat(vN));
            return objForViewError;
        };
        Log.defaultErrorMessage = function (id, code, text, auth) {
            var vN = [];
            for (var _i = 4; _i < arguments.length; _i++) {
                vN[_i - 4] = arguments[_i];
            }
            return Log.defaultMessage.apply(Log, ['error', id, code, text, auth].concat(vN));
        };
        Log.defaultWarnMessage = function (id, code, text, auth) {
            var vN = [];
            for (var _i = 4; _i < arguments.length; _i++) {
                vN[_i - 4] = arguments[_i];
            }
            return Log.defaultMessage.apply(Log, ['warn', id, code, text, auth].concat(vN));
        };
        Log.step = function (id, code, text, auth) {
            var vN = [];
            for (var _i = 4; _i < arguments.length; _i++) {
                vN[_i - 4] = arguments[_i];
            }
            if (!Log.checkAccessForLog())
                return false;
            return Log.defaultMessage.apply(Log, ['log', id, code, text, auth].concat(vN));
        };
        Log.fstep = function (id, code, text, auth) {
            var vN = [];
            for (var _i = 4; _i < arguments.length; _i++) {
                vN[_i - 4] = arguments[_i];
            }
            Log.step.apply(Log, [id, code, text, auth].concat(vN));
        };
        Log.ferror = function (id, code, text, auth) {
            var vN = [];
            for (var _i = 4; _i < arguments.length; _i++) {
                vN[_i - 4] = arguments[_i];
            }
            return Log.defaultMessage.apply(Log, ['error', id, code, text, auth].concat(vN));
        };
        Log.logState = 0;
        return Log;
    }());
    mz.Log = Log;
})(mz = exports.mz || (exports.mz = {}));
