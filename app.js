let usuarioActual = null
let pesos = []
let grafica = null

function showSection(id){

let sections = ["home","register","login","dashboard","patologias","rutina","dieta","prevencion","calendario","editarCuenta","progreso"]

sections.forEach(sec=>{
let el = document.getElementById(sec)
if(el) el.style.display="none"
})

document.getElementById(id).style.display="block"

}

function register(){

let user = {

name: document.getElementById("regName").value,
email: document.getElementById("regEmail").value,
pass: document.getElementById("regPass").value,
age: document.getElementById("regAge").value,
weight: document.getElementById("regWeight").value,
height: document.getElementById("regHeight").value,
sex: document.getElementById("regSex").value

}

localStorage.setItem(user.email, JSON.stringify(user))

alert("Cuenta creada")

showSection("login")

}

function login(){

let email = document.getElementById("logEmail").value
let pass = document.getElementById("logPass").value

let data = localStorage.getItem(email)

if(!data){
alert("Usuario no existe")
return
}

let user = JSON.parse(data)

if(user.pass !== pass){
alert("Contraseña incorrecta")
return
}

usuarioActual = user

let imc = user.weight / ((user.height/100)*(user.height/100))

document.getElementById("imc").innerText = "📊 IMC: " + imc.toFixed(2)

showSection("dashboard")

}

function guardarSalud(){

let salud = {

lesion: document.getElementById("lesion").value,
enfermedad: document.getElementById("enfermedad").value,
cirugia: document.getElementById("cirugia").value

}

localStorage.setItem("salud", JSON.stringify(salud))

alert("Datos guardados")

}

function openRutina(){

showSection("rutina")

document.getElementById("rutina").innerHTML = `

<h2>💪 Rutina semanal</h2>

<h3>Lunes - Pecho</h3>
<p>Press banca — 4 series — 8 repeticiones</p>
<p>Descanso: 90 segundos</p>
<p>Instrucción: bajar la barra al pecho y subir controlado</p>

<h3>Martes - Espalda</h3>
<p>Jalón al pecho — 4x10</p>
<p>Remo en máquina — 3x10</p>

<h3>Miércoles - Pierna</h3>
<p>Sentadilla guiada — 4x10</p>
<p>Prensa de pierna — 4x12</p>

<h3>Jueves - Hombro</h3>
<p>Press militar — 4x8</p>
<p>Elevaciones laterales — 3x12</p>

<h3>Viernes - Brazos</h3>
<p>Curl bíceps — 4x10</p>
<p>Extensión tríceps — 3x12</p>

<h3>Sábado</h3>
<p>Cardio 25 minutos</p>

<h3>Domingo</h3>
<p>Descanso</p>

<button onclick="showSection('dashboard')">⬅ Volver</button>

`

}

function openDieta(){

showSection("dieta")

document.getElementById("dieta").innerHTML = `

<h2>🥗 Plan Alimenticio</h2>

<input id="alergias" placeholder="Escribe tus alergias">

<button onclick="generarDieta()">Generar plan</button>

<div id="plan"></div>

<button onclick="showSection('dashboard')">⬅ Volver</button>

`

}

function generarDieta(){

let desayunos=[
"Avena con plátano",
"Omelette de claras",
"Yogurt con granola",
"Tostadas integrales con aguacate",
"Batido de proteína",
"Pan integral con crema de cacahuate",
"Huevos con espinaca"
]

let comidas=[
"Pollo con arroz integral",
"Salmón con quinoa",
"Carne magra con papas",
"Pasta integral con pollo",
"Tacos saludables",
"Arroz con atún",
"Ensalada de pollo"
]

let cenas=[
"Ensalada con atún",
"Wrap integral de pollo",
"Sopa de verduras",
"Ensalada de huevo",
"Pollo con verduras",
"Quesadilla integral",
"Ensalada de garbanzos"
]

let dias=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"]

let html=""

for(let i=0;i<7;i++){

html+=`

<h3>${dias[i]}</h3>
<p>🍳 Desayuno: ${desayunos[i]}</p>
<p>🍗 Comida: ${comidas[i]}</p>
<p>🥗 Cena: ${cenas[i]}</p>
`

}

document.getElementById("plan").innerHTML=html

}

function openPrevencion(){

showSection("prevencion")

document.getElementById("prevencion").innerHTML=`

<h2>⚠ Prevención</h2>

<h3>Rabdomiólisis</h3>
<p>Daño muscular severo causado por esfuerzo extremo.</p>

<h3>Lesiones por sobrecarga</h3>
<p>Tendinitis, desgarros musculares, dolor articular.</p>

<h3>Golpe de calor</h3>
<p>El cuerpo pierde la capacidad de regular la temperatura.</p>

<h3>Deshidratación</h3>
<p>Pérdida excesiva de líquidos durante el ejercicio.</p>

<h3>Sobreentrenamiento</h3>
<p>Fatiga crónica por falta de descanso.</p>

<button onclick="showSection('dashboard')">⬅ Volver</button>

`

}

function openCalendario(){

showSection("calendario")

document.getElementById("calendario").innerHTML=`

<h2>📅 Calendario</h2>

<table>

<tr><th>Día</th><th>Entrenamiento</th></tr>

<tr><td>Lunes</td><td>Pecho</td></tr>
<tr><td>Martes</td><td>Espalda</td></tr>
<tr><td>Miércoles</td><td>Pierna</td></tr>
<tr><td>Jueves</td><td>Hombro</td></tr>
<tr><td>Viernes</td><td>Brazos</td></tr>
<tr><td>Sábado</td><td>Cardio</td></tr>
<tr><td>Domingo</td><td>Descanso</td></tr>

</table>

<button onclick="showSection('dashboard')">⬅ Volver</button>

`

}

function editarCuenta(){

showSection("editarCuenta")

document.getElementById("editarCuenta").innerHTML=`

<h2>⚙ Editar Cuenta</h2>

<input id="nuevoNombre" placeholder="Nuevo nombre">

<input id="nuevaEdad" placeholder="Nueva edad">

<input id="nuevoPeso" placeholder="Nuevo peso">

<input id="nuevaAltura" placeholder="Nueva altura">

<button onclick="guardarCambios()">Guardar cambios</button>

<button onclick="showSection('dashboard')">⬅ Volver</button>

`

}

function guardarCambios(){

if(document.getElementById("nuevoNombre").value){
usuarioActual.name=document.getElementById("nuevoNombre").value
}

if(document.getElementById("nuevaEdad").value){
usuarioActual.age=document.getElementById("nuevaEdad").value
}

if(document.getElementById("nuevoPeso").value){
usuarioActual.weight=document.getElementById("nuevoPeso").value
}

if(document.getElementById("nuevaAltura").value){
usuarioActual.height=document.getElementById("nuevaAltura").value
}

localStorage.setItem(usuarioActual.email, JSON.stringify(usuarioActual))

alert("Datos actualizados")

}

function openProgreso(){

showSection("progreso")

document.getElementById("progreso").innerHTML=`

<h2>📊 Progreso semanal</h2>

<input id="pesoSemana" placeholder="Peso esta semana">

<button onclick="agregarPeso()">Agregar peso</button>

<canvas id="grafica"></canvas>

<button onclick="showSection('dashboard')">⬅ Volver</button>

`

crearGrafica()

}

function crearGrafica(){

let ctx=document.getElementById("grafica")

grafica=new Chart(ctx,{

type:"line",

data:{
labels:[],
datasets:[{
label:"Peso corporal",
data:[]
}]
}

})

}

function agregarPeso(){

let peso=parseFloat(document.getElementById("pesoSemana").value)

grafica.data.labels.push("Semana "+(grafica.data.labels.length+1))

grafica.data.datasets[0].data.push(peso)

grafica.update()

}
