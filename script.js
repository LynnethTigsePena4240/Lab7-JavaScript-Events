//Mouse Events
let mouseE_btn = document.getElementById("mouse_event_btn")
let mouse_msg = document.getElementById("mouse_message")

mouseE_btn.addEventListener("mouseenter", function()
{
    mouse_msg.innerHTML = "The mouse has entered the building!"
    console.log("mouse hover started");
    
})

mouseE_btn.addEventListener("mouseleave", function()
{
    mouse_msg.innerHTML = "The mouse has left the building"
    console.log("mouse hover ended");
})


//Keyboard Events
let input_box = document.getElementById("keyevent")
let keybord_msg = document.getElementById("Keyboard_msg")
input_box.addEventListener("keydown", function(event)
{
   keybord_msg.innerText = `last key pressed ${event.key} `

})

//Form Events
const form = document.getElementById("form")
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const submitbtn = document.getElementById("submitbtn") 

const nameErr = document.getElementById("nameErr")
const emailErr = document.getElementById("emailErr")

form.addEventListener("submit", function(event)
{

    nameErr.textContent = "";
    emailErr.textContent = "";

    let isVaild = true;
    
    if(nameInput.value.trim() === "")
    {
        nameErr.textContent = "Please enter your name"
        isVaild = false;
    }

    if(emailInput.value.trim() === "")
    {
        emailErr.textContent = "Please enter your email"
        isVaild = false;
        
    } 
    else if (!validateEmail(emailInput.value))
    {
        emailErr.textContent = "Please enter a vaild email"
        isVaild = false;
    }

    if (!isVaild)
    {
        event.preventDefault();
    }

})

function validateEmail(email)
{
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email))
}

//Focus events


// event delegation