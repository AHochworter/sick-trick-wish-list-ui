describe('should load the home page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      fixture: 'trickData',
    })
      .as('getTricks')
      .visit('http://localhost:3000');
    cy.wait('@getTricks');
  });

  it('should load home page elements', () => {
    cy.get('h1')
      .contains('Sick Trick Wish List')
      .get('.card')
      .first()
      .contains('h2', 'regular treflip')
      .get('.card')
      .last()
      .contains('h2', 'regular frontside 50-50, backside 180 out');
  });

  it('should have form fields to fill out', () => {
    cy.get("input[name='trick-name']")
      .type('high-five')
      .get("select[name='select-stance']")
      .select('Regular')
      .get("select[name='select-obstacle']")
      .select('Pool')
      .get("input[name='tutorial']")
      .type('https://www.hp.com')
      .get('.submit-btn')
      .should('exist');
  });
});
