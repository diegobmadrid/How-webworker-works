const worker = new Worker("worker.js");

const sumButton = document.getElementById("sumButton");
const bgButton = document.getElementById("bgButton");

sumButton.addEventListener("click", (event) => {
    worker.postMessage("Hello worker");
    // alert(`La suma final es: ${sum}`)
})

worker.onmessage = function(message){
    alert(message.data);
}

bgButton.addEventListener("click", (event) => {
    if(document.body.style.background !== "green") document.body.style.background = "green"
    else document.body.style.background = "blue"
})