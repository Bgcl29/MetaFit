function showSection(id){

let sections=["home","register","login","dashboard","patologias","rutina","dieta","prevencion","calendario"]

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

rutina.innerHTML=

`<h2>💪 Rutina semanal</h2>

<p>Lunes: Pecho</p>
<p>Press banca — 4x8 — descanso 90s</p>

<p>Martes: Espalda</p>
<p>Jalón al pecho — 4x10</p>

<p>Miércoles: Pierna</p>
<p>Sentadilla guiada — 4x10</p>

<p>Jueves: Hombro</p>
<p>Press militar — 4x8</p>

<p>Viernes: Brazos</p>
<p>Curl bíceps — 4x10</p>

<p>Sábado: Cardio</p>
<p>Caminadora 25 min</p>

<p>Domingo: Descanso</p>

<button onclick="showSection('dashboard')">⬅ Volver</button>
`

}

function openDieta(){

showSection("dieta")

dieta.innerHTML=

`<h2>🥗 Plan Alimenticio IA</h2>

<input id="alergias" placeholder="Ingresa alergias">

<button onclick="generarDieta()">Generar plan</button>

<div id="plan"></div>

<button onclick="showSection('dashboard')">⬅ Volver</button>
`

}

function generarDieta(){

let alergias=document.getElementById("alergias").value

let plan=""

let dias=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"]

dias.forEach(d=>{

plan+=`

<h3>${d}</h3>

<p>Desayuno: Avena con fruta</p>

<p>Comida: Pollo con arroz</p>

<p>Cena: Ensalada con atún</p>

`

})

document.getElementById("plan").innerHTML=plan

}

function openPrevencion(){

showSection("prevencion")

prevencion.innerHTML=

`<h2>⚠ Prevención</h2>

<h3>Rabdomiólisis</h3>

<p>Es una condición donde el tejido muscular se descompone por esfuerzo extremo.</p>

<p>Síntomas:</p>

<p>dolor muscular severo</p>
<p>debilidad</p>
<p>orina oscura</p>

<h3>Lesiones por sobrecarga</h3>

<p>Tendinitis</p>
<p>desgarros musculares</p>
<p>dolor articular</p>

<h3>Golpe de calor</h3>

<p>Exceso de temperatura corporal durante el ejercicio.</p>

<h3>Deshidratación</h3>

<p>Pérdida de líquidos por sudor.</p>

<h3>Sobreentrenamiento</h3>

<p>Fatiga crónica por entrenar sin descanso suficiente.</p>

<button onclick="showSection('dashboard')">⬅ Volver</button>

`

}

function openCalendario(){

showSection("calendario")

calendario.innerHTML=

`<h2>📅 Calendario de entrenamiento</h2>

<table>

<tr>
<th>Día</th>
<th>Entrenamiento</th>
</tr>

<tr>
<td>Lunes</td>
<td>Pecho</td>
</tr>

<tr>
<td>Martes</td>
<td>Espalda</td>
</tr>

<tr>
<td>Miércoles</td>
<td>Pierna</td>
</tr>

<tr>
<td>Jueves</td>
<td>Hombro</td>
</tr>

<tr>
<td>Viernes</td>
<td>Brazos</td>
</tr>

<tr>
<td>Sábado</td>
<td>Cardio</td>
</tr>

<tr>
<td>Domingo</td>
<td>Descanso</td>
</tr>

</table>

<button onclick="showSection('dashboard')">⬅ Volver</button>

`

}
