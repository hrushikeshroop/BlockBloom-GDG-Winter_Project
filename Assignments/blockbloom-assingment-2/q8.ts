import {ethers} from "ethers";

const wallet = ethers.Wallet.createRandom();

const publickey = wallet.address;
const privatekey = wallet.privateKey;

console.log(publickey);
console.log(privatekey);

export {publickey, privatekey};
