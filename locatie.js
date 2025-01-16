window.onload = load();
function load(){
    document.getElementById("buttonMap").addEventListener("click", stergeHarta); 
    function stergeHarta(){
        document.getElementById("harta").remove();
    }
}