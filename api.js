const url = "http://localhost:8080/cadastroUser"

const signInForm = document.querySelector("#sign-in-form");
const emailInput = document.querySelector("#email").val();
const usernameInput = document.querySelector("#username")
const passwordInput = document.querySelector("#password")

addEventListener(onsubmit, alert(emailInput))

async function saveUser() {
    const response =  await fetch(url, {
        method: "POST",
        body: comment,
        headers: {
            "Content-type": "application/json"
        }
    });

    const data =  await response.json();
    createComment(data);
}
