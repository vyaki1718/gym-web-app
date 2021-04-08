function validation(){
    var fname = document.getElementById("fname").value;
    var fage = document.getElementById("fage").value;
    var fgender = document.getElementById("fgender").value;
    var flocality = document.getElementById("flocality").value;
    var femail = document.getElementById("femail").value;
    
    if (fname == ""){
        alert("name should not blank");
        return false;
    }
}