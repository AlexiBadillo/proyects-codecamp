const cronometro = document.getElementById('cronometro');
const botonIncioPausa = document.getElementById('boton-inicio-pausa');
const botonReiniciar = document.getElementById('boton-reiniciar');
let [horas, minutos, segundos] = [0, 0, 0];
let intervaloDeTiempo;
let estadoCronometro = 'pausado';
function actualizarCronometro() {
  segundos++;
  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;
    if (minutos / 60 === 1) {
      minutos = 0;
      horas++;
    }
  }
  const segundosConFormato = asignarFormato(segundos);
  const minutosConFormato = asignarFormato(minutos);
  const horasConFormato = asignarFormato(horas);
  cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}

function asignarFormato(unidadDeTiempo) {
  return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;
}

botonIncioPausa.addEventListener('click', function() {
  if (estadoCronometro === 'pausado') {
    intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
    botonIncioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
    botonIncioPausa.classList.remove('iniciar');
    botonIncioPausa.classList.add('pausar');
    estadoCronometro = 'andando';
  } else {
    window.clearInterval(intervaloDeTiempo);
    botonIncioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    botonIncioPausa.classList.remove('pausar');
    botonIncioPausa.classList.add('iniciar');
    estadoCronometro = 'pausado';
  }
});

botonReiniciar.addEventListener('click', function() {
  window.clearInterval(intervaloDeTiempo);
  segundos = 0;
  minutos = 0;
  horas = 0;
  cronometro.innerText = '00:00:00';
  botonIncioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
  botonIncioPausa.classList.remove('pausar');
    botonIncioPausa.classList.add('iniciar');
    estadoCronometro = 'pausado';


});