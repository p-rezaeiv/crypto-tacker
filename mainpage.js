$(() => {
    let items = [];
    const data = getData((data) => {
        displayItems(data.data)
        items = data.data
    })
    const search = document.getElementById("searchbox");
    search.addEventListener("change", (e) => {
        console.log(search.value);
        displayItems(items.filter((e) => e.name.toLowerCase().includes(search.value.toLowerCase())))
        // console.log(items);
    })
})


function displayItems(cryptolist) {
    console.log(cryptolist);
   document.getElementById("myDIV").innerHTML="";
    cryptolist.forEach((e) => {
        const box = $(`<a href="http://localhost:5500/crypto-page.html?symbol=${e.symbol}"><div class="column" style="border:1px solid gray; width:150px; height:300px"><img src="https://www.exir.io/wp-content/themes/exir/assets/app/images/logos/${e.symbol.toLowerCase()}.svg"><p>${e.name}</p><p>${e.symbol}</p><p>${e.metrics.market_data.price_usd}</p><p>${e.metrics.market_data.percent_change_usd_last_24_hours}</p><p>${e.metrics.marketcap.current_marketcap_usd}</p></div></a>`);
        $('#myDIV').append(box)
    })
}
