describe('Can access parts of website', () => {
    it('No specific URL goes to homepage', () => {
      cy.visit("http://localhost:3000")
      cy.wait(300)
      cy.contains("Taxideling")
    })

    it('Can access homepage through /home and contains taxideling', () => {
        cy.visit("http://localhost:3000/home")
        cy.wait(300)
        cy.contains("Taxideling")
    })

    it('Can access homepage through /home and contains taxideling', () => {
        cy.visit("http://localhost:3000")
        cy.wait(300)
        cy.contains("Taxideling")
    })

    it('Gets data from server', () => {
        cy.visit("http://localhost:3000")
        cy.wait(300)
        cy.get('input[list="fromList"]').type('Bryggen');
        cy.get('#fromList option').should('have.length', 3).
          first().should('have.value', 'Bryggen');
    })
  })