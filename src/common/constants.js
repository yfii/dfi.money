export const ChainId = {
    MAINNET : 1,
    ROPSTEN : 3,
    RINKEBY : 4,
    GÖRLI : 5,
    KOVAN : 42,
    BSC_MAINNET : 56,
    BSC_TESTNET : 97,
    HECO_MAINNET : 128,
    HECO_TESTNET : 256,
    MATIC_MAINNET : 137,
  }
  
  export const ReadonlyRpcEndpoint = {
    [ChainId.MAINNET]: "https://mainnet.infura.io/v3/3016bb15ef69443f95c8538ec3b1b300",
    [ChainId.KOVAN]: "https://kovan.etherscan.io",
    [ChainId.HECO_MAINNET]: "https://http-mainnet.hecochain.com",
    [ChainId.HECO_TESTNET]: "https://http-testnet.hecochain.com",
    [ChainId.BSC_TESTNET]: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    [ChainId.BSC_MAINNET]: "https://bsc-dataseed.binance.org",
  };
  
  export const ReadonlyExplorerLink = {
    [ChainId.MAINNET]: "https://etherscan.io/address/",
    [ChainId.KOVAN]: "https://kovan.etherscan.io/address",
    [ChainId.HECO_MAINNET]: "https://scan.hecochain.com/address/",
    [ChainId.HECO_TESTNET]: "",
    [ChainId.BSC_MAINNET]: "https://bscscan.com/address/",
    [ChainId.BSC_TESTNET]: "",
  };
  