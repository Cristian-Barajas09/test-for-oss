/*
    firstName
    lastName
    email
*/
const test_form = document.getElementById("testForm");

test_form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const first_name = document.getElementById("firstName");
    const last_name = document.getElementById("lastName");
    const email = document.getElementById("email");
    const err1 = document.getElementById("error1");

    if(!first_name.value || !last_name.value || !email.value) {
        first_name.setAttribute("class","error");
        last_name.setAttribute("class","error");
        email.setAttribute("class","error");

        err1.innerText = "Fill in all fields";
        err1.style.background = "red";
        err1.style.color = "#fff"
        err1.style.padding = "10px"
        err1.style.marginTop = "10px"
    } else {
        first_name.setAttribute("class","");
        last_name.setAttribute("class","");
        email.setAttribute("class","");
        err1.innerText = "";
        err1.style.background = "#fff";
        err1.style.color = "#fff"
        err1.style.padding = "10px"
        err1.style.marginTop = "10px"

        first_name.value = ""
        last_name.value = ""
        email.value = ""
        alert("Thanks for send your email");
    }


})
