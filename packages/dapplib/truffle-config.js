require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski strong reflect machine home hunt merry flock soldier'; 
let testAccounts = [
"0x8891eacb6fbae5fb383ecb226d2a510927ce10a575ea467a719eb3ae8155c052",
"0xa54c0db35920a6770e65b4bdcabebcd9d0ec8b417f4270e16b3146eb94e981f5",
"0x8b16834ae8d237beae53e7e28ccb1d63e86441512e97323656f05a31d84dfc62",
"0x2dacd065d43f21240110a447a00da4df037fb6f308005f4ba6e129ff13ee28ce",
"0x0b5fdb64405b770871881a66a1c73465b8bd0efba2df7fe94c5e90815ca21fde",
"0xc7bb5416bf2a7dd38d5ff6e260b7a7cb523b59af99097a27094eec2bc0ccf05e",
"0x4d469f852c9daf4b4f413e711483e240ad24f4867da5d050addea9b116f45f3e",
"0xbbfdbd6df2a8488e3c0c83bb8b27ff2f90482c5758f4281040f360f93d73a7b4",
"0x7f3a47936a43d0ce854e53aa923e8aa69b0027222bb77daf27849ff4956fc94d",
"0xb7659ed050dbfbac97e4ba837765d6e0471c27a1462bfc6bc95db9d9ecb7adb4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
