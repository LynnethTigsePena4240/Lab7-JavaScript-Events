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

let success_msg = document.getElementById("success_msg")
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

    else{
        event.preventDefault();
        success_msg.innerHTML = "Submission sent!"
    }

})

function validateEmail(email)
{
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email))
}

//Focus events
let input = document.getElementById("focus_input")
let focus_msg = document.getElementById("focus_msg")

input.addEventListener("focus", function()
{
    focus_msg.innerHTML = "Focused"
})

input.addEventListener("blur", function()
{
    focus_msg.innerHTML = "Unfocused aka its bluryy!"
})

// event delegation

let container = document.getElementById("Delegation")
let dele_msg = document.getElementById("Delegation_msg")

container.addEventListener("click", function(event)
{
    if (event.target.tagName === "BUTTON")
    {
        // alert("you clicked:" + event.target.textContent)
        if(event.target.textContent === "Button 1")
        {
            dele_msg.innerHTML = "Button 1: Seek first the kingdom and all will be added"
        }

        if(event.target.textContent === "Button 2")
        {
            dele_msg.innerHTML = "Button 2: Two cool two function theheheeh"
        }
        
        if(event.target.textContent === "Button 3")
        {
            dele_msg.innerHTML = "Button 3: Howdy partner!"
        }

        if(event.target.textContent === "Button 4")
        {
            dele_msg.innerHTML = "Button 4: For God has not given me a spirt of fear but of power, love and a sound miind.. PERIODDD!"
        }
    }
})