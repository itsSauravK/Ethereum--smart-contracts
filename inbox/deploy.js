// deploy code will go here
const HDwallerProvide = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDwallerProvide(
    'fabric control borrow they armor wheat grow february flavor panel burger spawn',
    'https://rinkeby.infura.io/v3/60455443f9f34fc9b2295aa9e31fa59c'
);
const web3 = new Web3(provider);

const deploy = async () => {

    const accounts = await web3.eth.getAccounts();
    console.log(`Attempting to deploy from ${accounts[0]}`);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ 
            data: bytecode,
            arguments: ['Hi there']
        })
        .send({gas: '1000000', from: accounts[0]})

    console.log(`Contract is deployed to ${result.options.address} `);
    provider.engine.stop();
}
deploy();