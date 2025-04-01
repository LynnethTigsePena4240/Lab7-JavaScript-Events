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