const Web3 = require('web3');
const rpcURL = 'https://goerli.infura.io/v3/5b80199f393740498456714b0649be4d';

const web3 = new Web3(rpcURL);

const txId =
  '0xf35f8f04b38c0fb4a88d496568d4c72f005226be61959e20447ec0f721c2995a';

web3.eth.getTransaction(txId).then((obj) => {
  console.log(obj);
});
