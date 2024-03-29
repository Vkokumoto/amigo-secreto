let amigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');

    // proteção de entrada 
    if (nomeAmigo.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    if (amigos.includes(nomeAmigo.value)) {
        alert('Nome já adicionado! Digite outro.');
        return;
    }

    let lista = document.getElementById('lista-amigos');

    amigos.push(nomeAmigo.value);
    if (lista.textContent == '') {
        lista.textContent = nomeAmigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + nomeAmigo.value;
    }

    nomeAmigo.value = '';
}

function sortear() {
    if (amigos.length < 3) {
        alert('Adicione pelo menos 3 amigos!');
        return;
    }
    // embaralhando array com algoritmo de Fisher-Yates
    embaralha(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++){
        if (i == amigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br/>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[i+1] + '<br/>';
        }   
    }
}

// algoritmo de Fisher-Yates
function embaralha(lista) {

    for (let indice = lista.lenght; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}