/*
node index.js
  --username mendes \
  --room sala01 \
  --hosturi localhost
*/ 

import Events from 'events';
import CliConfig from './src/cliConfig.js';
import TerminalController from "./src/terminalController.js";

const [nodePath, filePtah, ...commands] = process.argv
const config = CliConfig.parseArguments(commands)
console.log('config', config)
const componentEmitter = new Events();

// const controller = new TerminalController();
// await controller.initializeTable(componentEmitter)
