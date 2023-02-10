let umaString = "Um texto";
console.log(umaString.concat(' ', 'em', ' ', 'um'))
console.log(umaString + ' em um lindo dia ')
console.log(`${umaString} em um dia lindo`)
console.log(umaString[4]);
console.log(umaString.charAt(4)); //pegar elemento da posição 4
console.log(umaString.indexOf('texto')); //em que posição está texto
console.log(umaString.indexOf('o', 3))
console.log(umaString.lastIndexOf('o')) //buscar de trás para frente
console.log(umaString.replace(/Um/, 'Outra'));
console.log(umaString.length);
console.log(umaString.slice(2, 5));
console.log(umaString.split('r'));//tirar os r
console.log(umaString.toLowerCase());
console.log(umaString.toUpperCase());


