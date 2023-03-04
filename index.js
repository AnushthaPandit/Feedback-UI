const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");

const containerEl = document.getElementById("container");

let selectedrating ="";
ratingEls.forEach((ratingEl)=>{
    ratingEl.addEventListener("click",(event)=>{

        // console.log(event.target.innerText || event.target.parentNode.innerText);
        removeActive();
        selectedrating = event.target.innertext || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
        
    });
});

btnEl.addEventListener("click",()=>{
    if(selectedrating !==""){
        containerEl.innerHTML = `
            <strong>Thank You!</strong><br>
            <br>
            <strong>
            Feedback:${selectedrating}
            </strong>
            <p>We'll use your feedback to improve our customer support.</p>
        `
    }
});

function removeActive(){
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList.remove("active");
    })
}