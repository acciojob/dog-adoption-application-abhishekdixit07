//your code here
describe("Form Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000"); // replace with your localhost or file path
  });

  it('Checking submit button', () => {
    cy.get('#submit').should('have.attr', 'value', 'Submit');
    cy.get('#submit').should('have.attr', 'type', 'submit');
  });

  // Add more tests as needed
});