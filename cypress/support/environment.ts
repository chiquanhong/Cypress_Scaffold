import { LoginDataINT, LoginDataTST, BaseUrl, Env } from './consts';

export function getBaseUrl() {
  if (Cypress.env('environment') === Env.TST) {
    return BaseUrl.TST;
  } else {
    return BaseUrl.INT;
  }
}

export function getLoginUser() {
  if (Cypress.env('environment') === Env.TST) {
    return LoginDataTST;
  } else {
    return LoginDataINT;
  }
}

export function getTestDataFolder() {
  return Cypress.env('environment') + '/';
}
