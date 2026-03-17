function showRegister(){

document.getElementById("home").style.display="none"
document.getElementById("register").style.display="block"

}

function showLogin(){

document.getElementById("home").style.display="none"
document.getElementById("login").style.display="block"

}

function register(){

let name=document.getElementById("regName").value
let email=document.getElementById("regEmail").value
let pass=document.getElementById("regPass").value
let age=document.getElementById("regAge").value
let weight=document.getElementById("regWeight").value
let height=document.getElementById("regHeight").value
let sex=document.getElementById("regSex").value

if(!name || !email || !pass){

alert("Completa todos los campos")
return

}

let user={

name:name,
email:email,
pass:pass,
age:age,
weight:weight,
height:height,
sex:sex

}

localStorage.setItem(email,JSON.stringify(user))

alert("Cuenta creada correctamente")

document.getElementById("register").style.display="none"
document.getElementById("login").style.display="block"

}

function login(){

let email=document.getElementById("logEmail").value
let pass=document.getElementById("logPass").value

let data=localStorage.getItem(email)

if(!data){

alert("Usuario no existe")
return

}

let user=JSON.parse(data)

if(user.pass!==pass){

alert("Contraseña incorrecta")
return

}

showDashboard(user)

}

function showDashboard(user){

document.getElementById("login").style.display="none"
document.getElementById("dashboard").style.display="block"

let imc=user.weight/((user.height/100)*(user.height/100))

document.getElementById("imc").innerText="Tu IMC es: "+imc.toFixed(2)

}

function showRutina(){

document.getElementById("rutina").style.display="block"

rutina.innerHTML=generateRoutine()

}

function showDieta(){

document.getElementById("dieta").style.display="block"

dieta.innerHTML=generateDiet()

}

function showSalud(){

document.getElementById("salud").style.display="block"

salud.innerHTML=

`<h2>Prevención</h2>

<h3>Rabdomiólisis</h3>
<p>Daño muscular severo causado por sobreentrenamiento extremo.</p>

<h3>Sobreentrenamiento</h3>
<p>Fatiga constante y disminución del rendimiento.</p>

<h3>Golpe de calor</h3>
<p>El cuerpo pierde capacidad de regular temperatura.</p>

<h3>Deshidratación</h3>
<p>Pérdida excesiva de líquidos.</p>

`

}
