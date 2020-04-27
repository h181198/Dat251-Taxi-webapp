describe('Can access parts of website', () => {
    it('No specific URL goes to homepage', () => {
      cy.visit("http://localhost:3000")
      cy.wait(300)
      cy.contains("Taxideling")
    })

    it('Can access homepage through /home and contians taxideling', () => {
        cy.visit("http://localhost:3000")
        cy.wait(300)
        cy.contains("Taxideling")
    })
  })