function showSection(id){

let sections=["home","register","login","dashboard","patologias","rutina","dieta","prevencion"]

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

alert("Cuenta creada correctamente")

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

document.getElementById("imc").innerText="Tu IMC es: "+imc.toFixed(2)

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

`<h2>Rutina semanal</h2>

<h3>Lunes - Pecho</h3>
<p>Máquina: Press de banca</p>
<p>Series: 4</p>
<p>Repeticiones: 8</p>
<p>Tiempo por serie: 40 segundos</p>
<p>Descanso: 90 segundos</p>

<h3>Martes - Espalda</h3>
<p>Máquina: Jalón al pecho</p>
<p>Series: 4</p>
<p>Repeticiones: 10</p>
<p>Descanso: 90 segundos</p>

<h3>Miércoles - Pierna</h3>
<p>Máquina: Sentadilla guiada</p>
<p>Series: 4</p>
<p>Repeticiones: 10</p>
<p>Descanso: 120 segundos</p>

<h3>Jueves - Hombro</h3>
<p>Máquina: Press militar</p>
<p>Series: 4</p>
<p>Repeticiones: 8</p>

<h3>Viernes - Brazos</h3>
<p>Máquina: Curl bíceps</p>
<p>Series: 4</p>
<p>Repeticiones: 10</p>

<h3>Sábado - Cardio</h3>
<p>Caminadora</p>
<p>Tiempo: 25 minutos</p>

<h3>Domingo - Descanso</h3>

<button onclick="showSection('dashboard')">⬅ Volver al menú</button>

`

}

function openDieta(){

showSection("dieta")

dieta.innerHTML=

`<h2>Plan Alimenticio</h2>

<h3>Alergias</h3>

<input placeholder="Ej: lactosa, gluten">

<h3>Lunes</h3>

<h4>Desayuno</h4>

<img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd">

<p>Avena con fruta</p>

<p>Ingredientes:</p>

<p>60g avena</p>
<p>1 plátano</p>
<p>200ml leche</p>

<h4>Comida</h4>

<img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836">

<p>Pollo con arroz</p>

<p>150g pollo</p>
<p>100g arroz integral</p>
<p>verduras</p>

<h4>Cena</h4>

<img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c">

<p>Ensalada con atún</p>

<p>1 lata de atún</p>
<p>lechuga</p>
<p>tomate</p>

<button onclick="showSection('dashboard')">⬅ Volver al menú</button>

`

}

function openPrevencion(){

showSection("prevencion")

prevencion.innerHTML=

`<h2>Prevención</h2>

<img src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b">

<h3>Rabdomiólisis</h3>

<p>Daño muscular grave causado por sobreentrenamiento.</p>

<p>Síntomas:</p>

<p>dolor intenso</p>
<p>orina oscura</p>
<p>debilidad muscular</p>

<h3>Sobreentrenamiento</h3>

<p>Fatiga constante y pérdida de rendimiento.</p>

<h3>Golpe de calor</h3>

<p>El cuerpo pierde la capacidad de regular la temperatura.</p>

<h3>Deshidratación</h3>

<p>Pérdida excesiva de líquidos durante el ejercicio.</p>

<button onclick="showSection('dashboard')">⬅ Volver al menú</button>

`

}
