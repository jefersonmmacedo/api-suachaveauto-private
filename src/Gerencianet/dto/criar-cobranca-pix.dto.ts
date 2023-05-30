export interface CriarCobrancaPixDto {
    calendario: {
        expiracao: number;
    };

    devedor: {
        cpf?: string,
        cnpj?: string,
        nome?: string
    };

    valor: {
        original: string,
    };

    chave: string;

    infoAdicionais: Array<{
        nome: string,
        valor: string,
    }>

}