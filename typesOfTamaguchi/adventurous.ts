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

    realizarAtividadeAventura(): void {
        this.saude -= 5;
        this.nivelExperiencia += 10;
        console.log(`${this.nome} realizou uma atividade de aventura e ganhou experiência.`);
    }

    brincar(): void {
        super.brincar();
        this.realizarAtividadeAventura();
    }

    mostrarStatusAventureiro(): void {
        console.log(`${this.nome} é um Aventureiro de nível ${this.nivelExperiencia}.`);
    }

    mostrarStatus(): void {
        super.mostrarStatus()
        this.mostrarStatusAventureiro()
    }
}