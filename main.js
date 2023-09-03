/* const guardarLocal = (clave,valor ) => (localStorage.setItem(clave, valor));

guardarLocal("bebidas",JSON.stringify(Whisky)); */



let shop = document.getElementById("shop");
let verCarrito = document.getElementById("verCarrito");
let contenidoCarrito = document.getElementById("contenedorCarro");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

Whisky.forEach((bebida)=>{
    let bebidaContent = document.createElement("div");
    bebidaContent.className = "card";
    bebidaContent.innerHTML = `
        <img class="img-card" src=${bebida.img}>
        <h3>${bebida.nombre}</h3>
        <p>$${bebida.precio}</p>
    `;
    shop.append(bebidaContent);
    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    bebidaContent.append(comprar);

    comprar.addEventListener("click",()=>{
        carrito.push({
            id : bebida.id ,
            nombre: bebida.nombre,
            precio: bebida.precio,
            stock: bebida.stock,
            img : bebida.img,
        })
        Swal.fire({
            title: "Agregado al carrito",
            
            icon: "success",
            confirmButtonText: "ok",
        })
        saveLocal()
        console.log("carrito:",carrito)
        
    })
});

verCarrito.addEventListener("click",()=>{
    contenidoCarrito.innerHTML = ""

    contenidoCarrito.style.display = "flex";

    let carroContent = document.createElement("div");
    carroContent.className = "carro-style"
    carroContent.innerHTML = `
        <h1 class="titulo-carrito">carrito:</h1>
    `
    contenidoCarrito.append(carroContent);
    const carroClosed = document.createElement("h1")
    carroClosed.className = "carro-closed"
    carroClosed.innerText = "❌"

    carroClosed.addEventListener("click",()=>{
        contenidoCarrito.style.display = "none";
    });

    carroContent.append(carroClosed);

    carrito.forEach((bebida)=>{
        const carritoBebidas = document.createElement("div");
        carritoBebidas.className = "carro-bebidas"
        carritoBebidas.innerHTML = `
        <img src="${bebida.img}">
        <h3>${bebida.nombre}</h3>
        <p>$${bebida.precio}</p>
    
        `;
        contenidoCarrito.append(carritoBebidas);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio , 0);
    const totalCarrito = document.createElement("div");
    totalCarrito.className = "total-carro";
    totalCarrito.innerHTML = `
        total a pagar: ${total}
    `
    contenidoCarrito.append(totalCarrito);
});

const saveLocal = () => {
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

