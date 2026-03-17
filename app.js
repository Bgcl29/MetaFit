let usuarioActual=null
let pesos=[]

function showSection(id){

let sections=["home","register","login","dashboard","patologias","rutina","dieta","prevencion","calendario","editarCuenta","progreso"]

sections.forEach(sec=>{
let el=document.getElementById(sec)
if(el) el.style.display="none"
})

document.getElementById(id).style.display="block"

}

function register(){

let user={
name:regName.value,
email:regEmail.value,
pass:regPass.value,
age:regAge.value,
weight:regWeight.value,
height:regHeight.value,
sex:regSex.value
}

localStorage.setItem(user.email,JSON.stringify(user))

alert("Cuenta creada")

showSection("login")

}

function login(){

let email=logEmail.value
let pass=logPass.value

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

usuarioActual=user

let imc=user.weight/((user.height/100)*(user.height/100))

document.getElementById("imc").innerText="📊 IMC: "+imc.toFixed(2)

showSection("dashboard")

}

function guardarSalud(){

let salud={
lesion:lesion.value,
enfermedad:enfermedad.value,
cirugia:cirugia.value
}

localStorage.setItem("salud",JSON.stringify(salud))

alert("Datos guardados")

}

function openRutina(){

showSection("rutina")

rutina.innerHTML=`

<h2>💪 Rutina semanal</h2>

<h3>Lunes - Pecho</h3>
<p>Press banca — 4x8 — descanso 90s</p>
<p>Aperturas con mancuernas — 3x12</p>

<h3>Martes - Espalda</h3>
<p>Jalón al pecho — 4x10</p>
<p>Remo máquina — 3x10</p>

<h3>Miércoles - Pierna</h3>
<p>Sentadilla guiada — 4x10</p>
<p>Prensa — 4x12</p>

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

dieta.innerHTML=`

<h2>🥗 Plan Alimenticio IA</h2>

<input id="alergias" placeholder="Escribe tus alergias">

<button onclick="generarDieta()">Generar</button>

<div id="plan"></div>

<button onclick="showSection('dashboard')">⬅ Volver</button>

`

}

function generarDieta(){

let desayunos=[
"Avena con plátano",
"Omelette de claras",
"Yogurt con granola",
"Pan integral con aguacate",
"Batido de proteína",
"Tostadas integrales",
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

plan.innerHTML=html

}

function editarCuenta(){

showSection("editarCuenta")

editarCuenta.innerHTML=`

<h2>⚙ Editar Cuenta</h2>

<input id="nuevoNombre" placeholder="Nuevo nombre">

<input id="nuevaEdad" placeholder="Nueva edad">

<input id="nuevoPeso" placeholder="Nuevo peso">

<input id="nuevaAltura" placeholder="Nueva altura">

<button onclick="guardarCambios()">Guardar</button>

<button onclick="showSection('dashboard')">⬅ Volver</button>

`

}

function guardarCambios(){

usuarioActual.name=nuevoNombre.value || usuarioActual.name
usuarioActual.age=nuevaEdad.value || usuarioActual.age
usuarioActual.weight=nuevoPeso.value || usuarioActual.weight
usuarioActual.height=nuevaAltura.value || usuarioActual.height

localStorage.setItem(usuarioActual.email,JSON.stringify(usuarioActual))

alert("Datos actualizados")

}

function openProgreso(){

showSection("progreso")

progreso.innerHTML=`

<h2>📊 Progreso</h2>

<input id="pesoSemana" placeholder="Peso esta semana">

<button onclick="agregarPeso()">Agregar</button>

<canvas id="grafica"></canvas>

<button onclick="showSection('dashboard')">⬅ Volver</button>

`

}

function agregarPeso(){

let peso=parseFloat(pesoSemana.value)

pesos.push(peso)

let ctx=document.getElementById("grafica")

new Chart(ctx,{
type:"line",
data:{
labels:pesos.map((_,i)=>"Semana "+(i+1)),
datasets:[{
label:"Peso corporal",
data:pesos
}]
}
})

}
