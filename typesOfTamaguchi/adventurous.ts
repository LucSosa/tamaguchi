import Personagem from "../character";

interface AventureiroProps {
    realizarAtividadeAventura(): void
    mostrarStatus(): void
}
export class TamagotchiAventureiro extends Personagem implements AventureiroProps {
    private nivelExperiencia: number;

    constructor(nome: string) {
        super(nome, "Aventureiro");
        this.nivelExperiencia = 0;
    }

    // Método específico para o Tamagotchi Aventureiro
    realizarAtividadeAventura() {
        this.saude -= 5;
        this.nivelExperiencia += 10;
        console.log(`${this.nome} realizou uma atividade de aventura e ganhou experiência.`);
    }

    // Sobrescreve o método da classe pai para adicionar um comportamento específico
    brincar() {
        super.brincar();
        this.realizarAtividadeAventura();
    }

    // Método específico para o Tamagotchi Aventureiro
    mostrarStatusAventureiro() {
        console.log(`${this.nome} é um Aventureiro de nível ${this.nivelExperiencia}.`);
    }

    mostrarStatus() {
        super.mostrarStatus()
        this.mostrarStatusAventureiro()
    }
}