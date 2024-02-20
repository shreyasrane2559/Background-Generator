let colorPicker = document.querySelector(".colorPicker");

let changeBgBtn = document.querySelector(".changeBgBtn");


document.addEventListener("click",()=>{
    changeBgBtn.addEventListener("click",()=>{
        document.body.style.backgroundColor = colorPicker.value;

    })

})