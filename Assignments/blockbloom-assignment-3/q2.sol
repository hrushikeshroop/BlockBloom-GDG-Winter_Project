
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract find_factoral{

    address owner;
    
    constructor(){
        owner=msg.sender;
    }

    modifier onlyOwnable () {
        require(msg.sender==owner,"Sorry,Only owner can access");
        _;
    }

    function changeOwner (address newOwner) public onlyOwnable returns(string memory){
        owner = newOwner;
        return "Sucessfully Transferred";
    }

    function factorial (uint n) public pure returns(uint){
        uint res=1;
        for(uint i=2;i<=n;i++){
            res*=i;
        }
        return res;
    }

    function factRec (uint n) public onlyOwnable returns(uint){
        if(n==0||n==1)return 1;
        return n*factRec(n-1);
    }

} 