var encriptado = CryptoJS.AES.encrypt("mensaje");
var desencriptado = CryptoJS.AES.decrypt(encriptado, "mensaje secreto");

/* 
var cambiante = document.getElementById("Bienvenidos a mi Encriptador");
var keyframes = [
    { opacity: 1},
    { opacity: 0},
];
var opciones = {
    duration: 200,
    iterations: Infinity,
    direction: "alternate",
};
cambiante.animate(keyframes, opciones);
*/
