
import {tiposError, mensajes} from "./customError.js"

let correo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
console.log(correo.test('ariasrochayorleis@gmail.com'));

const inputFormularios = document.querySelectorAll('[required]');

inputFormularios.forEach((input) => {
    input.addEventListener("blur", ()=> validarInput(input))
    input.addEventListener("invalid", e=> e.preventDefault())
});



function validarInput(input){
  let mensaje = ""
  input.setCustomValidity("")
 if (input.name === "email" && input.value != "") {
    esEmail(input)
 }
//  console.log(input.validity);
 tiposError.forEach(error=>{
  if(input.validity[error]){
    mensaje = mensajes[input.name][error]
    console.log(mensaje);
  }
 })
 const mensajeError = input.parentNode.querySelector(".msj-error")
 const esValido = input.checkValidity()

 if(!esValido){
  mensajeError.textContent=mensaje
 }else{
  mensajeError.textContent = ""
 }

}

function esEmail(input) {
    const email = input.value
    if (!correo.test(email)){
        input.setCustomValidity("El formato de Correo no es válido")
    }else{
       console.log("continue");
    }
}
