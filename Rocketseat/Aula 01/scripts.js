{
    let x = 0;
    console.log(x);
}

// var e global e também local
//var y
//hoisting o js eleva ou declara o var antes do {} e atribui o var como undefined
console.log('Existe x antesd do bloco? ',y);

{
    var y = 1231231;// aqui o js atualiza o valor que antes era undefined
    console.log(y);
}
console.log('Existe x depois do bloco? ',y);