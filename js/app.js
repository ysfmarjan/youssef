// Script - Menú de cortina
   
        function openNav() {
          document.getElementById("myNav").style.width = "52%"; // Parametro para cambiar el width del overly
        }

        function closeNav() {
          document.getElementById("myNav").style.width = "0%";
        }
 
// Fin Script - Menú de cortina


// Script - Activar/Ocultar Formación Academica

    function activar1(){
        document.getElementById("formacion1").classList.toggle("oculto");
      }

    function activar2(){
        document.getElementById("formacion2").classList.toggle("oculto");
      }
    function activar3(){
        document.getElementById("formacion3").classList.toggle("oculto");
      }
    function activar4(){
        document.getElementById("formacion4").classList.toggle("oculto");
      }
    function activar5(){
        document.getElementById("formacion5").classList.toggle("oculto");
      }
        desplegado.addEventListener("click", activar1);
        desplegado.addEventListener("click", activar2);
        desplegado.addEventListener("click", activar3);
        desplegado.addEventListener("click", activar4);
        desplegado.addEventListener("click", activar5);

// Fin Script - Activar/Ocultar


// Script - Activar/Ocultar Experiencia Profesional

function activar6(){
    document.getElementById("experiencia1").classList.toggle("oculto_ex");
  }

function activar7(){
    document.getElementById("experiencia2").classList.toggle("oculto_ex");
  }
function activar8(){
    document.getElementById("experiencia3").classList.toggle("oculto_ex");
  }
function activar9(){
    document.getElementById("experiencia4").classList.toggle("oculto_ex");
  }

    desplegadoEx.addEventListener("click", activar6);
    desplegadoEx.addEventListener("click", activar7);
    desplegadoEx.addEventListener("click", activar8);
    desplegadoEx.addEventListener("click", activar9);



// Fin Script - Activar/Ocultar Experiencia Profesional