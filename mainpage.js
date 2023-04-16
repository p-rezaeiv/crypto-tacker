$(() => {
const data=getData((data)=>{
    data.data.forEach((e) => {
        console.log(e)
                const box = $(`<a href="http://localhost:5500/crypto-page.html?symbol=${e.symbol}"><div class="column" style="border:1px solid gray; width:150px; height:300px"><img src="https://www.exir.io/wp-content/themes/exir/assets/app/images/logos/${e.symbol.toLowerCase()}.svg"><p>${e.name}</p><p>${e.symbol}</p><p>${e.metrics.market_data.price_usd}</p><p>${e.metrics.market_data.percent_change_usd_last_24_hours}</p><p>${e.metrics.marketcap.current_marketcap_usd}</p></div></a>`);
        
        
                $('#myDIV').append(box)
        
        
        
            })
    })
})
  
