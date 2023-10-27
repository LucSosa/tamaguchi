import  Prompt  from "prompt-sync"

import Personagem from "./character";

const teclado = Prompt()
let continua = true

const personagem = new Personagem("Meu Pet", "Gato");
personagem.welcomeMessage()

while (continua) {
    console.log('|================= MENU =================|');
    console.log('| 0. Alimentar                           |');
    console.log('| 1. Brincar                             |');
    console.log('| 2. Dormir                              |');
    console.log('| 3. Cuidar da Higiene                   |');
    console.log('| 4. Dar Carinho                         |');
    console.log('| 5. Tratar Doença                       |');
    console.log('| 6. Envelhecer                          |');
    console.log('| 9. Sair                                |');
    console.log('|========================================|');
    
    const opcao:number = +teclado('Escolha uma ação: ')


switch (opcao) {
    case 6:
        personagem.envelhecer()
        break
    
    case 9:
        continua = false
        break;
    default:
        break;
    }

}

  // Exemplos de interações com o personagem
//   personagem.cuidarHigiene();
//   personagem.brincar();
//   personagem.alimentar();
//   personagem.dormir();
//   personagem.darCarinho();
//   personagem.envelhecer();
//   personagem.tratarDoenca();