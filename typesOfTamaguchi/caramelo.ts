import Personagem from "../character"

interface CarameloProps {
    correrAtrasDeMoto(): void
    mostrarStatusCaramelo(): void
}

export class TamagotchiCaramelo extends Personagem implements CarameloProps {
    private nivelExperiencia: number;

    constructor(nome: string) {
        super(nome, "Caramelo");
        this.nivelExperiencia = 0;
    }

    // Método específico para o Tamagotchi Caramelo
    public correrAtrasDeMoto() {

        if (this.verificarVivo()) {
            this.saude -= 10;
            this.nivelExperiencia += 10;
            console.log(`${this.nome} correu atrás de uma moto e ganhou experiência.`);
            this.passarTempo()
            this.verificarSaude()
        }
    }

    // Sobrescreve o método da classe pai para adicionar um comportamento específico
    brincar() {
        super.brincar();
        this.correrAtrasDeMoto();
    }

    mostrarStatusCaramelo() {
        console.log(`${this.nome} é um Caramelo de nível ${this.nivelExperiencia}.`)
    }

    mostrarStatus() {
        super.mostrarStatus();
        this.mostrarStatusCaramelo();
    }
}



