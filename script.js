const elMinuto = document.querySelector('#minuto')
const elSegundo = document.querySelector('#segundo')
const elMilesimo = document.querySelector('#milesimo')
const btInicio = document.querySelector('#inicio')
const btPausa = document.querySelector('#pausa')
const btContinua = document.querySelector('#continua')
const btReinicia = document.querySelector('#reinicia')

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let pausado = false;
let interval;


btInicio.addEventListener("click", start);
btPausa.addEventListener("click", pause);
btContinua.addEventListener("click", continuar);
btReinicia.addEventListener("click", reset)


function start(){
    interval = setInterval(() => {

        if(!pausado){

           milliseconds += 10;
            
            if(milliseconds===1000){
                seconds++;
                milliseconds=0;
            }
            if(seconds===60){
                minutes++;
                seconds=0;
            }

            elMinuto.textContent = formato(minutes);
            elSegundo.textContent = formato(seconds);
            elMilesimo.textContent = formatoMile(milliseconds);
        }
    },10);

    btInicio.style.display = "none";
    btPausa.style.display = "block";
}

function pause (){
    pausado = true
    btPausa.style.display = "none";
    btContinua.style.display = "block";
 }

function continuar () {
    pausado = false
    btPausa.style.display = "block";
    btContinua.style.display = "none";
}

function reset() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    elMinuto.textContent = "00";
    elSegundo.textContent = "00";
    elMilesimo.textContent= "000";

    btInicio.style.display = "block";
    btPausa.style.display = "none"; 
    btContinua.style.display = "none";
}

function formato(tempo){
    return tempo < 10 ? `0${tempo}` : tempo;
}

function formatoMile(tempo){
    return tempo < 100? `${tempo}`.padStart(3,"0") : tempo;
}