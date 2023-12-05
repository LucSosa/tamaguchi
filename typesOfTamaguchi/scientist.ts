import Personagem from "../character";

interface AventureiroProps {
    realizarAtividadeCientifica(): void
    mostrarStatusAventureiro(): void
}
export class TamagotchiCientista extends Personagem implements AventureiroProps {
    private nivelExperiencia: number;

    constructor(nome: string) {
        super(nome, "Aventureiro");
        this.nivelExperiencia = 0;
    }

    // Método específico para o Tamagotchi Aventureiro
    realizarAtividadeCientifica() {
        if (this.verificarVivo()) {
            this.saude -= 5;
            this.nivelExperiencia += 10;
            console.log(`${this.nome} realizou um experimento e ganhou experiência.`);
            this.passarTempo();
            this.verificarSaude();
        }
    }

    // Sobrescreve o método da classe pai para adicionar um comportamento específico
    brincar() {
        super.brincar(); // Chama o método da classe pai
        console.log(`${this.nome} realizou um experimento.`);
        this.realizarAtividadeCientifica();
    }

    // Método específico para o Tamagotchi Aventureiro
    mostrarStatusAventureiro() {
        console.log(`${this.nome} é um Aventureiro de nível ${this.nivelExperiencia}.`);
    }
}