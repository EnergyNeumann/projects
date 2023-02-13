const alunos = ['Luiz', 'Maria', 'João']
console.log(alunos[0])

//trocar/alterar valor do elemento
console.log(alunos.length)
alunos[0] = 'Eduardo'

//adicionar elemento no 3
alunos[3] = 'Luizao'

//adicionar elemento no final
alunos[alunos.length] = 'Anão'
alunos.push('Otávio')

//adicionar no começo
alunos.unshift('Luiza')
console.log(alunos)

//remover do fim
alunos.pop()

//remover do começo
const removido = alunos.shift()

//apagar algum elemento
delete alunos[1]

//pegar elementos até tal parte
console.log(alunos.slice(0, 2))

//se é array ou não
console.log(alunos instanceof Array)