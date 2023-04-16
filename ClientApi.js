function getData(callback) {

    $.ajax('https://data.messari.io/api/v1/assets?fields=id,name,slug,symbol,metrics/market_data/price_usd,metrics/market_data/percent_change_usd_last_24_hours,metrics/marketcap/current_marketcap_usd', 
    {
        dataType: 'json', // type of response data
        timeout: 5000,     // timeout milliseconds
        success: function (data,status,xhr) {   // success callback function
            callback(data)
        
        },
        error: function (jqXhr, textStatus, errorMessage) { // error callback 
            $('p').append('Error: ' + errorMessage);
        }
    });
}

function getDataBySymbol(symbol, callback) {

    $.ajax('https://data.messari.io/api/v1/assets?fields=id,name,slug,symbol,metrics/market_data/price_usd,metrics/market_data/percent_change_usd_last_24_hours,metrics/marketcap/current_marketcap_usd',
        {
            dataType: 'json', // type of response data
            timeout: 5000,     // timeout milliseconds
            success: function (result, status, xhr) {   // success callback function
                const crypto= result.data.find((e)=> e.symbol.toLowerCase() === symbol.toLowerCase() )
                callback(crypto);

            },
            error: function (jqXhr, textStatus, errorMessage) { // error callback 
                $('p').append('Error: ' + errorMessage);
            }
        });
}



