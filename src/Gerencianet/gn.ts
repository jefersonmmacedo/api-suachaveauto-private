import { GNOptions } from "./credentials";
import { CriarCobrancaPixDto } from "./dto/criar-cobranca-pix.dto";
import { CriarCobrancaPixRespostaDto } from "./dto/criar-cobranca-pix-reposta.dto";
import { CriarBoletoDto } from "./dto/criar-boleto.dto";
import { CriarBoletoRespostaDto } from "./dto/criar-boleto-resposta.dto";

export class Gn {
  private static _instance: any;
  private gerencianet: any;

  private constructor() {
    const Gerencianet = require("gn-api-sdk-node");
    this.gerencianet = new Gerencianet(GNOptions);
  }

  /**
   * inicializando biblioteca no pattern singleton
   */
  static instance(): Gn {
    if(!Gn._instance) {
      Gn._instance = new Gn();
    }
    return Gn._instance;
  }

  /**
   * método para criar uma cobrança PIX
   */
  async criarCobrancaPix(payload: CriarCobrancaPixDto): Promise<CriarCobrancaPixRespostaDto | null> {
    const params = {};
    try {
      return await this.gerencianet.pixCreateCharge(params, payload);
    } catch (e) {
      console.error('criarCobrancaPix >> ', e);
      return null;
    }
  }

  /**
   * método para criar uma cobrança com boleto
   */
  async criarBoleto(payload: CriarBoletoDto): Promise<CriarBoletoRespostaDto> {
    try {
      return await this.gerencianet.createOneStepCharge([], payload);
    } catch (e) {
      console.error('criarBoleto >> ', e);
      return null;
    }
  }

}