let amigo = {nome: 'José', //Posição [nome] recebe o valor string 'José'
 sexo: 'M',     //Posição [Sexo] recebe o valor string 'M'
 peso: 85.4,   //Posição [Peso] recebe o valor number -> 85.4
 engordar(p=0){ //Caso não seja passado nenhum parâmetro p função, ela irá valer 0
    console.log('Engordou') //Mensagem que será mostrada quando a função for executada
    this.peso += p  //Referenciando a posição peso dentro do Objeto (amigo) e fazendo ele receber o valor de peso + o parâmetro que foi passado p funçaõ engordar() que no caso foi 2
 }}

amigo.engordar(2)  //Passando o parâmetro 2 para dentro da função engordar() que após a função ser executada o peso irá valer 87.4Kg
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`) //Exibindo posições específicas de um Objeto de forma simplificada