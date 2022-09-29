describe('Example Testsuite', () => {
  let testdata;

  before(() => {
    cy.fixture('exampleTestData').then(function (data) {
      testdata = data;
    });
  });
  it('führt einen TestCase aus', () => {
    //Todo
    cy.visit('/');
  });
});
