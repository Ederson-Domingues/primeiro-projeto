// Classes de um jogo

class hero{
    constructor(name, age, type,){
    this.name = name
    this.age = age
    this.type = type
    }
    attacking(){
        let attack = ""
        if(this.type === "guerreiro"){
            attack = "espada"
        }else if (this.type === "mago") {
            attack = "magia"
        }else if (this.type === "monge") {
            attack = "artes marciais"
        }else if (this.type === "ninja") {
            attack = "shuriken"
        }
        console.log(`O ${this.type} atacou usando ${attack}`)
    }
}
let myHero = new hero("Havy", 19, "ninja") //Altere de acordo com o tipo do seu herói (guerreiro, mago, monge ou ninja)
myHero.attacking()