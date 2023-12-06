import Personagem from "../character"

interface CarameloProps {
    correrAtrasDeMoto(): void
    mostrarStatusCaramelo(): void
}

export class TamagotchiCaramelo extends Personagem implements CarameloProps {
    private nivelExperiencia: number;

    constructor(nome: string) {
        super(nome, "Caramelo");
        this.saude = 1000
        this.nivelExperiencia = 0;
    }

    correrAtrasDeMoto(): void {
        this.saude -= 10;
        this.nivelExperiencia += 10;
        console.log(`${this.nome} correu atrás de uma moto e ganhou experiência.`);
    }

    brincar(): void {
        super.brincar();
        this.correrAtrasDeMoto();
    }

    darCarinho(): void {
        console.log(`${this.nome} não gosta de carinho`)
    }

    cuidarHigiene(): void {
        console.log(`A raça caramelo não precisa de tratamento higienico`);
    }

    mostrarStatusCaramelo(): void {
        console.log(`${this.nome} é um Caramelo de nível ${this.nivelExperiencia}.`)
    }

    mostrarStatus(): void {
        super.mostrarStatus();
        this.mostrarStatusCaramelo();
    }
}



