import Personagem from "../character";

interface AventureiroProps {
    realizarAtividadeCientifica(): void
    mostrarStatus(): void
}
export class TamagotchiCientista extends Personagem implements AventureiroProps {
    private nivelExperiencia: number;

    constructor(nome: string) {
        super(nome, "Aventureiro");
        this.nivelExperiencia = 0;
    }
    mostrarStatusAventureiro(): void {
        throw new Error("Method not implemented.");
    }

    realizarAtividadeCientifica() {
        this.saude -= 5;
        this.nivelExperiencia += 10;
        console.log(`${this.nome} realizou um experimento e ganhou experiência.`);

    }

    // Sobrescreve o método da classe pai para adicionar um comportamento específico
    brincar() {
        super.brincar();
        this.realizarAtividadeCientifica();
    }

    mostrarStatusCientista() {
        console.log(`${this.nome} é um Aventureiro de nível ${this.nivelExperiencia}.`);
    }

    mostrarStatus(): void {
        super.mostrarStatus()
        this.mostrarStatusCientista()
    }
}