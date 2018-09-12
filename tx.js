/**
 *  usage:
 * node tx.js <account> <pass>
 */ 
var Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
web3.eth.personal.unlockAccount(process.argv[2], process.argv[3])
var to = "0x792cf9781f4798022c15175af87a5427b87d34b2";
(async () => {
  try {
    let result = await web3.eth.sendTransaction({
      from: process.argv[2],
      to: to,
      value: '0x1',
    })
    console.log(result.transactionHash);
 } 
  catch (error) {
    console.log(error);
  }
  })()