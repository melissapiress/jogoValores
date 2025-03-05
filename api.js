document.addEventListener("DOMContentLoaded", function() {

    const url = "https://apijogovalores.onrender.com/cadastroUser"
    
    const loginForm = document.querySelector("#login-form");
    
    const spinner = document.createElement("div");
    spinner.classList.add("spinner");
    spinner.style.display = "none"; 
    loginForm.appendChild(spinner);
    
    loginForm.addEventListener("submit", (e) =>{
        e.preventDefault()
        email = document.getElementById("email").value
        username = document.getElementById("username").value
        spinner.style.display = "block";
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro na requisição");
            }
            return response.json();
        })
        .then(data => {
            if (data.statusCode === "CREATED") {
                window.location.href = "/tutorial.html";
            } else {
                alert("Login falhou. Verifique suas credenciais");
            }
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Ocorreu um erro. Tente novamente.");
        })
        .finally(() => {
            spinner.style.display = "none";
        });
    });   
}); 