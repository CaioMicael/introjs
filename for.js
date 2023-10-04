function tabuada() {
    let num = parseInt(document.getElementById('inum').value);
    let resultado = '';

    for (i=0; i<=10; i++) {
        resultado += num + 'x' + i + '=' + (num*i);
        resultado += "<br>";
    }
    document.getElementById('dresultado').innerHTML = resultado;
}