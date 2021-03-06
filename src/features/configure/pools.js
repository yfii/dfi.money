// id: '池子id',
// name: '池子名字',
// token: '池子代币',
// tokenDescription: '代币描述',
// tokenAddress: '代币ERC20地址',
// tokenDecimals: '存入精度'
// itokenDecimals: '提取精度'
// depostLimit: '存入最大数量限制' 0时不限制
// depostAlert: '存入提示'
// earnedToken: '奖励代币',
// earnedTokenAddress: '奖励代币ERC20地址',
// earnContractAddress: '池子合约地址',
// price ： 挖的代币的价格！
// path price:
export const pools = [
  /*
  {
    chainId: 56,
    id: 'bnb',
    name: 'BNB',
    token: 'BNB',
    tokenDescription: 'BNB',
    tokenAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    tokenAddress: '',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'iWBNB',
    earnedTokenAddress: '0x72dd5Df626ebBc020fdF431502799413c56Ac12C',
    earnContractAddress: '0x72dd5Df626ebBc020fdF431502799413c56Ac12C',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },
  {
    chainId: 56,
    id: 'wbnb',
    name: 'WBNB',
    token: 'WBNB',
    tokenDescription: 'WBNB',
    tokenAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    // depostAlert:'Vault-Dialog-Content',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'iWBNB',
    earnedTokenAddress: '0x72dd5Df626ebBc020fdF431502799413c56Ac12C',
    earnContractAddress: '0x72dd5Df626ebBc020fdF431502799413c56Ac12C',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },*/
  // bsc chainid:56
  {
    chainId: 56,
    id: 'busd',
    name: 'BUSD',
    token: 'BUSD',
    tokenDescription: 'BUSD',
    tokenAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'BUSD',
    claimedTokenAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    earnedTokenAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    earnContractAddress: '0xeeAEd53722f1e76946eFf73BCaac35d4873c0033',
    defaultApy: "42.63",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
  {
    chainId: 56,
    id: 'usdt',
    name: 'USDT',
    token: 'USDT',
    tokenDescription: 'USDT',
    tokenAddress: '0x55d398326f99059ff775485246999027b3197955',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'USDT',
    claimedTokenAddress: '0x55d398326f99059ff775485246999027b3197955',
    earnedTokenAddress: '0x55d398326f99059ff775485246999027b3197955',
    earnContractAddress: '0xa6F99df9d02fD9B4a505cDdDc8Ee76dd5f7E2Fa3',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
  {
    chainId: 56,
    id: 'usdc',
    name: 'USDC',
    token: 'USDC',
    tokenDescription: 'USDC',
    tokenAddress: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'USDC',
    claimedTokenAddress: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    earnedTokenAddress: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    earnContractAddress: '0x2CAF8Caf70F6B4Ad5FD61Fa170cC7E99574f5B91',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
  {
    chainId: 56,
    id: 'dai',
    name: 'DAI',
    token: 'DAI',
    tokenDescription: 'DAI',
    tokenAddress: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'DAI',
    claimedTokenAddress: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    earnedTokenAddress: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    earnContractAddress: '0x5Dc36d8f164BA8A2FCdA8C1Fa47db0b8425b2785',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
  //Heco chainid:128
  {
    chainId: 128,
    id: 'ht',
    name: 'HT',
    token: 'HT',
    tokenDescription: 'HT',
    tokenAddress: '',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'WHT',
    claimedTokenAddress: '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f',
    earnedTokenAddress: '0x59dfe9c9b67ccf62b4d42c7a884c1ccb20adffaa',
    earnContractAddress: '0x59dfe9c9b67ccf62b4d42c7a884c1ccb20adffaa',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },
  {
    chainId: 128,
    id: 'wht',
    name: 'WHT',
    token: 'WHT',
    tokenDescription: 'WHT',
    tokenAddress: '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    // depostAlert:'Vault-Dialog-Content',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'WHT',
    claimedTokenAddress: '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f',
    earnedTokenAddress: '0x59dfe9c9b67ccf62b4d42c7a884c1ccb20adffaa',
    earnContractAddress: '0x59dfe9c9b67ccf62b4d42c7a884c1ccb20adffaa',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },
  {
    chainId: 128,
    id: 'husd',
    name: 'HUSD',
    token: 'HUSD',
    tokenDescription: 'HUSD',
    tokenAddress: '0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047',
    tokenDecimals: 8,
    itokenDecimals: 8,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'HUSD',
    claimedTokenAddress: '0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047',
    earnedTokenAddress: '0x1602a1298a1521685d9ee098d20cb3f9020468e0',
    earnContractAddress: '0x1602a1298a1521685d9ee098d20cb3f9020468e0',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
  {
    chainId: 128,
    id: 'eth',
    name: 'ETH',
    token: 'ETH',
    tokenDescription: 'ETH',
    tokenAddress: '0x64FF637fB478863B7468bc97D30a5bF3A428a1fD',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'ETH',
    claimedTokenAddress: '0x64FF637fB478863B7468bc97D30a5bF3A428a1fD',
    earnedTokenAddress: '0x64FF637fB478863B7468bc97D30a5bF3A428a1fD',
    earnContractAddress: '0x882814c0520a3790e5f4b83467eef106eb4c7b76',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
  {
    chainId: 128,
    id: 'hbtc',
    name: 'HBTC',
    token: 'HBTC',
    tokenDescription: 'HBTC',
    tokenAddress: '0x66a79d23e58475d2738179ca52cd0b41d73f0bea',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'HBTC',
    claimedTokenAddress: '0x66a79d23e58475d2738179ca52cd0b41d73f0bea',
    earnedTokenAddress: '0xd6027458c4f8441eea19e2b6a6e8cd60119c8ea1',
    earnContractAddress: '0xd6027458c4f8441eea19e2b6a6e8cd60119c8ea1',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
  {
    chainId: 128,
    id: 'bch',
    name: 'BCH',
    token: 'BCH',
    tokenDescription: 'BCH',
    tokenAddress: '0xeF3CEBD77E0C52cb6f60875d9306397B5Caca375',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'BCH',
    claimedTokenAddress: '0xeF3CEBD77E0C52cb6f60875d9306397B5Caca375',
    earnedTokenAddress: '0x34f5c733eef861a659d9360bd1f0f71647e6d090',
    earnContractAddress: '0x34f5c733eef861a659d9360bd1f0f71647e6d090',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
  {
    chainId: 128,
    id: 'dot',
    name: 'DOT',
    token: 'DOT',
    tokenDescription: 'DOT',
    tokenAddress: '0xA2c49cEe16a5E5bDEFDe931107dc1fae9f7773E3',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'DOT',
    claimedTokenAddress: '0xA2c49cEe16a5E5bDEFDe931107dc1fae9f7773E3',
    earnedTokenAddress: '0xaf67567da1c1e230acad336a93b975cc7ae91921',
    earnContractAddress: '0xaf67567da1c1e230acad336a93b975cc7ae91921',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
  {
    chainId: 128,
    id: 'fil',
    name: 'FIL',
    token: 'FIL',
    tokenDescription: 'FIL',
    tokenAddress: '0xae3a768f9aB104c69A7CD6041fE16fFa235d1810',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'FIL',
    claimedTokenAddress: '0xae3a768f9aB104c69A7CD6041fE16fFa235d1810',
    earnedTokenAddress: '0x7d17bbc18caf18f96f06ce73954b025aabd0a9b2',
    earnContractAddress: '0x7d17bbc18caf18f96f06ce73954b025aabd0a9b2',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
  {
    chainId: 128,
    id: 'busd',
    name: 'BUSD',
    token: 'BUSD',
    tokenDescription: 'BUSD',
    tokenAddress: '0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047',
    tokenDecimals: 8,
    itokenDecimals: 8,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'BUSD',
    claimedTokenAddress: '0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047',
    earnedTokenAddress: '0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047',
    earnContractAddress: '0x902f551edc28ccfa5d2f84f10f8acb50d6b00613',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    liquidityOnly: true,
  },
  {
    chainId: 128,
    id: 'usdt',
    name: 'USDT',
    token: 'USDT',
    tokenDescription: 'USDT',
    tokenAddress: '0xa71EdC38d189767582C38A3145b5873052c3e47a',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'USDT',
    claimedTokenAddress: '0xa71EdC38d189767582C38A3145b5873052c3e47a',
    earnedTokenAddress: '0xa71EdC38d189767582C38A3145b5873052c3e47a',
    earnContractAddress: '0x20c3d3ccf4789b5844069d94b884a7bbe0b0d2da',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
  {
    chainId: 128,
    id: 'ltc',
    name: 'LTC',
    token: 'LTC',
    tokenDescription: 'LTC',
    tokenAddress: '0xecb56cf772b5c9a6907fb7d32387da2fcbfb63b4',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'USDT',
    claimedTokenAddress: '0xecb56cf772b5c9a6907fb7d32387da2fcbfb63b4',
    earnedTokenAddress: '0xecb56cf772b5c9a6907fb7d32387da2fcbfb63b4',
    earnContractAddress: '0xb85f4eefeaf251f89bd18d3fd02fc555a7ac2dc8',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
  // eth chainid:1
  {
    chainId: 1,
    id: 'eth',
    name: 'ETH',  
    token: 'ETH',
    tokenDescription: 'ETH',
    tokenAddress: '',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'iWETH',
    earnedTokenAddress: '0xa8EA49a9e242fFfBdECc4583551c3BcB111456E6',
    earnContractAddress: '0xa8EA49a9e242fFfBdECc4583551c3BcB111456E6',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },
  {
    chainId: 1,
    id: 'weth',
    name: 'WETH',  
    token: 'WETH',
    tokenDescription: 'WETH',
    tokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'iWETH',
    earnedTokenAddress: '0xa8EA49a9e242fFfBdECc4583551c3BcB111456E6',
    earnContractAddress: '0xa8EA49a9e242fFfBdECc4583551c3BcB111456E6',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },
  {
    chainId: 1,
    id: 'usdt',
    name: 'USDT',  
    token: 'USDT',
    tokenDescription: 'USDT',
    tokenAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    tokenDecimals: 6,
    itokenDecimals: 6,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'iUSDT',
    earnedTokenAddress: '0x72Cf258c852Dc485a853370171d46B9D29fD3184',
    earnContractAddress: '0x72Cf258c852Dc485a853370171d46B9D29fD3184',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },{
    chainId: 1,
    id: 'usdc',
    name: 'USDC',  
    token: 'USDC',
    tokenDescription: 'USDC',
    tokenAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    tokenDecimals: 6,
    itokenDecimals: 6,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'iUSDC',
    earnedTokenAddress: '0x23B4dB3a435517fd5f2661a9c5a16f78311201c1',
    earnContractAddress: '0x23B4dB3a435517fd5f2661a9c5a16f78311201c1',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },
  {
    chainId: 1,
    id: 'dai',
    name: 'DAI',  
    token: 'DAI',
    tokenDescription: 'DAI',
    tokenAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: 'https://docs.dfi.money/#/zh-cn/buy-tokens?id=_2-dai%e5%85%91%e6%8d%a2',
    earnedToken: 'iDAI',
    earnedTokenAddress: '0x1e0DC67aEa5aA74718822590294230162B5f2064',
    earnContractAddress: '0x1e0DC67aEa5aA74718822590294230162B5f2064',
    defaultApy: "86.3",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },
  {
    chainId: 1,
    id: 'husd',
    name: 'HUSD',  
    token: 'HUSD',
    tokenDescription: 'HUSD',
    tokenAddress: '0xdF574c24545E5FfEcb9a659c229253D4111d87e1',
    tokenDecimals: 8,
    itokenDecimals: 18,
    depostLimit:50000,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'iHUSD',
    earnedTokenAddress: '0xED434A25612B8d64E3257Fff5f96B33031729fDF',
    earnContractAddress: '0xED434A25612B8d64E3257Fff5f96B33031729fDF',
    defaultApy: "42.63",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },
  {
    chainId: 1,
    id: 'busd',
    name: 'BUSD',  
    token: 'BUSD',
    tokenDescription: 'BUSD',
    tokenAddress: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'iBUSD',
    earnedTokenAddress: '0xc46d2fC00554f1f874F37e6e3E828A0AdFEFfbcB',
    earnContractAddress: '0xc46d2fC00554f1f874F37e6e3E828A0AdFEFfbcB',
    defaultApy: "42.63",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },
  {
    chainId: 1,
    id: 'hbtc',
    name: 'HBTC',  
    token: 'HBTC',
    tokenDescription: 'HBTC',
    tokenAddress: '0x0316eb71485b0ab14103307bf65a021042c6d380',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'iHBTC',
    earnedTokenAddress: '0x26AEdD2205FF8a87AEF2eC9691d77Ce3f40CE6E9',
    earnContractAddress: '0x26AEdD2205FF8a87AEF2eC9691d77Ce3f40CE6E9',
    defaultApy: "86.3",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },
  {
    chainId: 1,
    id: 'ycrv',
    name: 'yCRV',  
    token: 'yCRV',
    tokenDescription: 'yCRV',
    tokenAddress: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: 'https://docs.dfi.money/#/using-crv?id=how-to-get-ycrv',
    tokenDescriptionUrl2: 'https://docs.dfi.money/#/zh-cn/buy-tokens?id=_5-ycrv%e5%85%91%e6%8d%a2',
    earnedToken: 'iYCRV',
    earnedTokenAddress: '0x3E3db9cc5b540d2794DB3861BE5A4887cF77E48B',
    earnContractAddress: '0x3E3db9cc5b540d2794DB3861BE5A4887cF77E48B',
    defaultApy: "42.63",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },
]
