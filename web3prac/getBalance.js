const Web3 = require('web3');
const rpcURL = 'https://goerli.infura.io/v3/5b80199f393740498456714b0649be4d';

const web3 = new Web3(rpcURL);

const account = '0x9FdDBF84f5786bbF152E8318d1061A26e8426eB0';

web3.eth
  .getBalance(account)
  .then((bal) => {
    console.log(`지갑 ${account}의 잔액은 ... ${bal} 입니다.`);
    return web3.utils.fromWei(bal, 'ether');
  })
  .then((eth) => {
    console.log(`이더 단위로는 ${eth} ETH 입니다.`);
  });
