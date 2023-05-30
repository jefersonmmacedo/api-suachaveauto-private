enum EPaymentsType {
  GN_PIX = 'GN_PIX',
  GN_BOLETO = 'GN_BOLETO'
}

class Payments {
  id: string;
  idPlain: string;
  idCompany: string;
  email:string;
  namePlain:string;
  value: string;
  period: number;
  type: EPaymentsType;
  invoice_link?: string;
  voucher?: string;
  aceptTerms: string;
  status: string;
  created_at: Date;
}

export { Payments, EPaymentsType };
