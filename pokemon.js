class Pokemon {
    constructor(name, type, skills, hp, status){
        this.name = name
        this.type = type
        this.skills = skills
        this.hp = hp
        this.status = status
    }

    attack(pokemon){
        if(this.hp > 0){
            console.log(this.name, "atacando a: ", pokemon.name);
            let skill = this.skills[0]
            let power = skill.verifyElement(pokemon.type, skill.power)
            pokemon.reduceHP(power)
        } else {
            console.log(this.name, "no puede atacar, vida: ", this.hp);
        }
    }

    isAlive(){
        return this.hp > 0
    }

    reduceHP(power){
        this.hp = this.hp - power
        console.log(this.name, "ahora tiene hp:", this.hp)
    }
}

class Batalla{
    constructor(team1,team2){
        this.team1 = team1 
        this.team2 = team2 
    }

    luchar(){
        console.log("Batalla iniciada...");

        let indexTeam1=0
        let indexTeam2=0

        while(indexTeam1 < this.team1.length && indexTeam2 < this.team2.length){
            let pokemon1 = this.team1[indexTeam1]
            let pokemon2 = this.team2[indexTeam2]

            let survivor = this.atacarHastaDerrotar(pokemon1,pokemon2)
            if(survivor === pokemon1){
                indexTeam2++
            }else{
                indexTeam1++
            }
        }

        if(indexTeam1 >= this.team1.length){
            console.log("🔥 GANÓ EL EQUIPO 2 🔥");
        } else {
            console.log("🔥 GANÓ EL EQUIPO 1 🔥");
        }

        console.log("Equipo1:",this.team1);
        console.log("Equipo2:",this.team2);
    }

    atacarHastaDerrotar(pokemon1,pokemon2){
        while(pokemon1.hp > 0 && pokemon2.hp > 0){
            pokemon1.attack(pokemon2)
            if(pokemon2.hp <= 0) break;
            pokemon2.attack(pokemon1)
        }

        if(pokemon1.hp > 0){
            console.log("Survivor: ",pokemon1.name);
            return pokemon1
        }else{
            console.log("Survivor: ",pokemon2.name);
            return pokemon2
        }
    }
}

class Element{
    calculatePower(enemyElement,attack,strongAgainst,weakAgainst){
        if(enemyElement === weakAgainst){
            console.log("💤 El ataque fue débil");
            return attack - 10
        } else if(enemyElement === strongAgainst){
            console.log("💥 El ataque fue FUERTE");
            return attack + 10
        }else{
            console.log("➡️ El ataque fue normal");
            return attack
        }
    }
}

class Agua extends Element{
    strongAgainst = "Fuego"
    weakAgainst = "Planta"
    verifyElement(enemyElement,attack){
        return super.calculatePower(
            enemyElement,
            attack,
            this.strongAgainst,
            this.weakAgainst
        )
    }
}

class Fuego extends Element{
    strongAgainst = "Planta"
    weakAgainst = "Agua"
    verifyElement(enemyElement,attack){
        return super.calculatePower(
            enemyElement,
            attack,
            this.strongAgainst,
            this.weakAgainst
        )
    }
}

class Planta extends Element{
    strongAgainst = "Agua"
    weakAgainst = "Fuego"
    verifyElement(enemyElement,attack){
        return super.calculatePower(
            enemyElement,
            attack,
            this.strongAgainst,
            this.weakAgainst
        )
    }
}

class Cascada extends Agua{
    power = 102
}
class Hidrobomba extends Agua{
    power = 98
}

class Lanzallamas extends Fuego{
    power = 105
}

class HojaAfilada extends Planta{
    power = 100
}

const charmander1 = new Pokemon(
    "Charmander1",
    "Fuego",
    [new Lanzallamas()],
    1000,
    true
)
const charmander22 = new Pokemon(
    "Charmander2",
    "Fuego",
    [new Lanzallamas()],
    1000,
    true
)

const squirtle1 = new Pokemon(
    "Squirtle1",
    "Agua",
    [new Hidrobomba()],
    900,
    true
)
const squirtle2 = new Pokemon(
    "Squirtle2",
    "Agua",
    [new Cascada()],
    900,
    true
)

const bulbasaur1 = new Pokemon(
    "Bulbasaur1", 
    "Planta",
    [new HojaAfilada()],
    1100,
    true
)

const bulbasaur2 = new Pokemon(
    "Bulbasaur2", 
    "Planta",
    [new HojaAfilada()],
    1100,
    true
)

const team1 = [charmander1,squirtle1,bulbasaur1]
const team2 = [squirtle2,bulbasaur2,charmander22]

const battle = new Batalla(team1,team2)
battle.luchar()