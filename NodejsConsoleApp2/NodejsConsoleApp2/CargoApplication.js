// CArgoApplication main program
var argsSample = process.argv;
var length = (process.argv.length - 2);
var args = new Array(length);
for (var j = 2; j < argsSample.length; j++) {
    args[j-2] = String(argsSample[j]);
}
var EXPECTED_ARGUMENTS = 4;

if (args == null || args.length != EXPECTED_ARGUMENTS) {
    throw "This application only accepts 4 arguments";
}

var arguments = new Array(EXPECTED_ARGUMENTS);
for (var i = 0; i < EXPECTED_ARGUMENTS; i++) {
    arguments[i] = (args[i]=="true");
}
console.log(arguments);

var cargo = require("./GlobaDataCargo.js");
console.log(cargo.getGlobalDataCargoHeaders(arguments));
console.log(cargo.getGlobalDataCargoInput(arguments));

var result = cargo.getGlobalDataCargoForm(arguments[0], arguments[1], arguments[2], arguments[3]);
console.log("Result: " + result);
