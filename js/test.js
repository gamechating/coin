// exports.__esModule = true;
// exports.web3 = exports.ethereum = exports.walletLink = void 0;
// var react_1 = require("react");
// var core_1 = require("@web3-react/core");
// var hooks_1 = require("../hooks");
// var connectors_1 = require("../lib/connectors");
// // walletlink
// var walletlink_1 = require("walletlink");
// var web3_1 = require("web3");
// // const APP_NAME = 'My Awesome App'
// var APP_NAME = 'ccgreat';
// var APP_LOGO_URL = 'https://example.com/logo.png';
// // const ETH_JSONRPC_URL = 'https://mainnet.infura.io/v3/<YOUR_INFURA_API_KEY>'
// // const ETH_JSONRPC_URL = 'https://mainnet.infura.io/v3/16b3844622e34365a8bcdd1d424d65f0'
// // const CHAIN_ID = 1  // zhengshi
// var ETH_JSONRPC_URL = 'https://ropsten.infura.io/v3/16b3844622e34365a8bcdd1d424d65f0';
// var CHAIN_ID = 3; // test
// // Initialize WalletLink
// exports.walletLink = new walletlink_1["default"]({
//     appName: APP_NAME,
//     appLogoUrl: APP_LOGO_URL,
//     darkMode: false
// });
// Initialize a Web3 Provider object
// exports.ethereum = exports.walletLink.makeWeb3Provider(ETH_JSONRPC_URL, CHAIN_ID);
// Initialize a Web3 object
// exports.web3 = new web3_1["default"](exports.ethereum);
export function WalletLinkDo () {
    alert("game is ok");
    console.log("game is ok");
    ethereum.enable()
    // exports.ethereum.enable().then(function (accounts) {
    //     console.log("User's address is ".concat(accounts[0]));
    //     alert("User's address is ".concat(accounts[0]));
    //     exports.web3.eth.defaultAccount = accounts[0];
    //     // web3.eth.getGasPrice()
    //     // ethereum.request()
    //     // let Balance: string
    //     exports.web3.eth.getBalance(accounts[0]).then(function (balace) {
    //         console.log("money: " + balace);
    //         alert("usermoney : " + balace);
    //     });
    //     // let Agas : string
    //     // Agas = ''
    //     var contractAddress = '0x27afd216475849ae176f37045b6d4a22611740a2';
    //     var contract = new exports.web3.eth.Contract(exports.web3.eth.abi, contractAddress, { from: accounts[0] });
    //     var rawTransaction = { "from": myAddress, "gasPrice": exports.web3.utils.toHex(2 * 1e9), "gasLimit": exports.web3.utils.toHex(210000), "to": contractAddress, "value": "0x0", "data": contract.methods.transfer(toAddress, amount).encodeABI(), "nonce": exports.web3.utils.toHex(count) };
    //     var transaction = new Tx(rawTransaction);
    //     transaction.sign(privateKey);
    //     exports.web3.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex'));
    //     // check the balance
    //     contract.methods.balanceOf(myAddress).call().then(function (balance) { console.log(balance); });
    //     exports.web3.eth.getGasPrice().then(function (gas) {
    //         console.log("gasPrice: " + gas);
    //         alert("gasPrice : " + gas);
    //         // let gasPrice : number
    //         // gsn = ((Number(gas)  * 80000) / (10**18)).toFixed(6)
    //         exports.web3.eth.getCode("0x156cad9003b8f2fa16430c740c5d68fee40ffa62").then(function (code) {
    //             alert("code == " + code);
    //             exports.web3.eth.sendTransaction({
    //                 // from: accounts[0],
    //                 data: code,
    //                 gas: "13393"
    //             });
    //         });
    //     });
    //     // web3.eth.sendTransaction()
    //     // Heyue(web3.eth.defaultAccount)
    // });
};

