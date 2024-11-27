let num = [5,8,4]
num.push(1)
num.sort()
console.log (`o vetor ${num} tem ${num.length} posições`)
console.log (`o primeiro elemento do vetor é ${num[0]}`)

let pos = num.indexOf(3)
if (pos == -1){
    console.log("O valor não foi encontrado")
} else {
    console.log (`O valor 8 está na posição ${pos}`)
}
