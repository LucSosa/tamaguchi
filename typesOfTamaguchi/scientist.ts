import Personagem from "../character";
import { CharProps } from "./interfaceChar";

interface AventureiroProps {
    realizarAtividadeCientifica(): void
}
export class TamagotchiCientista extends Personagem implements AventureiroProps, CharProps {
    private nivelExperiencia: number;

    constructor(nome: string) {
        super(nome, "Aventureiro");
        this.nivelExperiencia = 0;
    }
    realizarAtividadeCientifica(): void {
        this.saude -= 5;
        this.nivelExperiencia += 10;
        console.log(`${this.nome} realizou um experimento e ganhou experiência.`);

    }

    brincar(): void {
        super.brincar();
        this.realizarAtividadeCientifica();
    }

    mostrarStatusCientista(): void {
        console.log(`${this.nome} é um Aventureiro de nível ${this.nivelExperiencia}.`);
    }

    mostrarStatus(): void {
        super.mostrarStatus()
        this.mostrarStatusCientista()
    }
}