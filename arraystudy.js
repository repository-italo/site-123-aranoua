const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

/**
 * 
 * Template Literals  ( `${variable} is the value`)

console.log(JSON.parse(JSON.stringify(map)))
Código do Map
*/
//const map = arr.map((i) => i + ` is the ${arr.indexOf(i) + 1}º letter of the alphabet `) /**Uso do MAP */
//arr.forEach(e => console.log(` ${e} is the ${(arr.indexOf(e)) + 1}º letter of the alphabet`)) /**E o uso do forEach para essencialmente a mesma coisa */
//console.log(`${arr.join(', ')} are the letters of the alphabet`) /**Uso do join para juntar os elementos do array em um só caractere */
const arr2 = arr.filter(i => arr.indexOf(i) >= 20) /**Uso do Filter, filtrando os elementos indicados na função arrow */
console.log(JSON.parse(JSON.stringify(arr2)))

const arr3 = arr.concat(arr2)


console.log(JSON.parse(JSON.stringify(arr3)))