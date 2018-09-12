var Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
//clave privada sender, cambiar
var priv = "0xba9a4a3837f90baf3802b21a5795b8ec84883174321610938983ec2fcfa0cf04" 
var to = "0x792cf9781f4798022c15175af87a5427b87d34b2";
var pKeyHex = Buffer.from(priv, 'hex');
console.log(pKeyHex);

(async () => {
  try {
    console.log(await web3.eth.getBalance("0xf90945302b0d5f2ef28990e81ea4350fa24923e6"));
    
    let signed = await web3.eth.accounts.signTransaction({
      to: to,
      value: '0x1',
      gas: '0x5208'
    }, priv)
    let result = await web3.eth.sendSignedTransaction(signed.rawTransaction)
    console.log(result);
 } 
  catch (error) {
    console.log(error);
  }
  })()