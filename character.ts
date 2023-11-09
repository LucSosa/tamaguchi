// Definição das classes para as diferentes fases de desenvolvimento do personagem
import { Util } from './Utils';
import { FaseDesenvolvimento } from './enumPhase'

const CHANCE_DE_ENVELHECER = 70
  
  // Definição da classe Personagem
export default class Personagem {
    private nome: string;
    private classe: string;
    private fase: FaseDesenvolvimento;
    private saude: number;
    private tempoVida: number;
    private doente: boolean;
  
    constructor(nome: string, classe: string) {
      this.nome = nome;
      this.classe = classe;
      this.fase = FaseDesenvolvimento.OVO;
      this.saude = 100; // 100 representa saúde total
      this.tempoVida = 0;
      this.doente = false;
    }
  
    // Método para tratar a doença do personagem
    tratarDoenca() {
      if (this.doente) {
        this.doente = false;
        this.saude = 100; // Recupera a saúde total após o tratamento
        console.log(`${this.nome} foi tratado e está saudável novamente.`);
      }
    }
  
    // Método para envelhecer o personagem
    envelhecer(podeEnvelhecer: Boolean) {
      if (podeEnvelhecer) {
        if (!this.doente) {
        // Se o personagem não estiver doente, ele envelhece
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
  
    // Método para verificar se o personagem está saudável
    verificarSaude() {
      return this.saude > 0;
    }
  
    // Método para verificar se o personagem está vivo
    verificarVivo() {
      return this.saude > 0 && this.fase !== FaseDesenvolvimento.ADULTO;
    }
  
    // Método para cuidar da higiene do personagem
    cuidarHigiene() {
      if (this.verificarVivo()) {
        this.saude += 10;
        console.log(`${this.nome} está mais limpo e saudável.`);
      }
    }
  
    // Método para brincar com o personagem
    brincar() {
      if (this.verificarVivo()) {
        this.saude += 5;
        console.log(`${this.nome} se divertiu brincando.`);
      }
    }
  
    // Método para alimentar o personagem
    alimentar() {
      if (this.verificarVivo()) {
        this.saude += 15;
        console.log(`${this.nome} se alimentou e está mais saudável.`);
      }
    }
  
    // Método para permitir que o personagem durma
    dormir() {
      if (this.verificarVivo()) {
        this.saude += 20;
        console.log(`${this.nome} dormiu bem e está cheio de energia.`);
      }

      const envelhece = Util.randomizar(0, 100)
      const verificaSePodeFicarMaisVelho = envelhece > CHANCE_DE_ENVELHECER

      this.envelhecer(verificaSePodeFicarMaisVelho)
    }
  
    // Método para demonstrar carinho ao personagem
    darCarinho() {
      if (this.verificarVivo()) {
        this.saude += 5;
        console.log(`${this.nome} se sente amado e feliz.`);
      }
    }
  
    // Método para simular o passar do tempo
    passarTempo() {
      if (this.verificarVivo()) {
        this.tempoVida += 1;
        this.saude -= 5; // A saúde diminui com o tempo
        console.log(`${this.nome} envelheceu um pouco.`);
      }
    }

    welcomeMessage(){
      console.log(`Você escolheu ${this.nome}, um ${this.classe}.`);
      console.log(`${this.nome} está na fase de ${this.fase}.`);
    }
  }
  
  // Simulando o passar do tempo
  // setInterval(() => {
  //   personagem.passarTempo();
  //   if (!personagem.verificarSaude()) {
  //     console.log(`${personagem.nome} ficou doente!`);
  //     personagem.doente = true;
  //   }
  //   if (!personagem.verificarVivo()) {
  //     console.log(`${personagem.nome} morreu.`);
  //   //   clearInterval();
  //   }
  // }, 5000); // A cada 5 segundos
  

  