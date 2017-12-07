const _ = {};


// global.logState = 0;

function on () {
  global.logState = 1
}
_['on'] = on;

function off () {
  global.logState = 0
}
_['off'] = off;

function checkAccessForLog () {
  if (global.logState) {
    return true;
  }
  return false
}
_['checkAccessForLog'] = checkAccessForLog;



function print (v1,v2,v3,v4,v5,v6,v7,v8,type) {
  if(!checkAccessForLog()) return false;
  
  if(typeof type != 'string') type = 'log';

  if( typeof v8 != 'undefined' ) {
    console[type](v1,v2,v3,v4,v5,v6,v7,v8);
  } else if (typeof v7 != 'undefined') {
    console[type](v1,v2,v3,v4,v5,v6,v7);
  } else if (typeof v6 != 'undefined') {
    console[type](v1,v2,v3,v4,v5,v6);
  } else if (typeof v5 != 'undefined') {
    console[type](v1,v2,v3,v4,v5);
  } else if (typeof v4 != 'undefined') {
    console[type](v1,v2,v3,v4);
  } else if (typeof v3 != 'undefined') {
    console[type](v1,v2,v3);
  } else if (typeof v2 != 'undefined') {
    console[type](v1,v2);
  } else if (typeof v1 != 'undefined') {
    console[type](v1);
  } else {
    return false;
  }
  return true;
}
_['print'] = print;

function printObject (v1,v2,v3,v4,v5,v6,v7,v8,type) {

  v1 = JSON.stringify(v1);
  v2 = JSON.stringify(v2);
  v3 = JSON.stringify(v3);
  v4 = JSON.stringify(v4);
  v5 = JSON.stringify(v5);
  v6 = JSON.stringify(v6);
  v7 = JSON.stringify(v7);
  v8 = JSON.stringify(v8);
  return print (v1,v2,v3,v4,v5,v6,v7,v8,type);
}
_['printObject'] = printObject;


function error (v1,v2,v3,v4,v5,v6,v7,v8) {
  print (v1,v2,v3,v4,v5,v6,v7,v8,'error');
}
_['error'] = error;

function errorObject (v1,v2,v3,v4,v5,v6,v7,v8) {
  return printObject (v1,v2,v3,v4,v5,v6,v7,v8,'error');
}
_['errorObject'] = errorObject;


function warn (v1,v2,v3,v4,v5,v6,v7,v8) {
  print (v1,v2,v3,v4,v5,v6,v7,v8,'warn');
}
_['warn'] = warn;

function warnObject (v1,v2,v3,v4,v5,v6,v7,v8) {
  return printObject (v1,v2,v3,v4,v5,v6,v7,v8,'warn');
}
_['warnObject'] = warnObject;


function defaultMessage (type, id,code,text,v3,v4,v5,v6,v7,v8) {
  id = '#'+id;

  var objForViewError = {
    'id'    : id,
    'code'  : code
  };
  if(typeof text != 'undefined') objForViewError['text'] = text;

  var v1 = 'z-log error ('+id+' - '+code+')';
  var v2 = text;
  // show error
  printObject (v1,v2,v3,v4,v5,v6,v7,v8,type);
  return objForViewError;
}
_['defaultMessage'] = defaultMessage;

function defaultErrorMessage ( id,code,text,v3,v4,v5,v6,v7,v8) {
  return defaultMessage('error',id,code,text,v3,v4,v5,v6,v7,v8);
}
_['defaultErrorMessage'] = defaultErrorMessage;

function defaultWarnMessage ( id,code,text,v3,v4,v5,v6,v7,v8) {
  return defaultMessage('warn',id,code,text,v3,v4,v5,v6,v7,v8);
}
_['defaultWarnMessage'] = defaultWarnMessage;

if (typeof window == 'object') {

}
module.exports = _;
