const segundosPonteiro = document.querySelector('.segundos');
const minutosPonteiro = document.querySelector('.minutos');
const horasPonteiro = document.querySelector('.horas');

function relogio(){
    const agora = new Date();

    const segundos = agora.getSeconds();
    const segundosDegrees = ((segundos / 60) * 360) + 90;
    segundosPonteiro.style.transform = `rotate(${segundosDegrees}deg)`;

    const minutos = agora.getMinutes();
    const minutosDegrees = ((minutos / 60) * 360) + ((segundos / 60) * 6) + 90;
    minutosPonteiro.style.transform = `rotate(${minutosDegrees}deg)`;

    const horas = agora.getHours();
    const horasDegrees = ((horas / 12) * 360) + ((minutos / 60) * 30) + 90;
    horasPonteiro.style.transform = `rotate(${horasDegrees}deg)`;
}

setInterval(relogio, 1000);