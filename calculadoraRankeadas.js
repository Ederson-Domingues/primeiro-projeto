// Desafio Calculadora Rankeada

let heroName = "Joe"
let ranking = calcVictories(10,20); // Digite a quantidade de vitórias e derrotas do seu herói

function calcVictories(wins, loss){
    return wins - loss;
}

switch (true){
    case ranking <= 10:
        console.log("O herói " + heroName + " tem " + ranking + " vitórias e está no nível FERRO");
    break;
    case ranking <= 20:
        console.log("O herói " + heroName + " tem " + ranking + " vitórias e está no nível BRONZE");
    break;
    case ranking <= 50:
        console.log("O herói " + heroName + " tem " + ranking + " vitórias e está no nível PRATA");
    break;
    case ranking <= 80:
        console.log("O herói " + heroName + " tem " + ranking + " vitórias e está no nível OURO");
    break;
    case ranking <= 90:
        console.log("O herói " + heroName + " tem " + ranking + " vitórias e está no nível DIAMANTE");
    break;
    case ranking <= 100:
        console.log("O herói " + heroName + " tem " + ranking + " vitórias e está no nível LENDÁRIO");
    break;
    default:
        console.log("O herói " + heroName + " tem " + ranking + " vitórias e está no nível IMORTAL");
}
