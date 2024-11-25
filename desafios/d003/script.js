function verificar() { 
    let start = document.getElementById('inputStartCount');
    let end = document.getElementById('inputEndCount');
    let step = document.getElementById('inputStep');
    let result = document.getElementById('result');

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        window.alert('[ERRO] Faltam dados!');
    } else {
        result.innerHTML = 'Contando...<br>';
        let i = Number(start.value);
        let f = Number(end.value);
        let p = Number(step.value);

        // Trata passos inválidos
        if (p <= 0) {
            alert("Passo inválido! Considerando passo = 1");
            p = 1;
        }

        // Contagem crescente
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                result.innerHTML += ` ${c} \u{1F449}`; // Adiciona o número com uma seta
            }
        } 
        // Contagem decrescente
        else {
            for (let c = i; c >= f; c -= p) {
                result.innerHTML += ` ${c} \u{1F449}`; // Adiciona o número com uma seta
            }
        }

        result.innerHTML += ` \u{1F3C1}`; // Adiciona uma bandeira no final
    }
}