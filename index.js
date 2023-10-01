
function getApiKey () {
    //alert ("get api key")
    // require('dotenv').config();
    // console.log(process.env);
    // console.log (process.env.FINNHUB_API_KEY)
    api_key ="ck9dp29r01qq65jkavc0ck9dp29r01qq65jkavcg"
    fetchStocks (api_key)
 
}
function fetchStocks(api_key) {

  const stockCode = document.getElementById("code").value;
  const urlPreQuote = "https://finnhub.io/api/v1/quote?symbol="
  const urlPreProfile2 = "https://finnhub.io/api/v1/stock/profile2?symbol="
    //const api_key ="ck9dp29r01qq65jkavc0ck9dp29r01qq65jkavcg"

    const urlQuote = urlPreQuote + stockCode + "&token=" + api_key
    const urlProfile2 = urlPreProfile2 + stockCode + "&token=" + api_key

    const stocks = fetch (urlQuote)
        .then ((resp) => resp.json())
      //  .then ((json) => console.log(json))
        .then (data => {
                //console.log (data)
                let stocks = data
                //console.log (stocks.c, stocks.h, stocks.l)
                
                document.getElementById('price-data-labels').innerHTML = ' low ' +  '-----' + ' current ' + '-----' + ' high ' + '<br>'
                document.getElementById('price-data-candle').innerHTML = stocks.l +  '------' + stocks.c + '------' + stocks.h
        //.then (callMyFunction())
        })

        const profile2 = fetch (urlProfile2)
        .then ((resp2) => resp2.json())
      //  .then ((json) => console.log(json))
        .then (data2 => {
                console.log (data2)
                let profile2 = data2
                console.log (profile2.logo)
                const companyLogo = '<img src=' + profile2.logo + ' width="100" height="100" >'
                console.log (companyLogo)
                document.getElementById('profile2-ticker').innerHTML = profile2.ticker
                document.getElementById('profile2-name').innerHTML = profile2.name
                document.getElementById('profile2-industry').innerHTML = profile2.finnhubIndustry
               // document.getElementById('profile2-capitalisation').innerHTML = profile2.marketCapitalization
                document.getElementById('profile2-logo').innerHTML = companyLogo;
                document.getElementById('btn-peers').value = profile2.finnhubIndustry;

        })
          getPeers();
          getRecommendation();
}


async function getMarketNews() {

  console.log ("get Market News function call");
  const urlNews = "https://finnhub.io/api/v1/news?category=general&token=ck9dp29r01qq65jkavc0ck9dp29r01qq65jkavcg"
  const profile2 = fetch (urlNews)
  .then ((resp2) => resp2.json())
//.then ((json) => console.log(json))
  .then (data3 => {
          let news = data3
          let i = 0;
          document.getElementById("news-headline").innerHTML = news[i].category + ': ' + news[i].source + ': ' + news[i].headline + ' ' + news[i].summary;
          const pages = news.length;
         }
  );


  const stockCode = document.getElementById("code").value;
  const urlPrePeers = "https://finnhub.io/api/v1/stock/peers?symbol="
  const urlPeers = urlPrePeers + stockCode + "&token=" + api_key

  const peers = fetch(urlPeers)
      .then ((resp4) => resp4.json())
      //.then ((json) => console.log(json))
      .then (data4 => {
        //console.log (data4)

        let peers=data4
        //console.log (peers)
        peers.forEach(myFunction);

        function myFunction() {
          document.getElementById("similar-company").innerHTML = peers;
          const btn = document.createElement("button");
          //const btnText = documenet.createTextNode("test") ;
          document.body.appendChild(btnText)
        }
      })
  }

 function getPeers() {
  //alert ("get peers")
  api_key ="ck9dp29r01qq65jkavc0ck9dp29r01qq65jkavcg"
  const stockCode = document.getElementById("code").value;
  const urlPrePeers = "https://finnhub.io/api/v1/stock/peers?symbol="
  const urlPeers = urlPrePeers + stockCode + "&token=" + api_key

  const peers = fetch(urlPeers)
      .then ((resp4) => resp4.json())
      //.then ((json) => console.log(json))
      .then (data4 => {
        //console.log (data4)
        let peers=data4
        document.getElementById("similar-company").innerHTML = peers;
        console.log (peers[0], peers[1])

          for (let i = 0; i < peers.length; i++) {
            const btn = document.createElement("button");
            btn.textContent = peers[i]
            peers.recommendation.append("btn")
          }
      })
}

function getRecommendation () {
 //url="https://finnhub.io/api/v1/stock/recommendation?symbol=AAPL&token="
 const urlPreRecommendation = "https://finnhub.io/api/v1/stock/recommendation?symbol="
 const stockCode = document.getElementById("code").value;
 api_key ="ck9dp29r01qq65jkavc0ck9dp29r01qq65jkavcg"
 const urlRecommendation = urlPreRecommendation + stockCode + "&token=" + api_key

 const recommendation = fetch (urlRecommendation)
      .then ((resp5) => resp5.json())
      //.then ((json) => console.log(json))
      .then (data5 => {
            let recommendation = data5
            document.getElementById("latest-poll").innerHTML =
            recommendation[0].buy + ' buy, ' +
            recommendation[0].sell + ' sell, ' +
            recommendation[0].hold + ' hold, ' +
            recommendation[0].strongBuy + ' strong buy, ' +
            recommendation[0].strongSell +' strong sell ' 

  });
}

function bigLogo () {
  //alert ('big logo')

  document.getElementById('profile2-logo').height = 1200;
  document.getElementById('profile2-logo').width = 1200;
}

function timeframeMonthly () {
 // alert ('Monthly')
 document.getElementById('price-chart').innerHTML = 'src="https://widget.finnhub.io/widgets/stocks/chart?symbol=AAPL&watermarkColor=blue&backgroundColor=black&textColor=white"'

}

function timeframeWeekly () {
 // alert ('Weekly')

}

function timeframeDaily () {
 // alert ('Daily')

}

document.getElementById('monthly').addEventListener('mouseover', (event) => {
  //alert ('mouseover')
  timeframeMonthly ()

});

document.getElementById('daily').addEventListener('mouseover', (event) => {
  //alert ('mouseover')
  timeframeDaily ()

});

document.getElementById('weekly').addEventListener('mouseover', (event) => {
  //alert ('mouseover')
  timeframeWeekly ()

});

document.getElementById('daily').addEventListener('mouseover', (event) => {
  //alert ('mouseover')
  timeframeWeekly ()

});

document.getElementById('profile2-logo').addEventListener('mouseover', (event) => {
  //alert ('mouseover')
  bigLogo ()

});


document.getElementById('btnPeers').addEventListener('click', function() {
  getPeers();
  //console.log ("get Peers function call");
});


document.getElementById('btnFind').addEventListener('click', function() {
        getApiKey();
        console.log ("fetchStocks function call");
      });



document.getElementById('btnNews').addEventListener('click', function() {
        getMarketNews();
        //console.log ("get Market News function call");
      });


document.addEventListener ('DOMContentLoaded', (event) => {
        //alert ("loaded")
        getMarketNews()
      });

document.getElementById('code').addEventListener ('keydown', function() {
  getApiKey();
  getPeers();
})
// document.getElementById('code').addEventListener ('keydown', => {
//   alert ("Key is down")
// });
