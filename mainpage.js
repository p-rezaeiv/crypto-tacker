$(() => {
    const data =
        { "status": { "elapsed": 121, "timestamp": "2023-04-15T06:47:16.270548818Z" }, "data": [{ "id": "1e31218a-e44e-4285-820c-8282ee222035", "name": "Bitcoin", "slug": "bitcoin", "symbol": "BTC", "metrics": { "market_data": { "price_usd": 30419.33271047383, "percent_change_usd_last_24_hours": -1.7151879647303119 } } }, { "id": "21c795f5-1bfd-40c3-858e-e9d7e820c6d0", "name": "Ethereum", "slug": "ethereum", "symbol": "ETH", "metrics": { "market_data": { "price_usd": 2087.8132377408797, "percent_change_usd_last_24_hours": -1.467523371530204 } } }, { "id": "51f8ea5e-f426-4f40-939a-db7e05495374", "name": "Tether", "slug": "tether", "symbol": "USDT", "metrics": { "market_data": { "price_usd": 1.0009008990984216, "percent_change_usd_last_24_hours": 0.474710289439924 } } }, { "id": "7dc551ba-cfed-4437-a027-386044415e3e", "name": "BNB", "slug": "binance-coin", "symbol": "BNB", "metrics": { "market_data": { "price_usd": 329.081758520643, "percent_change_usd_last_24_hours": -1.4690917219074544 } } }, { "id": "4515ba15-2719-4183-b0ca-b9255d55b67e", "name": "USD Coin", "slug": "usd-coin", "symbol": "USDC", "metrics": { "market_data": { "price_usd": 0.999981637550607, "percent_change_usd_last_24_hours": 0.3526491865391275 } } }, { "id": "97775be0-2608-4720-b7af-f85b24c7eb2d", "name": "XRP", "slug": "xrp", "symbol": "XRP", "metrics": { "market_data": { "price_usd": 0.51990975554731, "percent_change_usd_last_24_hours": -2.641942511446739 } } }, { "id": "362f0140-ecdd-4205-b8a0-36f0fd5d8167", "name": "Cardano", "slug": "cardano", "symbol": "ADA", "metrics": { "market_data": { "price_usd": 0.4397382293479546, "percent_change_usd_last_24_hours": -0.1584653080588116 } } }, { "id": "dd9e95b8-5605-4f02-a885-28ddcb40979e", "name": "Lido Staked Ether", "slug": "staked-ether", "symbol": "STETH", "metrics": { "market_data": { "price_usd": 2081.918909731388, "percent_change_usd_last_24_hours": 62.49332072126859 } } }, { "id": "7d793fa7-5fc6-432a-b26b-d1b10769d42e", "name": "Dogecoin", "slug": "dogecoin", "symbol": "DOGE", "metrics": { "market_data": { "price_usd": 0.08911454583980175, "percent_change_usd_last_24_hours": -1.5498179012786404 } } }, { "id": "4b474270-99ba-4a18-869d-11cd3fc0201a", "name": "Polygon", "slug": "polygon", "symbol": "MATIC", "metrics": { "market_data": { "price_usd": 1.147791002589096, "percent_change_usd_last_24_hours": -2.9429350738368316 } } }, { "id": "b3d5d66c-26a2-404c-9325-91dc714a722b", "name": "Solana", "slug": "solana", "symbol": "SOL", "metrics": { "market_data": { "price_usd": 24.168676040224177, "percent_change_usd_last_24_hours": -4.735500437581512 } } }, { "id": "da6a0575-ec95-4c47-855d-5fc6a3e22ada", "name": "Polkadot", "slug": "polkadot", "symbol": "DOT", "metrics": { "market_data": { "price_usd": 6.664444750449443, "percent_change_usd_last_24_hours": -2.026022491594149 } } }, { "id": "c7c3697d-1b9c-42bf-9664-a366634ce2b3", "name": "Litecoin", "slug": "litecoin", "symbol": "LTC", "metrics": { "market_data": { "price_usd": 95.66735970955072, "percent_change_usd_last_24_hours": -2.4840133420570765 } } }, { "id": "5da7bde4-61e9-4a6f-9fc3-7ed66effb198", "name": "Binance USD", "slug": "binance-usd", "symbol": "BUSD", "metrics": { "market_data": { "price_usd": 1.0005977058224749, "percent_change_usd_last_24_hours": 0.04235112191841398 } } }, { "id": "8c4f84a7-6484-4074-8c17-fe363a243e7f", "name": "Shiba Inu", "slug": "shiba-inu", "symbol": "SHIB", "metrics": { "market_data": { "price_usd": 0.0000111689945980316, "percent_change_usd_last_24_hours": -1.7084243603256462 } } }, { "id": "2db6b38a-681a-4514-9d67-691e319597ee", "name": "Avalanche", "slug": "avalanche", "symbol": "AVAX", "metrics": { "market_data": { "price_usd": 19.04928059129323, "percent_change_usd_last_24_hours": -1.0077623323024787 } } }, { "id": "1c077d6e-99c7-491c-b24d-1d359011cd81", "name": "TRON", "slug": "tron", "symbol": "TRX", "metrics": { "market_data": { "price_usd": 0.06586381539262687, "percent_change_usd_last_24_hours": -1.1280282232061671 } } }, { "id": "a3b64831-4288-48bd-a3e7-eb4f77f6f740", "name": "Dai", "slug": "dai", "symbol": "DAI", "metrics": { "market_data": { "price_usd": 0.9993468303374715, "percent_change_usd_last_24_hours": 0.23875893949308866 } } }, { "id": "1d51479d-68f6-4886-8644-2a55ea9007bf", "name": "Uniswap", "slug": "uniswap", "symbol": "UNI", "metrics": { "market_data": { "price_usd": 6.244394647193781, "percent_change_usd_last_24_hours": -2.6475933733914605 } } }, { "id": "81bbf507-29d5-4458-8d42-b81d7c197996", "name": "Wrapped Bitcoin", "slug": "wrapped-bitcoin", "symbol": "WBTC", "metrics": { "market_data": { "price_usd": 30463.830283074065, "percent_change_usd_last_24_hours": -1.830404143422755 } } }] }

    data.data.forEach((e) => {

        const box = $(`<div class="column" style="border:1px solid gray; width:150px; height:300px"></div>`).html(`<p>${e.name}</p>`);


        $('#myDIV').append(box)



    })
})