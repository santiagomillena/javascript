var agora = new Date ()
var hora = agora.getHours()
console.log (`Agora são exatamente ${hora} horas.`)
if (hora < 5){
    console.log ('Boa madrugada!')
} else if (hora < 12){
    console.log ('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log ('Boa noite!')
}

// Para trabalhar com datas e horários em páginas web, é possível usar o objeto Date e os seus métodos:
// Métodos:

// getDate() Retorna o dia atual do mês (de 1 a 31)

// getMonth() Retorna o mês da data especificada, mas os valores são indexados em zero (ou seja, de 0 a 11)

// getFullYear() Retorna o ano atual do sistema

// getHours(): Retorna a hora atual

// Exemplos:

// now = new Date; Cria uma nova variável de data chamada now com a data atual

// document.write("Hoje é " + now.getDay() + ", " + now.getDate() + " de " + now.getMonth() + " de " + now.getFullYear()); Escreve na tela a data atual 