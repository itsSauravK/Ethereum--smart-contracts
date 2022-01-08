pragma solidity ^0.4.17;
// linter warnings (red underline) about pragma version can igonored!

contract Inbox {
    string public message;

    function Inbox(string intialMessage) public {
        message = intialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }

}
// contract code will go here
