let basedatos = [];

function act(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    

    let arr=[name,email,message];
    basedatos.push(arr);
    convertirjson(arr);
}

function convertirjson(json){
    let p = document.getElementById("form-result");
    let json2 = JSON.stringify(json);
    let newElement = document.createElement("p");
    p.appendChild(newElement);
    newElement.textContent = json2;
}

function comparable(){
    for(let i=0; i<basedatos.length; i++){
        if(basedatos[i]=="canarias"||basedatos[i]=="mallorca"||basedatos[i]=="galicia"){
            return basedatos[i];
        }
    }
}

function f(){
    console.log("he entrado");
    let a = basedatos.filter(comparable());
    alert(a);
}