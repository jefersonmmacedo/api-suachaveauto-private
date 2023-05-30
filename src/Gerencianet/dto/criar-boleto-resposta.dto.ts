export interface CriarBoletoRespostaDto {
    code: number, // retorno HTTP "200" informando que o pedido foi bem sucedido
    data: {
      barcode: string, // linha digitável do boleto
      pix: {
        qrcode: string, // BRCode ou copia e cola
        qrcode_image: string // QR Code imagem
      },
      link: string, // link responsivo do Bolix gerado
      billet_link: string, // link do Bolix gerado
      pdf: {
        charge: string, // link do PDF do Bolix
      },
      expire_at: string, // data de vencimento do boleto no seguinte formato: 2022-12-15 (ou seja, equivale a 15/12/2022)
      charge_id: number, // número da ID referente à transação gerada
      status: string, // forma de pagamento selecionada, aguardando a confirmação do pagamento ("waiting" equivale a "aguardando")
      total: number, // valor, em centavos. Por exemplo: 5990 (equivale a R$ 59,90)
      payment: string // forma de pagamento associada à esta transação ("banking_billet" equivale a "boleto bancário")
    }
}
