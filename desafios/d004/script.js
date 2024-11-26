document.getElementById('inputNumber').addEventListener('keydown',function(event){
    if (event.key === 'Enter'){
        verificar()
    }
})

function verificar() {
    let num = document.getElementById('inputNumber')
    let tab = document.getElementById('seltab')

    if (num.value.trim() === '') {
        alert('Por favor, digite um número')
        return
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ""
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

}