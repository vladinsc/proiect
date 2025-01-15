document.addEventListener("DOMContentLoaded", () => {
document.getElementById("sendmail-form").addEventListener('submit', function(event) {
    event.preventDefault;
    const emailInpt = document.getElementById('useremail');
    const yourMessage = document.getElementById('message');
    const error = document.getElementById('eroare');
    const check = document.getElementById('checkbox');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInpt.value)){
        error.textContent = 'Introdu o adresa de email valida!!!!'
    }
    else { 
        
        error.textContent = 'Bravo! :)';
        alert('Ai trimis mesajul. Sigur o sa il citeasca cineva.');
       

    }
});
    const time = new Date();
    document.getElementById('todayDate').innerHTML = time;
})