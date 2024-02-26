function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if (lista.textContent == '') {
        lista.innerHTML = nomeAmigo.value;
    } else {
        lista.innerHTML = lista.innerHTML + ', ' + nomeAmigo.value;
    }

    nomeAmigo.value = '';
}

function sortear() {

}

function reiniciar() {

}