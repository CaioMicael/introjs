document.write("Linha escrita pelo JS");
let hora = parseInt(window.prompt("Qual a hora atual?"));
let nome = window.prompt("Qual seu nome?");
if (hora >= 12) {
    window.alert("Boa tarde "+nome);
}

else if (hora >= 18) {
    window.alert("Boa noite "+nome);
}

else if (hora >=6 && hora <12) {
    window.alert("Bom dia "+nome);
}