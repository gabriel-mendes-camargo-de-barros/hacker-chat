#!/usr/bin/env node

/*
  chmod +x index.js
*/

/*
node index.js
  --username mendes \
  --room sala01 \
  --hosturi localhost
*/ 

import Events from 'events';
import CliConfig from './src/cliConfig.js';
import EventManager from './src/eventManager.js'
import SocketClient from './src/socket.js'
import TerminalController from "./src/terminalController.js";

const [nodePath, filePtah, ...commands] = process.argv
const config = CliConfig.parseArguments(commands)

const componentEmitter = new Events()
const socketClient = new SocketClient(config)

await socketClient.initialize()

const eventManager = new EventManager({ componentEmitter, socketClient })
const events = eventManager.getEvents()
socketClient.attachEvents(events)

const data = {
  roomId: config.room,
  userName: config.username
}
eventManager.joinRoomAndWaitForMassages(data)

const controller = new TerminalController();
await controller.initializeTable(componentEmitter)
