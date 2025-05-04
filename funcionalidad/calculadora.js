window.addEventListener("load", () => {
  const body = document.getElementById("body");
  const btn_tema = document.querySelector(".boton_tema");
  const contenedor = document.querySelector(".contenedor");
  const pantalla = document.querySelector(".pantalla");
  const botones = document.getElementsByClassName("botones");
  const teclado = document.querySelector(".teclado");
  const temas = ["rosa","mono","vintage"];
  contenedor.classList.add("aparecer");
  btn_tema.classList.add('aparecer_btn');

  function cambiar_tema() {
    if (temas[0] == body.classList[0]) {
        body.classList.toggle("rosa");
        body.classList.toggle("mono");
    } else if (temas[1] == body.classList[0]) {
        body.classList.toggle("mono");
        body.classList.toggle("vintage");
        teclado.classList.toggle("btn_vintage");
        contenedor.classList.toggle("pantalla_vintage");
        body.classList.toggle("contenedor_vintage");
        
    } else if (temas[2] == body.classList[0]) {
        body.classList.toggle("vintage");
        teclado.classList.toggle("btn_vintage");
        contenedor.classList.toggle("pantalla_vintage");
        body.classList.toggle("contenedor_vintage");
        body.classList.toggle("rosa");
    }
    btn_tema.classList.remove("aparecer_btn");
    contenedor.classList.remove("aparecer");
    setTimeout(() => {
      btn_tema.classList.add("aparecer_btn");
      contenedor.classList.add("aparecer");
    },500);
  }

  function igual() {
    if (pantalla.innerHTML == "") {
      alert("Tiene que ingresar números para realizar una operación.")
    } else {
      try {
        console.log(pantalla.innerHTML)
        pantalla.innerHTML = math.evaluate(pantalla.innerHTML);
      } catch (error) {
        pantalla.innerHTML = "";
        alert("Error: expresión inválida");
        console.error("Detalles del error:", error.message);
      }
    }
  }

  function op_pulsado(id_operador) {
    if (id_operador === 10) {
      pantalla.innerHTML += "+";
    }if (id_operador === 11) {
      pantalla.innerHTML += "-";
    }if (id_operador === 12) {
      pantalla.innerHTML += "*";
    }if (id_operador === 13) {
      pantalla.innerHTML += "/";
    }if (id_operador === 14) {
      igual();
    }if (id_operador === 15) {
      contenedor.classList.add("shake");
      pantalla.innerHTML = "";
      setTimeout(() => {
        contenedor.classList.remove("shake");
      }, 300);
    }if (id_operador === 16) {
      contenedor.classList.add("shake");
      pantalla.innerHTML = pantalla.innerHTML.slice(0, -1);
      setTimeout(() => {
        contenedor.classList.remove("shake");
      }, 300);
    }
  }
  
  for (let id = 0; id < (botones.length - 7); id++) botones[id].addEventListener("click", () => pantalla.innerHTML += id);
  for (let id = 10; id < botones.length; id++) botones[id].addEventListener("click", () => op_pulsado(id))
  btn_tema.addEventListener("click", () => cambiar_tema())
});
