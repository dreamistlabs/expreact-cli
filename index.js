#!/usr/bin/env node
var program = require('commander');
var shell = require('shelljs');

program
  .version('0.0.1')
  .arguments('<dir>')
  .usage('[options] <dir>')
  .action(function(dir) {
    shell.exec('create-react-app ' + dir);
  })
  .parse(process.argv);