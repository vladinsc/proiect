document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const loginMessage = document.getElementById("login-message");
    const loginSection = document.getElementById("login-section");
    const logoutSection = document.getElementById("logout-section");
    const userDisplay = document.getElementById("user-display");
    const logoutButton = document.getElementById("logout-button");

    let users = [];

    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            users = data;
        })
        .catch(error => {
            console.error("ups, eroare :(", error);
        });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            loginSection.style.display = "none";
            logoutSection.style.display = "block";
            userDisplay.textContent = username;
            document.getElementById('nocont').style.display = "none";
        } else {
            loginMessage.textContent = "Ai gresit usernmae-ul sau parola!!! :(";
        }
    });
    logoutButton.addEventListener("click", () => {
        loginSection.style.display = "block";
        logoutSection.style.display = "none";
        document.getElementById('nocont').style.display = "block";
        loginMessage.textContent = "";
        loginForm.reset();
    });
});
