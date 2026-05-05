export const cryptoData = [
  { id: 1, name: "Bitcoin", symbol: "BTC", price: 67243.12, change24h: 2.34, image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png", createdAt: "2009-01-03" },
  { id: 2, name: "Ethereum", symbol: "ETH", price: 3521.47, change24h: 1.87, image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png", createdAt: "2015-07-30" },
  { id: 3, name: "Solana", symbol: "SOL", price: 178.92, change24h: 5.61, image: "https://assets.coingecko.com/coins/images/4128/large/solana.png", createdAt: "2020-03-16" },
  { id: 4, name: "Dogecoin", symbol: "DOGE", price: 0.1723, change24h: -1.24, image: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png", createdAt: "2013-12-06" },
  { id: 5, name: "Cardano", symbol: "ADA", price: 0.4521, change24h: 3.12, image: "https://assets.coingecko.com/coins/images/975/large/cardano.png", createdAt: "2017-09-29" },
  { id: 6, name: "XRP", symbol: "XRP", price: 0.5234, change24h: -0.87, image: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png", createdAt: "2012-06-02" },
  { id: 7, name: "Avalanche", symbol: "AVAX", price: 38.14, change24h: 6.43, image: "https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png", createdAt: "2020-09-21" },
  { id: 8, name: "Chainlink", symbol: "LINK", price: 14.72, change24h: 4.21, image: "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png", createdAt: "2017-09-19" },
  { id: 9, name: "Polkadot", symbol: "DOT", price: 7.83, change24h: -2.15, image: "https://assets.coingecko.com/coins/images/12171/large/polkadot.png", createdAt: "2020-08-19" },
  { id: 10, name: "Shiba Inu", symbol: "SHIB", price: 0.00002341, change24h: 8.92, image: "https://assets.coingecko.com/coins/images/11939/large/shiba.png", createdAt: "2020-08-01" },
  { id: 11, name: "Uniswap", symbol: "UNI", price: 9.14, change24h: 1.05, image: "https://assets.coingecko.com/coins/images/12504/large/uni.jpg", createdAt: "2020-09-17" },
  { id: 12, name: "Litecoin", symbol: "LTC", price: 83.27, change24h: -0.43, image: "https://assets.coingecko.com/coins/images/2/large/litecoin.png", createdAt: "2011-10-07" },
];

export const getTopGainers = () =>
  [...cryptoData].sort((a, b) => b.change24h - a.change24h);

export const getNewListings = () =>
  [...cryptoData].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));