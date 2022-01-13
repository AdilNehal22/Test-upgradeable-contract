require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');

const ALCHEMY_API_KEY = "_5QVXV_ygFJeaurW7DOS91fvJa64ufY-";
const RINKEBY_PRIVATE_KEY = "cd092112a556a2debb7de717d6ae346b9e03fba7bb766ed65f9d4def9026fb5b";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.10",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${RINKEBY_PRIVATE_KEY}`]
    }
  }
};
