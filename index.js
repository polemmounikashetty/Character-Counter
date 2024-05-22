var textarea=document.getElementById("textarea");
const TotalCharacter=document.getElementById("Total-Character");
const Remaining=document.getElementById("Remaining");

textarea.addEventListener("keyup",()=>{
    console.log("key pressed");
    updateconter()
})
function updateconter(){
    TotalCharacter.innerText=textarea.value.length;
    Remaining.innerText=textarea.getAttribute("maxlength")-textarea.value.length;
}