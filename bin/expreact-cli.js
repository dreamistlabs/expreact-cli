#!/usr/bin/env node
var program = require('commander');
var shell = require('shelljs');
var child_process = require('child_process');

program
  .version('0.0.1')
  .arguments('<dir>')
  .usage('[options] <dir>')
  .action(function(dir) {
    const location = shell.exec('which expreact', {silent: true})
                          .stdout
                          .trim()
                          .replace(/(\/\w+){2}$/, '');

    const PATH = location + '/lib/node_modules/expreact-cli';

    // shell.exec('express ' + dir);
    // simulate express folder creation
    shell.mkdir(dir);

    shell.cd(dir);

    // initialize a new npm package.json
    // child_process.execSync('npm init', {stdio: 'inherit'});

    // simulate dependencies installation
    // shell.exec('npm install');

    // delete the default express public/ folder
    shell.rm('-R', 'public');

    // delete the default express views folder??
    shell.rm('-R', 'views');

    // update express package.json file to point express server to PORT 3001
    shell.sed('-i',
              '"start": "node ./bin/www"',
              '"start": "PORT=3001 node ./bin/www"',
              './package.json');

    // copy files over
    // replace users.js with modified one to include sample data
    shell.mkdir('routes');
    shell.cp('-R', PATH + '/lib/express/*', './routes');

    console.log('create-react-app ' + dir + '/react-ui');
    // shell.exec('create-react-app ' + dir + '/react-ui');

    // simulate react-ui creation
    shell.mkdir('react-ui');
    shell.mkdir('react-ui/src');
    shell.touch('./react-ui/src/App.js');
    shell.touch('./react-ui/src/App.css');
    shell.touch('./react-ui/src/App.test.js');

    // add proxy config property to react package.json file
    shell.sed('-i',
              /\s\s\}$/,
              `  },\n  "proxy": "http://localhost:3001"`,
              './react-ui/package.json');

    // remove default App.js, App.css, and App.test.js files
    shell.rm('-R', './react-ui/src/App.*');

    // copy modified components folder over
    shell.cp('-R', PATH + '/lib/react/components', './react-ui/src/');

    // update index.js with new path to App.js
    shell.sed('-i', "import App from './App';", "import App from './components/App';", './react-ui/src/index.js')

    // TODO: RENAME APPLICATION BASED ON USER'S PROJECT NAME
    // WHERE? React-UI package.json, React-UI public/index.html <title>

  })
  .parse(process.argv);
