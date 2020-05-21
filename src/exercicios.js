//Exercícios: Modulo 1
// 1)
class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin() {
        if (this.admin == true) {
            return true;
        } else return false;
    }
}

class Admin extends Usuario {
    constructor() {
        super();
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) //true

// 2)

//map
const usuarios = [  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
 { nome: 'Lucas', idade: 30, empresa: 'Facebook' },];

 const idades = usuarios.map(function(item) {
     return item.idade;
 }) 

console.log(idades);

//filter
const filtro = usuarios.filter(function(item) {
    if (item.empresa == "Rocketseat" && item.idade > 18) {
        return item;
    }
})

console.log(filtro);

//find
const finded = usuarios.find(function(item) {
    if (item.empresa == "Google") return item
})

console.log(finded);

//unindo operações

const maisVelhos = usuarios.map(function(item) {
    return item.idade *= 2;
})

console.log(usuarios);

const unidos = usuarios.filter(function(item) {
    if (item.idade < 50) {
        return item;
    }
})

console.log(unidos)

// 3) Arrow functions

// 3.1
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(item => item + 10 );

console.log(newArr);

// 3,2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = (usuario =>  usuario.idade);

console.log(mostraIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = "Diego", idade = 23) =>  nome;
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4
const promise = () => {  
    return new Promise(resolve, reject => {
    return resolve(); 
 })
}

// 4) Desestruturação simples

// 4.1)
const empresa = {
    nome1: 'Rocketseat',
    endereco: {    
    cidade: 'Rio do Sul', 
    estado: 'SC', 
    }
};

const { nome1, endereco: { estado, cidade } } = empresa;

console.log(nome1);
console.log(cidade);
console.log(estado);

// 4.2)
const usuario1 = {
    nome: 'Diego',
    idade: 23
}

function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo(usuario));

// 5)
// 5,1)
const arr1 = [1, 2, 3, 4, 5, 6];
const [ x, ...y ] = arr1;

console.log(x);
console.log(y);

function soma(...numbers) {
    return numbers.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

// 5.2)

const usu = {
    nome: 'Diego',
    idade: 23,
    endereco: {    
    cidade: 'Rio do Sul', 
    estado: 'SC',
    pais: 'Brasil', 
    }
};

const usu2 = { ...usu, nome: 'Gabriel'}
const usu3 = { ...usu, endereco: {...usu.endereco, cidade: 'Lontras'}};

console.log(usu2);
console.log(usu3);

// 6)
const user = "Diego";
const age = 23;
console.log(`O usuário ${user} possui ${idade} anos`)

// 7)
const name = 'Diego';
const age1 = 23;
const user1 = {  
     nome, 
     age1,
     cidade: 'Rio do Sul'
    };

console.log(user1);




