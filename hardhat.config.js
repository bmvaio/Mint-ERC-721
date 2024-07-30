require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "2a47670d005e40fd9abdf29e1ff87531110b3bbea3c050af80a37c90bee14cb4";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
