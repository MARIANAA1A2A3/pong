//variaveis bolinha
let xBolinha=200;
let yBolinha=200;
let diametro=15;

let velocidadeXbolinha=5;
let velocidadeYbolinha=6;

//variaveis minha raquete
let xRaquetejogador=5
let yRaquetejogador=15
let alturaRaquetejogador=10
let larguraRaquetejogador=90 

//variaveis raquete oponente
let xRaqueteOponente=385
let yRaqueteOponente=150
let alturaRaqueteOponente=10
let larguraRaqueteOponente=90 
let velocidadeYOponente


//colisao
let colidiu = false;


//let posicaoHorizontal; //x
//let posicaoVertical; //y

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha(); 
  verificaColisao();
  mostraRaquetejogador();
  movimentaRaquetejogador();
  verificaColisaoRaquetejogador();
  mostraRaqueteOponente();
  movimentoRaqueteOponente();
}

function mostraBolinha(){
  fill("red")
  circle(xBolinha,yBolinha,diametro);
}
function movimentaBolinha(){
  xBolinha+= velocidadeXbolinha;
  yBolinha+= velocidadeYbolinha;
  
}
function mostraRaquetejogador(){
  fill ("white")
  stroke("pink")
  
  rect(xRaquetejogador,yRaquetejogador,alturaRaquetejogador,larguraRaquetejogador);
} 
function verificaColisao(){
  if(xBolinha>width || xBolinha<0){
  velocidadeXbolinha*=-1;
    
    if(yBolinha>height||yBolinha<0){
     velocidadeYbolinha*=-1;
    }}
}
function movimentaRaquetejogador(){
  if(keyIsDown(UP_ARROW)){
    yRaquetejogador-=10;
    
  }
   if(keyIsDown(DOWN_ARROW)){
    yRaquetejogador+=10;
  }
}
function verificaColisaoRaquetejogador(
xRaquetejogador,
yRaquetejogador,
alturaRaquetejogador,
larguraRaquetejogador,
xBolinha,
yBolinha,
diametro / 2);} 
) {
  

  if(colidiu==true){
    velocidadexBolinha *= -1;
  }
function mostraRaqueteOponente(){
   rect(xRaqueteOponente,yRaqueteOponente,alturaRaqueteOponente,larguraRaqueteOponente);
}
   
  function movimentaRaqueteOponente();
  velocidadeYOponente= yBolinha - yRaqueteOponente - alturaRaqueteOponen
  