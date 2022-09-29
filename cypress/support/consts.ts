export const LoginDataINT = {
  username: '999999007',
  password: 'Welcome2AFP',
  otp: 'aaaa',
};

export const LoginDataTST = {
  username: '999999095',
  password: 'Welcome2AFP',
  otp: 'aaaa',
};

export enum Urls {
  POST_AUTH = '**/auth/rest/public/authentication/password/check',
  POST_OTP = '**/auth/rest/public/authentication/mtan/otp/check',
  GET_KONTOUEBERTRAG = '**/rest/payments/internal/form?afp-lang=de_CH',
  GET_COUNTRIES = '**/rest/payments/countries?afp-lang=de_CH',
  GET_PAYMENTGROUPS = '**/rest/payments?groupPaymentGroup=false&groupDta=false&groupCord=false&filterString=states:TO_BE_APPROVED&filterString=states:PARTIAL_APPROVED&filterString=states:DD_REJECTION_TO_BE_APPROVED&filterString=states:DELETION_TO_BE_APPROVED&filterString=states:MODIFICATION_TO_BE_APPROVED&filterString=states:TO_SIGN&offset=0&limit=20&afp-lang=de_CH',
  GET_TEMPLATES = '**/rest/payments/templates*',
  GET_PAYMENTTYPESFORM = '**/rest/payments/*/form?afp-lang=de_CH',
  POST_PAYMENTSVALIDATE = '**/rest/payments/*/validate?afp-lang=de_CH',
  POST_SUBMIT_PAYMENT = '**/rest/payments/*/submit?afp-lang=de_CH',
  GET_PAYMENTS = '**/rest/payments?**',
}

export enum SideNavigationItems {
  ZAHLUNGEN = 'Zahlungen',
  NEUE_ZAHLUNG = 'Neue Zahlung',
  KONTOUEBERTRAG = 'Kontoübertrag',
}

export enum BaseUrl {
  INT = 'https://ebanking.int.bkb.ch/',
  TST = 'https://ebanking.tst.bkb.ch/',
}

export enum Env {
  INT = 'INT',
  TST = 'TST',
}
