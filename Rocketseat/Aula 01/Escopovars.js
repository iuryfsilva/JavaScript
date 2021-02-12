

// var e global e também local
//var y
//hoisting o js eleva ou declara o var antes do {} e atribui o var como undefined
console.log('Existe x antesd do bloco? ',y);

{
    var y = 1231231;// aqui o js atualiza o valor que antes era undefined
    console.log(y);
}

console.log('Existe x depois do bloco? ',y);

//const e let são locais e só funcionam no escopo onde foram criadas

//console.log('Existe x antesd do bloco? ',x);

{
    //console.log(x);    
    let x = 'existe x';// so funciona se o x for declarado
    console.log(x);
}

//console.log('Existe x depois do bloco? ',x); //não funciona quando descomentado

{
    const constante = 5;
    console.log('Existe constante depois do bloco? ',constante);  
}
//console.log('Existe constante depois do bloco? ',constante);
