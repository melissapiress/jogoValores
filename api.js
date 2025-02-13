const url = "http://localhost:8080/cadastroUser"

const loginForm = document.querySelector("#login-form");
const emailInput = document.querySelector("#email").value;
const usernameInput = document.querySelector("#username").value;

loginForm.addEventListener("submit", (e) =>{
    e.preventDefault();




    fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email: emailInput,
            username: usernameInput,
        })
        
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error(`Erro na requisição: ${res.status}`);
        }
        return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Erro ao enviar requisição:", error));})

