#!/usr/bin/env node

var newArray = process.argv.splice(2);
var numString = newArray.toString();
var remComma = numString.replace(/,/g,'');
console.log(eval(remComma));