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

showDashboard(user)

}

function showDashboard(user){

showSection("dashboard")

let imc=user.weight/((user.height/100)*(user.height/100))

document.getElementById("imc").innerText="IMC: "+imc.toFixed(2)

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

function generarRutina(){

return `

<h2>Rutina Semanal</h2>

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

<p>Tiempo por serie: 45 segundos</p>

<p>Descanso: 90 segundos</p>

<h3>Miércoles - Pierna</h3>

<p>Máquina: Sentadilla guiada</p>

<p>Series: 4</p>

<p>Repeticiones: 10</p>

<p>Tiempo por serie: 45 segundos</p>

<p>Descanso: 120 segundos</p>

<h3>Jueves - Hombro</h3>

<p>Máquina: Press militar</p>

<p>Series: 4</p>

<p>Repeticiones: 8</p>

<p>Descanso: 90 segundos</p>

<h3>Viernes - Brazos</h3>

<p>Máquina: Curl bíceps</p>

<p>Series: 4</p>

<p>Repeticiones: 10</p>

<p>Descanso: 60 segundos</p>

<h3>Sábado - Cardio</h3>

<p>Caminadora</p>

<p>Tiempo: 25 minutos</p>

<h3>Domingo - Descanso</h3>

`

}

function generarDieta(){

return `

<h2>Plan Alimenticio</h2>

<h3>Indica tus alergias</h3>

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

<p>Verduras</p>

<h4>Cena</h4>

<img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c">

<p>Ensalada con atún</p>

<p>1 lata atún</p>

<p>lechuga</p>

<p>tomate</p>

`

}

function generarPrevencion(){

return `

<h2>Prevención</h2>

<img src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b">

<h3>Rabdomiólisis</h3>

<p>Daño muscular severo causado por ejercicio extremo.</p>

<p>Síntomas: dolor intenso, debilidad, orina oscura.</p>

<h3>Sobreentrenamiento</h3>

<p>Fatiga constante, bajo rendimiento y riesgo de lesión.</p>

<h3>Golpe de calor</h3>

<p>El cuerpo pierde capacidad de regular la temperatura.</p>

<h3>Deshidratación</h3>

<p>La falta de agua reduce el rendimiento físico.</p>

`

}

document.addEventListener("click",function(e){

if(e.target.innerText==="Rutina"){

showSection("rutina")

rutina.innerHTML=generarRutina()

}

if(e.target.innerText==="Plan Alimenticio"){

showSection("dieta")

dieta.innerHTML=generarDieta()

}

if(e.target.innerText==="Prevención"){

showSection("prevencion")

prevencion.innerHTML=generarPrevencion()

}

})

