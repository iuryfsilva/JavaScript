let amigo = {
    nome: 'ze',
    sexo: 'M', 
    peso: 87.5,
    engordar(p = 0){
        console.log('Engordou ' + p + ' kg');
        this.peso  += p;
    }
};
console.log(amigo);

amigo.engordar(2);

console.log(`${amigo.nome} pesa ${amigo.peso}kg`);