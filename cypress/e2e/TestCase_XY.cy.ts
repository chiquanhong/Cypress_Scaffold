describe('Example Test for eBanking', () => {
  let testdata;

  before(() => {
    cy.fixture('exampleTestData').then(function (data) {
      testdata = data;
    });
  });
  it('führt einen Kontouebertrag aus', () => {
    //Todo
    cy.visit('/');
  });
});
