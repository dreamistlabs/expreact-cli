#!/usr/bin/env node
var program = require('commander');
var shell = require('shelljs');

program
  .version('0.0.1')
  .arguments('<dir>')
  .usage('[options] <dir>')
  .action(function(dir) {
    console.log('express ' + dir);
    // shell.exec('express ' + dir);

    // simulate express folder creation
    shell.mkdir(dir);
    shell.cd(dir);
    // simulate dependencies installation
    // shell.exec('npm install');

    // create random file
    shell.touch('file.js');

    // copy files over
  })
  .action(function(dir) {
    console.log('create-react-app ' + dir + '/react-ui');
    // shell.exec('create-react-app ' + dir + '/react-ui');
  })
  .parse(process.argv);