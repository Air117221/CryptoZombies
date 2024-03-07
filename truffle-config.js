const HDWalletProvider = require("truffle-hdwallet-provider");

const mnemonic = "below below text panda velvet dwarf settle crisp cradle grit depart sound";

module.exports = {
 
  networks: {
   
    mainnet: {
      provider: function () {
       
        return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/YOUR_TOKEN")
      },
      network_id: "1"
    },
   
    sepolia: {
      provider: function () {
       
        return new HDWalletProvider(mnemonic, "https://eth-sepolia.g.alchemy.com/v2/0kPf5de5qDvSmSYPFENfTZGVnuYjkN-7")
      },
      network_id: "11155111"
    }
  }
};
