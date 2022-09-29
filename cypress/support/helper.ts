export function setCheckbox(checkboxObject: any, checked: boolean) {
  const checkBoxValue = checked ? 'be.checked' : 'not.be.checked';
  checked
    ? checkboxObject
        .find('[type="checkbox"]')
        .check({ force: true })
        .should(checkBoxValue)
    : checkboxObject
        .find('[type="checkbox"]')
        .uncheck({ force: true })
        .should(checkBoxValue);
}

export function selectDropdownValueByTestId(dropDownObject: any, item: string) {
  dropDownObject.click();
  cy.wait(1000);
  cy.getDropdownValueByTestId(item).eq(0).click();
}

export function selectDropdownValue(dropDownObject: any, item: string) {
  dropDownObject.click();
  cy.wait(1000);
  cy.get('mat-option').contains(item).as('DropdownItem');
  cy.get('@DropdownItem').should('contain', item).click();
}

export function selectAutoCompleteValue(dropDownObject: any, item: string) {
  dropDownObject.get('mat-option').contains(item).click();
}

export function waitSpinnerDisappear() {
  cy.get('mat-progress-spinner').should('not.exist');
}

export function selectFromPersonsList(person: string) {
  cy.get('[class="zhs-card-title"]')
    .contains(person)
    .should('contain', person)
    .as('SelectedPerson');
  cy.get('@SelectedPerson').click({ force: true });
}

export function dateFormatter(inputDate: Date) {
  let date, month, year;

  date = inputDate.getDate(); //+ 1;
  month = inputDate.getMonth() + 1;
  year = inputDate.getFullYear();

  date = date.toString().padStart(2, '0');
  month = month.toString().padStart(2, '0');

  return `${date}.${month}.${year}`;
}

export function getBaseUrl() {
  if (Cypress.env('environment') === 'TST') {
    return 'https://infometis.tst.ch/';
  } else {
    return 'https://infometis.int.ch/';
  }
}

export function parseResponseBody(body: any) {
  console.log(body);
  const parsedBody = body.split(")]}',");
  console.log(JSON.parse(parsedBody[1]));
  const jsonBody = JSON.parse(parsedBody[1]);
  return jsonBody;
}
