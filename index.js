// Stock Picker:  Find Button
require('dotenv').config();
console.log (process.env.FINNHUB_API_KEY);

document.getElementById('btnFind').addEventListener('click', findStock);

function findStock() {
   
  
    //console.log(process.env);
    const api_key = process.env.FINNHUB_API_KEY;
    alert ("Clicked")
    //alert(process.env.FINNHUB_API_KEY)

    // const url = "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=";
    // const finnhubUrl = url+api_key
 
    // console.log ("even triggered")
    // alert ("triggered")
    //document.querySelector("section#stock-picker-header h1').innerHTML = "$244.88"

}



// button.addEventListener('click', () => {
//     console.log('Button clicked EventListener')
// })

// function addClickEvent(target){
//     target.addEventListener('click', (e)=>{
//         window.alert ("Clicked")
//         console.log ("clicked")
//     })

// }