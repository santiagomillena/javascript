document.getElementById('inputNumber').addEventListener('keydown',function(event){
    if (event.key === 'Enter'){
        verificar()
    }
})

function verificar() {
    let num = document.getElementById('inputNumber')
    let tab = document.getElementById('seltab')
    let result = document.getElementById('result')

    if (num.value.trim() === '') {
        alert('Por favor, digite um número')
        return
    } else {
        let n = Number(num.value)
    }

}