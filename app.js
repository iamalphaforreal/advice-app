//const quote = document.getElementsByClassName("quote")

fetch("https://api.adviceslip.com/advice")
  .then((data) => data.json())
  .then((completedata) => {
    console.log(completedata);
    document.getElementById("quote").innerText = completedata.slip.advice;

    document.querySelector("#heading").innerText = (`Advice #${completedata.slip.id}`);
    
const dice = document.querySelector("#dice")
dice.addEventListener("click",()=>{
        window.location.reload();
})

  });