// Stock Picker:  Find Button

document.getElementById('btnFind').addEventListener('click', findStock);

//document.querySelector('btnFind').addEventListener('click', findStock);

function findStock() {
    console.log ("even triggered")
    alert ("triggered")
    document.querySelector("section#stock-picker-header h1').innerHTML = "$244.88"
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