const classselesct = document.querySelector(".container");


const button = document.querySelector("button")
const button2 = document.querySelector(".btn")
const page = document.querySelector(".page")
const innerclass = document.querySelector(".innerclass")
const id=document.querySelector("#choose")
button.addEventListener("click", () => {
    classselesct.style.flexDirection = "column";
})

button2.addEventListener("click", () => {
    innerclass.textContent = "WELCOME TO ELEVATION ACADEMY..."
    innerclass.style.textAline="center"

    button2.style.visibility="hidden"

})
const selectyear = () => {
    document.getElementById("option").innerText =
      document.getElementById("choose").value;
  };
