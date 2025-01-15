window.onload = load();
function load(){
    document.getElementById("imprd").addEventListener("click", changeColor); 
    function changeColor(){
        document.getElementById("enr1").style.color = "white";
        document.getElementById("enr2").style.color = "white";
        document.getElementById("enr3").style.color = "white";
        document.getElementById("enr4").style.color = "white";
        document.getElementById("enr5").style.color = "white";

        document.getElementById("enr1").style.fontSize = "x-large";
        document.getElementById("enr2").style.fontSize = "x-large";
        document.getElementById("enr3").style.fontSize = "x-large";
        document.getElementById("enr4").style.fontSize = "x-large";
        document.getElementById("enr5").style.fontSize = "x-large";
    }
}