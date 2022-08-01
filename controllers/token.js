import axios from 'axios';
import { Sdk, randomPrivateKey } from 'etherspot';
import CoinGecko from 'coingecko-api';
const PRIVATE_KEY = randomPrivateKey();
const CoinGeckoClient = new CoinGecko();
const generateToken = async (req, res) => {
  try {
    const sdk = new Sdk(PRIVATE_KEY);
    const tokenList = await sdk.getTokenListTokens();

    // coinGecko
    let data = await CoinGeckoClient.coins.all();

    return res.send({
      status: 200,
      message: 'generated',
      data: tokenList
    });
  } catch (err) {
    console.log('this is the api err ====>>>>', err);
    return res.status(500).send(err.message);
  }
};

export { generateToken };


//TokenListToken {
//   address: '0x8E870D67F660D95d5be530380D0eC0bd388289E1',
//   chainId: 1,
//   decimals: 18,
//   logoURI: 'https://tokens.1inch.io/0x8e870d67f660d95d5be530380d0ec0bd388289e1_1.png',
//   name: 'Pax Dollar',
//   symbol: 'USDP'
// }
