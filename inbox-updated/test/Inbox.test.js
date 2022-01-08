// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //constructor
//one instace to connect to one eterum network
const { abi, evm } = require('../compile');

const web3 = new Web3(ganache.provider());


let accounts;
let inbox;

beforeEach( async() => {

    //Get a list of all accounts
    accounts = await web3.eth.getAccounts();
        
    //use one accpunt to deploy
    inbox = await new web3.eth.Contract(abi)
        .deploy({data: evm.bytecode.object, arguments: ['Hi there'] })
        .send({from: accounts[0], gas: '1000000' })
});

describe('Inbox', () =>{
    it('deploys a contract', () => {
       assert.ok(inbox.options.address);
    });

    it('intializes a message', async () => {
        const message = await inbox.methods.message().call(); //message() to send arguments call() to specify who pays
        assert.equal(message, 'Hi there');
    })

    it('Message has been changed', async () => {
        await inbox.methods.setMessage('new').send({ from: accounts[0] });
        const message = await inbox.methods.message().call();   
        assert.equal(message, 'new');
    })
})
