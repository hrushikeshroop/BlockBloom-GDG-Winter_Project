import Web3 from "web3";
import { keccak256,toChecksumAddress } from "ethereumjs-util";
import rlp from "rlp";

function generateContractAddress(senderAddress: string, nonce: number): string {
    const checksumSender = toChecksumAddress(senderAddress);
    const rlpEncoded = rlp.encode([toChecksumAddress(senderAddress).toLowerCase(), nonce]);
    const keccakHash = keccak256(Buffer.from(rlpEncoded));
    const contractAddress = keccakHash.subarray(12).toString("hex");
    return toChecksumAddress("0x" + contractAddress);
}

export {generateContractAddress};
