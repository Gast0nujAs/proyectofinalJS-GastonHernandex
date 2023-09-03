const Bebidas = function(id,nombre,precio,stock,img){
    this.id = id
    this.nombre = nombre; 
    this.precio = precio;
    this.stock = stock; 
    this.img = img ;
}

let whisky1 = new Bebidas(1,"Blue Label", 100000, 5, "img/bluelabel.jpg");
let whisky2 = new Bebidas(2,"DoubleBlack ", 25000, 10, "img/jwdouble.jpeg");
let whisky3 = new Bebidas(3,"Green Label", 65000, 7, "img/greenlabel.jpeg");
let whisky4 = new Bebidas(4,"Ballantines 12", 12000, 14, "img/Ballantines-12.png");
let whisky5 = new Bebidas(5,"Ballantines 7", 8000, 5, "img/ballantines7.jpg");
let whisky6 = new Bebidas(6,"Ballantines",5000, 12, "img/ballantinesfinest.png");

const Whisky = [whisky1,whisky2,whisky3,whisky4,whisky5,whisky6];