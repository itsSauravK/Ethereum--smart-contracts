// compile code will go here
const path = require('path'); //build directory path to inbox.sol
const fs = require('fs'); 
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

const input = {
    language: 'Solidity',
    sources: {
      'Inbox.sol': {
        content: source,
      },
    },
    settings: {
      outputSelection: {  //generates all files a output can generate
        '*': {
          '*': ['*'],
        },
      },
    },
  };
  //console.log(JSON.parse(solc.compile(JSON.stringify(input))).contracts);
  module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
    'Inbox.sol'
].Inbox;

