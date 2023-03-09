
import HomePage from '../e2e/pageObjects/HomePage.cy'
const homepage= new HomePage();
describe('Qatar Rail', () => {
  beforeEach(()=>{
    cy.visit('https://qr.com.qa');
  })
  it.skip('Visiting Qatar Rail', () => {
   
    cy.visit('https://qr.com.qa')
    cy.title().should('contain', 'Doha')
    cy.xpath('//*[@id="logindrop"]/div/p').click();
  })

  it('Hi',()=>{
    
    cy.log('Hello')
    homepage.clickOnRegister();
  })
})