setTimeout(() => {

    const botonMarcarTodos = document.querySelector("#btn-marcarTodos");
    const botonReset = document.querySelector("#btn-reset");

    const botonEarphone = document.querySelector("#btn-earphone");
    const botonSmartwatch = document.querySelector("#btn-smartwatch");
    const botonPortatiles = document.querySelector("#btn-portatiles");
    const botonConsolas = document.querySelector("#btn-consolas");
    const botonOculus = document.querySelector("#btn-oculus");
    const botonAltavoces = document.querySelector("#btn-altavoces");

    let nombres = ["Earphone","Smartwatch","Portatiles","Consolas","Oculus","Altavoces"];
    let botones = [botonEarphone, botonSmartwatch, botonPortatiles, botonConsolas, botonOculus, botonAltavoces];
    let favoritos = [];

    const favorito = (boton, nombre) => {
        if(favoritos.includes(nombre)) {
            favoritos = favoritos.filter((e) => e !== nombre);
            boton.innerHTML = "Añadir a favoritos";
        } else {
            favoritos.push(nombre);
            boton.innerHTML = "Quitar de favoritos";
        }
    }
    const desmarcar = (boton, arr) => {
        for(let i = 0; i < arr.length; i++) {
            if(favoritos.includes(arr[i])) {
                favoritos = favoritos.filter((e) => e !== arr[i]);
                boton[i].innerHTML = "Añadir a favoritos"; 
            }
        }
    }
    const marcar = (boton, arr) => {
        for(let i = 0; i < arr.length; i++) {
            if(!favoritos.includes(arr[i])) {
                favoritos.push(arr[i])
                boton[i].innerHTML = "Quitar de favoritos";
            }
        }
    }

    botonMarcarTodos.addEventListener("click", () => {
        marcar(botones, nombres);
    })
    botonReset.addEventListener("click", () => {
        desmarcar(botones, nombres);
    })
    botonEarphone.addEventListener("click", () => {
        favorito(botonEarphone, "Earphone");
    })
    botonSmartwatch.addEventListener("click", () => {
        favorito(botonSmartwatch, "Smartwatch");
    })
    botonPortatiles.addEventListener("click", () => {
        favorito(botonPortatiles, "Portatiles");
    })
    botonConsolas.addEventListener("click", () => {
        favorito(botonConsolas, "Consolas");
    })
    botonOculus.addEventListener("click", () => {
        favorito(botonOculus, "Oculus");
    })
    botonAltavoces.addEventListener("click", () => {
        favorito(botonAltavoces, "Altavoces");
    })

}, 1000); // para esperar 1 segundo