export class LoginPage {
  //elements
  getBenutzernameInput() {
    return cy.get('[id="username"]');
  }

  getPasswortInput() {
    return cy.get('[id="password"]');
  }

  getLoginBtn() {
    return cy.get('[id="loginButton"]');
  }

  getSicherheitscodeInput() {
    return cy.get('[id="otp"]');
  }

  getAnmeldenBtn() {
    return cy.get('[id="checkOtp"]');
  }

  getButtonByClassAndText() {
    return cy
      .get('span[class="mat-button-wrapper"]')
      .contains('Speichern')
      .should('exist');
  }

  sideNavigationSelektion(itemName: string) {
    cy.wait(2000);
    cy.get('[class="mat-list-item-content"]')
      .contains(itemName)
      .should('contain', itemName)
      .parent()
      .as('navigationItem');
    cy.get('@navigationItem').click({ force: true });
    cy.wait(3000);
  }

  keyboardNavigation() {
    cy.get('inputField').type('{downArrow}{enter}');
  }

  selectRadioGroup(item: boolean) {
    const radiogroup = cy.get('[formcontrolname="level"]');

    item
      ? radiogroup
          .get('[value="BasicKnowledgeExamPassed"]')
          .check({ force: true })
      : radiogroup
          .get('[value="BasicKnowledgeExamPending"]')
          .check({ force: true });
  }

  //interactions
  benutzerEinloggen(benutzer: string, passwort: string, otp: string) {
    //cy.intercept('POST', Urls.POST_AUTH).as('getLoginAuth');
    //cy.intercept('POST', Urls.POST_OTP).as('getOtpAuth');
    this.getBenutzernameInput().type(benutzer);
    this.getPasswortInput().type(passwort);
    this.getLoginBtn().click();
    //cy.wait('@getLoginAuth');
    this.getSicherheitscodeInput().type(otp);
    this.getAnmeldenBtn().click();
    //cy.wait('@getOtpAuth');
  }
}
