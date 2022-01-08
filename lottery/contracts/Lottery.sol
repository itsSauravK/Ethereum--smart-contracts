pragma solidity ^0.4.17;

contract Lottery {
    
    address public manager;
    address[] public players;

    function Lottery() public {
        manager = msg.sender;
    }       

    function enter() public payable{  //payable ether

        require(msg.value > .01 ether); //send boolean function in it, user should send more than 
        //.01 ether
        players.push(msg.sender);
    }

    function pickWinner() restricted public {
        uint index = random() % players.length;
        players[index].transfer(this.balance);  //take money in the current contract 
        players = new address[](0);
    }

    function random() private view returns (uint) {

        return uint(keccak256(block.difficulty, now, players));  //generating a number

    }

    function getPlayers() public view returns(address[]){
        return players;

    }
    
     modifier restricted(){ //similar as middleware

         require(msg.sender == manager); //check if winner is being picked by manager
         _;
          
     }
}