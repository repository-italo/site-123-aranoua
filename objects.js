 const person = {
   nome: '',
   age: 0,
   bio: () => console.log(`Hello, my name is ${this.nome}, and I'm ${this.age} years old `)
  
}





class Estudante {
   nome;
   idade;
   constructor(nome, idade){
      this.nome = nome;
      this.idade = idade;
   }
   bio(){
      console.log(`${this.nome} e ${this.idade}`)
   } 
}
const  Augurio = new Estudante('Augurio', 23)

console.log(typeof(Augurio))

