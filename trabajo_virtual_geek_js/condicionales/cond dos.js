var name = "heiner"
var div = document.querySelector("div")
if (name === "heiner"){
  console.log (div.innerHTML = `Bienvenido, ${name}`)
}else {
  console.log (div.innerHTML = "Lo siento pero el usuario que has introducido no está registrado.")
}