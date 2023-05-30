export class CriarBoletoDto {
  metadata: {
    custom_id: string;
    notification_url: string;
  };

  payment: {
    banking_billet: {
      expire_at: string;
      customer: {
        name?: string;
        email?: string;
        cpf?: string;
        birth?: string;
        phone_number?: string;
        juridical_person?: {
          corporate_name: string;
          cnpj: string;
        };
      };

      message: string;
    };
  };

  items: Array<{
    name: string;
    value: number;
    amount: number;
  }>;

  shippings?: Array<{
    name: string;
    value: number;
  }>;
}
