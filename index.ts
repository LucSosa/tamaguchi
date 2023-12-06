import Prompt from "prompt-sync"

import { TamagotchiAventureiro } from "./typesOfTamaguchi/adventurous";
import { TamagotchiCientista } from "./typesOfTamaguchi/scientist";
import { TamagotchiCaramelo } from "./typesOfTamaguchi/caramelo";

const teclado = Prompt()
let continua = true

console.log('Bem-Vindo ao terminal Tamaguchi, seu bichinho virtual :D');
const name: string = teclado('Escolha o nome do seu Tamaguchi: ')

console.log('|================= RAÇAS ================|');
console.log('| 0. Aventureiro                         |');
console.log('| 1. Cientista                           |');
console.log('| 2. Caramelo                            |');
console.log('|                                        |');
console.log('| 9. Sair                                |');
console.log('|========================================|');
const opcaoRace: number = +teclado('Escolha uma raça: ')

const aventureiro = new TamagotchiAventureiro(name)
const cientista = new TamagotchiCientista(name)
const caramelo = new TamagotchiCaramelo(name)

const race = [aventureiro, cientista, caramelo]

while (continua || race[opcaoRace].verificarVivo()) {
    console.log('|================= MENU =================|');
    console.log('| 0. Alimentar                           |');
    console.log('| 1. Brincar                             |');
    console.log('| 2. Dormir                              |');
    console.log('| 3. Cuidar da Higiene                   |');
    console.log('| 4. Dar Carinho                         |');
    console.log('| 5. Tratar Doença                       |');
    console.log('| 6. Mostrar Status                      |');
    console.log('| 9. Sair                                |');
    console.log('|========================================|');

    const opcao: number = +teclado('Escolha uma ação: ')


    switch (opcao) {
        case 0:
            race[opcaoRace].alimentar()
            break;
        case 1:
            race[opcaoRace].brincar()
            break;
        case 2:
            race[opcaoRace].dormir()
            break;
        case 3:
            race[opcaoRace].cuidarHigiene()
            break;
        case 4:
            race[opcaoRace].darCarinho()
            break;
        case 5:
            race[opcaoRace].tratarDoenca()
            break;
        case 6:
            race[opcaoRace].mostrarStatus()
            break
        case 9:
            continua = false
            break;
        default:
            break;
    }

}