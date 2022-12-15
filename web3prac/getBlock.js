const Web3 = require('web3');
const rpcURL = 'https://goerli.infura.io/v3/5b80199f393740498456714b0649be4d';

const web3 = new Web3(rpcURL);

const blockNum = '8137776';

web3.eth.getBlock(blockNum).then((obj) => {
  console.log(obj);
});
