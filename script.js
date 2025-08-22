const icon=document.querySelector(".fa-bars");
const dropDownMenu=document.getElementById("dropDown");

icon.addEventListener("click", ()=>{
dropDownMenu.classList.toggle("hidden")
})

document.addEventListener("click", (e)=>{
if(dropDownMenu.contains(e.target) && !icon.contains(e.target)){
    dropDownMenu.classList.add("hidden")
}
})