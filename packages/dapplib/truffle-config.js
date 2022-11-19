require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue rifle stereo puppy grace nasty furnace gasp'; 
let testAccounts = [
"0xc2eebb23e103c357598dd7aedd58b8e8dbe23e5e41402cea6223bd260101d99b",
"0x320ce2e91a3fceb9f521053b9af1d3c44f714a5e3e20c5b58ea029bb83e00f0e",
"0xf70a219257ba11f5e72a9da29a7905bd4e4e04a2979bf78cc5dac927da0c5782",
"0x96daa5ec1784fab63b68e107be6d5ad304fd633c5e13c4ac5728c29e12ffe0e1",
"0xe7b9f8e47d8644a9ffd49b91934b29f2f9a529128153774559bbe483a8694588",
"0x3260e4c583d5aac731acf6b220fc50cdde13aeb41ce4f5adcb272e383be4cad2",
"0xa4fb06d1766ff39c88e783ffa2a9d0f1609adc6526923c82f78a50b3cd09843e",
"0xa75653bd1387b52f3ff6a68d478f032536ef304188399dc8ab849f225f0f7694",
"0x32ef8d5cc918fcd4cbb100b7a718074c9e7489d7b4d38d1c77dbe7dc2dbc50b7",
"0x02d3f8b0cce31d4cf0392bd19fe660069825f6d3606e8f2805dd41575bfc49b9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

