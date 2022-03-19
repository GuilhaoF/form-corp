
//funcao para mostrar a senha do input password
function visibilityPassword(){
    let element = document.getElementById('password');
    if(element.type === "password"){
        element.type = "text";
    }else{
        element.type = "password"
    }
}