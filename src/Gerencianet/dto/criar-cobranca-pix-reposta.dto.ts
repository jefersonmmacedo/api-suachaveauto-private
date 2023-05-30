export interface CriarCobrancaPixRespostaDto {
  calendario: {
    criacao: Date,
    expiracao: number
  };

  txid: string;
  revisao: number;
  loc: {
    id: number,
    location: string,
    tipoCob: string
  };
  location: string;
  status: string;

  devedor: {
    cnpj?: string,
    cpf?: string,
    nome: string
  };

  valor: {
    original: string
  };

  chave: string;
  solicitacaoPagador: string;
}
