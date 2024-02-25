var x = 3


/**Uso de Currying*/
function soma(a){
   return function(b){
      return function(c){
         return a+b+c
      }
   }
}
const soma2 = a => b => c => a + b + c
/**Exemplo 2 de uso de Currying */

/**Lambda Calculus */
/** STATEMENT ? TRUE : FALSE / OPERADOR TERNÁRIO */
const TRUE = a => _ => a
/**Lambda Calculus */
const FALSE = _ => b => b
TRUE.inspect = () => 'Verdadeiro'
FALSE.inspect =() => 'Falso'
/**Lambda Calculus */
const  NOT = a => a(FALSE)(TRUE)
/**Lambda Calculus */
const AND = a => b => a(b)(FALSE)
/**Lambda Calculus */
const OR = a => b => a(TRUE)(b)

const r = OR(FALSE)(TRUE)

console.log(r)
module.exports = soma