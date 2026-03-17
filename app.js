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

let imc=user.weight/((user.height/100)*(user.height/100))

document.getElementById("imc").innerText="📊 Tu IMC es: "+imc.toFixed(2)

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

<h2>💪 Rutina semanal detallada</h2>

<h3>Lunes - Pecho</h3>
<p>Press de banca — 4 series — 8 repeticiones</p>
<p>Descanso: 90 segundos</p>
<p>Técnica: bajar la barra controladamente al pecho y subir</p>

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

<h3>Sábado - Cardio</h3>
<p>Caminadora — 25 minutos</p>

<h3>Domingo - Descanso</h3>

<button onclick="showSection('dashboard')">⬅ Volver</button>

`

}

function openDieta(){

showSection("dieta")

dieta.innerHTML=`

<h2>🥗 Plan Alimenticio</h2>

<input id="alergias" placeholder="Escribe tus alergias">

<button onclick="generarDieta()">Generar plan semanal</button>

<div id="plan"></div>

<button onclick="showSection('dashboard')">⬅ Volver</button>

`

}

function generarDieta(){

let dias=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"]

let desayunos=[
"Avena con plátano y nueces",
"Huevos con espinaca",
"Yogurt con granola",
"Tostadas integrales con aguacate",
"Batido de proteína",
"Pan integral con crema de cacahuate",
"Omelette de claras"
]

let comidas=[
"Pollo con arroz integral",
"Carne con papas",
"Salmón con quinoa",
"Pasta integral con pollo",
"Tacos de pollo",
"Arroz con atún",
"Ensalada con pollo"
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

prevencion.innerHTML=`

<h2>⚠ Prevención</h2>

<h3>Rabdomiólisis</h3>
<p>Condición grave causada por daño muscular extremo.</p>
<p>Síntomas: dolor muscular intenso, debilidad, orina oscura.</p>

<h3>Lesiones por sobrecarga</h3>
<p>Tendinitis, desgarros musculares y dolor articular.</p>

<h3>Golpe de calor</h3>
<p>Ocurre cuando el cuerpo no puede regular su temperatura.</p>

<h3>Deshidratación</h3>
<p>Pérdida excesiva de líquidos durante el ejercicio.</p>

<h3>Sobreentrenamiento</h3>
<p>Fatiga constante causada por falta de descanso.</p>

<button onclick="showSection('dashboard')">⬅ Volver</button>

`

}

function openCalendario(){

showSection("calendario")

calendario.innerHTML=`

<h2>📅 Calendario de entrenamiento</h2>

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

editarCuenta.innerHTML=`

<h2>⚙ Editar cuenta</h2>

<input placeholder="Nuevo peso">

<input placeholder="Nueva altura">

<button>Guardar cambios</button>

<button onclick="showSection('dashboard')">⬅ Volver</button>

`

}

let pesos=[]

function openProgreso(){

showSection("progreso")

progreso.innerHTML=`

<h2>📊 Progreso semanal</h2>

<input id="pesoSemana" placeholder="Peso esta semana">

<button onclick="agregarPeso()">Agregar</button>

<canvas id="grafica"></canvas>

<button onclick="showSection('dashboard')">⬅ Volver</button>

`

}

function agregarPeso(){

let peso=parseFloat(document.getElementById("pesoSemana").value)

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
