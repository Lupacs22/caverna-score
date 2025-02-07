function calcularPontos() {
    let agricultura = parseInt(document.getElementById("agricultura").value) || 0;
    let mineracao = parseInt(document.getElementById("mineracao").value) || 0;
    let construcao = parseInt(document.getElementById("construcao").value) || 0;
    let comida = parseInt(document.getElementById("comida").value) || 0;
    let animais = parseInt(document.getElementById("animais").value) || 0;

    let total = agricultura + mineracao + construcao + comida + animais;

    document.getElementById("resultado").textContent = total;
}
