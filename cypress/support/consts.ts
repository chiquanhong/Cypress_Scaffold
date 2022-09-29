export const LoginDataINT = {
  username: 'test',
  password: 'test',
  otp: 'aaaa',
};

export const LoginDataTST = {
  username: 'test',
  password: 'test',
  otp: 'aaaa',
};

export enum Urls {
  POST_AUTH = '**/auth/rest/public/authentication/password/check',
  GET_COUNTRIES = '**/rest/payments/countries?afp-lang=de_CH',
}

export enum SideNavigationItems {
  ZAHLUNGEN = 'Zahlungen',
  NEUE_ZAHLUNG = 'Neue Zahlung',
  KONTOUEBERTRAG = 'Kontoübertrag',
}

export enum BaseUrl {
  INT = 'https://infometis.int.ch/',
  TST = 'https://infometis.tst.ch/',
}

export enum Env {
  INT = 'INT',
  TST = 'TST',
}
