/**
 *  usage:
 * node deploy.js <account> <pass>
 */ 
var Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
web3.eth.personal.unlockAccount(process.argv[2], process.argv[3]);
(async () => {
  try {
    let result = await web3.eth.sendTransaction({
      from: process.argv[2],
      data: '0x6080604052348015600f57600080fd5b50603580601d6000396000f3006080604052600080fd00a165627a7a723058208885396df35bef26a4946340dad84b27da98f452b32b9e419b5bb72232d68ce50029',
    })
    console.log(result.transactionHash);
 } 
  catch (error) {
    console.log(error);
  }
  })()