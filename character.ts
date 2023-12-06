import { Util } from './utils/Utils';

import { FaseDesenvolvimento } from './enums/enumPhase';
import { CHANCE_DE_ENVELHECER, COMEU_DEMAIS, FICOU_DOENTE } from './enums/enumLife';

export default class Personagem {
  protected nome: string;
  protected classe: string;
  private fase: FaseDesenvolvimento;
  protected saude: number;
  private tempoVida: number;
  private doente: boolean;
  private fome: number;

  constructor(nome: string, classe: string) {
    this.nome = nome;
    this.classe = classe;
    this.fase = FaseDesenvolvimento.OVO;
    this.saude = 100; // 100 representa saúde total
    this.tempoVida = 0;
    this.doente = false;
    this.fome = 20; // A ideia é ir até 100, caso passe começará a ficar doente
  }
  tratarDoenca(): void {
    if (this.doente) {
      this.doente = false;
      this.saude = 100; // Recupera a saúde total após o tratamento
      console.log(`${this.nome} foi tratado e está saudável novamente.`);
    } else {
      console.log(`${this.nome} não está doente. Escolha outra ação.`)
    }
  }

  envelhecer(podeEnvelhecer: Boolean): void {
    if (podeEnvelhecer) {
      if (!this.doente) {
        switch (this.fase) {
          case FaseDesenvolvimento.OVO:
            this.fase = FaseDesenvolvimento.BEBE;
            break;
          case FaseDesenvolvimento.BEBE:
            this.fase = FaseDesenvolvimento.CRIANCA;
            break;
          case FaseDesenvolvimento.CRIANCA:
            this.fase = FaseDesenvolvimento.ADOLESCENTE;
            break;
          case FaseDesenvolvimento.ADOLESCENTE:
            this.fase = FaseDesenvolvimento.ADULTO;
            break;
          case FaseDesenvolvimento.ADULTO:
            this.fase = FaseDesenvolvimento.VELHO;
            break;
          case FaseDesenvolvimento.VELHO:
            this.fase = FaseDesenvolvimento.MORREU;
            break;
          default:
            break;
        }

        this.tempoVida += 1;
        console.log(`${this.nome} cresceu e agora é um ${this.fase}.`);
      } else {
        console.log(`${this.nome} está doente e não pode envelhecer.`);
      }
    }
  }

  verificarSaude(): void {
    if (this.verificaSaude())
      return console.log(`${this.nome} faleceu! :(`)

    const saudavel = this.saude > FICOU_DOENTE;

    if (saudavel) {
      console.log(`${this.nome} está saudável, sua saúde é de ${this.saude}`);
    } else {
      this.doente = true
      console.log(`${this.nome} está doente, faça a tratamento da doença!`);
    }
  }

  verificarVivo(): boolean {
    return this.verificaSaude() && this.fase !== FaseDesenvolvimento.MORREU;
  }

  verificaSaude(): boolean {
    return this.saude <= 0
  }

  cuidarHigiene(): void {
    this.saude += 10;
    console.log(`${this.nome} está mais limpo e saudável.`);
  }

  brincar(): void {
    if (this.verificarVivo()) {
      this.saude += 5;
      console.log(`${this.nome} se divertiu brincando.`);
    }
  }

  alimentar(): void {
    if (!this.verificarVivo()) {
      this.saude += 15;
      this.fome += 20;

      if (this.fome < COMEU_DEMAIS) {
        console.log(`${this.nome} se alimentou e está mais saudável.`);
      } else {
        this.saude -= 10
        console.log(`${this.nome} passou mal, muita comida.`);
      }
    }
  }

  dormir(): void {
    if (this.verificarVivo()) {
      console.log(`${this.nome} dormiu bem.`);
    }

    const envelhece = Util.randomizar(0, 100)
    const verificaSePodeFicarMaisVelho = envelhece > CHANCE_DE_ENVELHECER
    this.envelhecer(verificaSePodeFicarMaisVelho)

    this.passarTempo()

    this.verificarSaude()
  }

  darCarinho(): void {
    if (this.verificarVivo()) {
      this.saude += 5;
      console.log(`${this.nome} se sente amado e feliz.`);
    }
  }

  passarTempo(): void {
    this.tempoVida += 1;
    this.saude -= 5;

    if (this.saude > FICOU_DOENTE) {
      console.log(`${this.nome} envelheceu um pouco.`);
    }
  }

  mostrarStatus(): void {
    console.log('')
  }
}


