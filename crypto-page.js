const cryptoInfo = {
  "id": "1e31218a-e44e-4285-820c-8282ee222035",
  "name": "BITCOIN",
  "slug": "bitcoin",
  "symbol": "BTC",
  "metrics": {
    "market_data": {
      "price_usd": 30450.68673965129700,
      "percent_change_usd_last_24_hours": -0.9732848144396884
    }
  }
}

createCryptoNameElement();
createCryptoSymbolElement();
createCryptopriceusdElement();
createCoinPercentChangeElement();
createCryptoCoinImgElement();

function createCryptoNameElement() {
  const cryptoName = document.getElementById('cryptoName')
  cryptoName.textContent = cryptoInfo.name;
  console.log(cryptoName);
  // return cryptoName;
}

function createCryptoSymbolElement() {
  const cryptoSymbol = document.getElementById('cryptoabr')
  cryptoSymbol.textContent = cryptoInfo.symbol;
}
function createCryptopriceusdElement() {
  const cryptopriceusd = document.getElementById('coinPrice')
  cryptopriceusd.textContent = cryptoInfo.metrics.market_data.price_usd.toFixed(2)+' '+'USD';
}

function createCoinPercentChangeElement() {
  const CoinPercentChange = document.getElementById('coinPercentChange')
  CoinPercentChange.textContent = '('+cryptoInfo.metrics.market_data.percent_change_usd_last_24_hours.toFixed(2)+'%)';
}

function createCryptoCoinImgElement() {
  const CryptoCoinImg = document.getElementById('cryptoImage')
  CryptoCoinImg.src = `https://www.exir.io/wp-content/themes/exir/assets/app/images/logos/${cryptoInfo.symbol.toLowerCase()}.svg`;
}


