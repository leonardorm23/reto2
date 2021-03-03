const clasificacionAnimal = () => {
    // creamos variable op que almacena la operacion
    let ca = prompt(
      "seleccionar el numero indicado para clasificación; \n 1 - vertebrados \n 2 - invertebrados \n 3 - herbivoros \n 4 - carnivoros"
    );
    //validamos la opcion seleccionada por el usuario
    if (ca !== "1" && ca !== "2" && ca !== "3" && ca !== "4") {
      alert("debe ser una opción entre la 1 y la 4");
    } else{
        if (ca === "1") {
            let ve = prompt("Seleccione el un animal para descripcion \n 1 - ballena \n 2 - loro \n 3 - cocodrilo \n 4 - sapo \n 5 - tiburon");
            if (ve !== "1" && ve !== "2" && ve !== "3" && ve !== "4" && ve !== "5"){
                alert("debe ser una opción entre la 1 y la 5");
            }else{
                if (ve === "1") {
                    alert("En promedio las ballenas miden entre 15 y 17 metros y pesan entre 50 y 80 toneladas");
                }
                if (ve === "2") {
                    alert("Los loros son animales bastante sociables y muy inteligentes porque poseen una gran capacidad craneal");
                }
                if (ve === "3") {
                    alert("Un cocodrilo puede llegar a medir 6 metros de largo y pesar 800 kilogramos.");
                }
                if (ve === "4") {
                    alert("El sapo común se defiende de sus depredadores con unas glándulas venenosas, si bien estas no causan daños en el ser humano");
                }
                if (ve === "5") {
                    alert("El tiburón ballena es la especie más grande de tiburón, pues llega a medir más de 12 metros de longitud");
                }
                
            }
            
        }
        // invertebrados
        if (ca === "2") {
            let iv = prompt("Seleccione el un animal para descripcion \n 1 - escorpión \n 2 - mariposa \n 3 - luciernaga \n 4 - araña \n 5 - mantis");
            if (iv !== "1" && iv !== "2" && iv !== "3" && iv !== "4" && iv !== "5"){
                alert("debe ser una opción entre la 1 y la 5");
            }else{
                if (iv === "1") {
                    alert("Se llama escorpiones o alacranes a un orden de aproximadamente 1.400 especies diferentes");
                }
                if (iv === "2") {
                    alert("Más de 200 especies de mariposas migran hacia otras regiones debido a las condiciones climatológicas");
                }
                if (iv === "3") {
                    alert("Las luciernagas, clasificadas como invertebrados, son capaces de escenificar una danza en la que sus cuerpos brillan a la vez");
                }
                if (iv === "4") {
                    alert("Hoy en día existen más de 42,000 especies de arañas en el mundo");
                }
                if (iv === "5") {
                    alert("La Mantis Religiosa es verde brillante o marrón, y debido a ello es capaz de camuflarse perfectamente entre la espesura vegetal.");
                }
                
            }
            
        }

        //Herbivoros
        if (ca === "3") {
            let hb = prompt("Seleccione el un animal para descripcion \n 1 - Koala \n 2 - caballo \n 3 - cebras \n 4 - jirafa \n 5 - vaca");
            if (hb !== "1" && hb !== "2" && hb !== "3" && hb !== "4" && hb !== "5"){
                alert("debe ser una opción entre la 1 y la 5");
            }else{
                if (hb === "1") {
                    alert("El Koala debido a que es herbívoro, su dentadura está adaptada con afilados dientes incisivos para cortar hojas.");
                }
                if (hb === "2") {
                    alert("El Caballo Para alimentarse toma las hojas tiernas de los arbustos, ya que sus dientes solo estan adaptados para ello");
                }
                if (hb === "3") {
                    alert("Las luciernagas, clasificadas como invertebrados, son capaces de escenificar una danza en la que sus cuerpos brillan a la vez");
                }
                if (hb === "4") {
                    alert("Hoy en día existen más de 42,000 especies de arañas en el mundo");
                }
                if (hb === "5") {
                    alert("La Mantis Religiosa es verde brillante o marrón, y debido a ello es capaz de camuflarse perfectamente entre la espesura vegetal.");
                }
                
            }
            
        }
                  
        
    }
}