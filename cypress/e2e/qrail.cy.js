

describe('Qatar Rail', () => {
  it('Visiting Qatar Rail', () => {
    cy.visit('https://qr.com.qa')
    cy.title().should('contain', 'Doha')
    cy.xpath('//*[@id="logindrop"]/div/p').click();
  })

  it('Hi',()=>{
    
  })
})