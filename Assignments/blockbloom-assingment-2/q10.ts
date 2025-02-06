import {ethers} from "ethers";

async function signTransaction(
    privateKey: string,
    transaction: ethers.TransactionRequest
):Promise<{hash: string; signature: ethers.Signature;rawTransaction: string}>{ 
    const wallet = new ethers.Wallet(privateKey);
    const signedTransaction = await wallet.signTransaction(transaction);
    const transactionHash = ethers.utils.keccak256(signedTransaction);
    const signature = ethers.utils.splitSignature(wallet.signingKey.signDigest(transactionHash));

    return {
        hash: transactionHash,
        signature: {
            r: signature.r,
            s: signature.s,
            v: signature.v,
        },
        rawTransaction: signedTransaction,
    };
}

async function verifyTransaction(
    rawTransaction: string,
    signature: ethers.Signature,
    expectedAddress: string
): Promise<boolean> {
    const transactionHash = ethers.utils.keccak256(rawTransaction);
    const recoveredAddress = ethers.utils.recoverAddress(transactionHash, signature);

    return recoveredAddress.toLowerCase() === expectedAddress.toLowerCase();
}


export {signTransaction, verifyTransaction};
