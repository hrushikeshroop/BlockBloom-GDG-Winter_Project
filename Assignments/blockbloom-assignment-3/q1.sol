
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract find_factoral{
    
    function factorial (uint n) public pure returns(uint){
        uint res=1;
        for(uint i=2;i<=n;i++){
            res*=i;
        }
        return res;
    }

    function factRec (uint n) public pure returns(uint){
        if(n==0||n==1)return 1;
        return n*factRec(n-1);
    }

} 