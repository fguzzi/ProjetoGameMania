// QUANDO A PÁGINA ESTIVER CARREGADA POR COMPLETO //
$(document).ready(function(){
     

    $("#signin").click(function(){
        // FORMATO DO JS NORMAL //
        // let email = document.getElementById("email").value; //
        // let senha = document.getElementById("senha").value; //


        // FORMATO NO JQUERY //

        let email = $("#email").val();
        let senha = $("#senha").val();

        if(validarLogin(email, senha)) {
            alert("Preenchido corretamente.");
        } else{
            alert("Preencher todos os campos.")
        }
         
    })
});

function validarLogin(e , s){
    if(e != "" && s != "") {
        return true;
    } else{
        return false;
    }
}