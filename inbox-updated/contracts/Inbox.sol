// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
// linter warnings (red underline) about pragma version can igonored!

contract Inbox {
    string public message;

    constructor(string memory intialMessage){
        message = intialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

}
// contract code will go here
