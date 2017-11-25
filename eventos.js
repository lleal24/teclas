var teclas = { /*JAVASCRIPT OBJEBT NOTATION*/
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150; /*recuerda el ultimo punto que se movio en x y y*/
var y = 150;



dibujarLinea("red", 149,149,151,151, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();            <!--inicia un camino arranca el trazo-->
  lienzo.strokeStyle = color;   <!-- se indica color de la linea, varianle, propiedad-->
  lienzo.lineWidth = 3;  /*grosor de la linea*/
  lienzo.moveTo(xinicial, yinicial);       <!-- indica el punto donde inicial x,y-->
  lienzo.lineTo(xfinal, yfinal);           <!--hasta donde realiza el trazo linea-->
  lienzo.stroke();                 <!--termina la linea-->
  lienzo.closePath();              <!--levanta el lapiz-->
}

function dibujarTeclado(evento)
{

  var colorcito = "green";
  var movimiento = 5;


  switch (evento.keyCode) {
    case teclas.UP:
    dibujarLinea(colorcito, x, y , x,  y - movimiento, papel);
    y = y - movimiento;
    console.log("arriba");
    break;
    case teclas.LEFT:
    dibujarLinea(colorcito, x , y , x - movimiento, y, papel);
    x = x - movimiento;
      console.log("Izquierda");
    break;
    case teclas.RIGHT:
    dibujarLinea(colorcito, x , y , x + movimiento, y, papel);
    x = x + movimiento;
      console.log("derecha");
      break;
    case teclas.DOWN:
    dibujarLinea(colorcito, x , y , x,  y + movimiento, papel);
    y = y + movimiento;
      console.log("abajo");
      break;
    default:
    console.log("otra tecla");

  }
}
