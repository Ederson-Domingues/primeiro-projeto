// Desafio Classificador de nível de Herói

let nome = "Dan"
let nivelXP = 0

switch (true){
    case nivelXP <= 1000:
        console.log(nome + " tem " + nivelXP + " pontos XP e esta no nível FERRO");
    break;
    case nivelXP <= 2000:
        console.log(nome + " tem " + nivelXP + " pontos XP e esta no nível BRONZE");
    break;
    case nivelXP <= 5000:
        console.log(nome + " tem " + nivelXP + " pontos XP e esta no nível PRATA");
    break;
    case nivelXP <= 7000:
        console.log(nome + " tem " + nivelXP + " pontos XP e esta no nível OURO");
    break;
    case nivelXP <= 8000:
        console.log(nome + " tem " + nivelXP + " pontos XP e esta no nível PLATINA");
    break;
    case nivelXP <= 9000:
        console.log(nome + " tem " + nivelXP + " pontos XP e esta no nível ASCENDENTE");
    break;
    case nivelXP <= 10000:
        console.log(nome + " tem " + nivelXP + " pontos XP e esta no nível IMORTAL");
    break;
    default:
        console.log(nome + " tem " + nivelXP + " pontos XP e esta no nível RADIANTE");
}
