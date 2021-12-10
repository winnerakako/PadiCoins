const BASE_URL = "https://padicoins.com.ng/api";
export const postheaders = {
  method: "POST",
  headers: {
    Accept: "Application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export const GET_BANKS = `${BASE_URL}/banks`;
export const GET_COINS = `${BASE_URL}/coins`;
export const VERIFY_BANK = `${BASE_URL}/verification/bank`;
export const CREATE_WALLET = `${BASE_URL}/wallets`;
export const TRACK_WALLET = `${BASE_URL}/wallets/track`;
export const GET_RATES = `${BASE_URL}/rates`;
export const GET_RATES__ETHEREUM =
  "https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT";
export const GET_RATES__BITCOIN =
  // "https://api.binance.com/api/v3/ticker/price";
  // "https://bitpay.com/api/rates";
  "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT";
