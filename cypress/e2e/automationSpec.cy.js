import homePage from './pageObjects/homePage';
import registerPage from './pageObjects/registerPage';
// <reference types="cypress" />
describe('Qatar Rail Testing',()=>{
 let testdata;
 const homeObj= new homePage();
 const registerObj= new registerPage();
 


beforeEach( ()=> {
  cy.visit('https://www.qr.com.qa/');
  cy.fixture('testdata.json').as('testdata')
  cy.get('@testdata').then((fdata)=>{
     testdata=fdata;

  })
  })




it('Register test',()=>{
 
 
  homeObj.clickOnTravelCardMenu(testdata.travelcardmenu);
  cy.getWithxPath('//*[@id="collapsibleNavbar"]/ul/li[1]/div/a[2]').click()
 // cy.xpath('//*[@id="collapsibleNavbar"]/ul/li[1]/div/a[2]').click();

 cy.contains('Customer Registration')
  //get document type
  cy.get('#registerDocumentTypeId')
    .click()
    .type('{downArrow}',{force: true})
    .type('{enter}',{force:true})

    //get birthdate
    cy.get('#birthDate').click();
    cy.get('ngb-datepicker-navigation.ng-star-inserted > .d-block > :nth-child(2)').select('1995')
    cy.get('ngb-datepicker-navigation.ng-star-inserted > .d-block > :nth-child(1)').select('Jun')
    cy.get(':nth-child(6) > :nth-child(6) > .btn-light').click()
    cy.typeWithGet('#idNumber','222222222222222')
   // cy.get('#idNumber').type('222222222222222')
    cy.get('#gender')
      .click()
      .type('{enter}',{force:true})
    cy.get('#genderTitle')
      .click()
      .type('{enter}',{force:true})

//use this to fail
  //  cy.typeWithGet('#nationality','India').pressEnter();


      cy.get('#nationality').type('India').type('{enter}',{force:true})

      

      cy.get('#firstName').type('Jesuwin')
      cy.get('#lastName').type('Wilfred')

      cy.get('#email').type('Jesuwin@applab.qa')

      cy.get('#professionMaster').click().type('{enter}',{force:true})

      cy.get('#reconfirmEmail').type('Jesuwin@applab.qa')

     

      cy.get('#password').type('Applab@123')
      cy.get('#customerPhoneNumber').type('70506759')
      cy.get('#confirmpassword').type('Applab@123')

      cy.get('.reg-cancel').click()
  


})

it.skip('Login Test',()=>{

  
  cy.xpath('//*[@id="logindrop"]/div/p').click();

  cy.xpath('//*[@id="username"]').type("Jesuwin95@hotmail.com").should('have.value','jesuwin95@hotmail.com')
  cy.xpath('//*[@id="pwd"]').type('Applab@123').should('have.value','Applab@123')
 // cy.solveGoogleReCAPTCHA();
 // expect(true).to.be.false
  

})

it.skip('Fares & Travel Cards Test',()=>
{
  cy.get('#navbarDropdownMenuLink1').click();
  cy.getWithxPath('//*[@id="collapsibleNavbar"]/ul/li[1]/div/a[1]').click()
 
  cy.getWithxPath('/html/body/app-root/div/div/app-static-content/div[2]/div/h2')

})

it.skip('Licensed Retailers Test',()=>
{
  cy.get('#navbarDropdownMenuLink1').click();
  cy.getWithxPath('//*[@id="collapsibleNavbar"]/ul/li[1]/div/a[4]').click()
  cy.contains('Al Meera')
  cy.xpath('//*[@id="static-1-header"]/a/h5/button/span/span/p').click()
  cy.xpath('//*[@id="static-1"]/div/perfect-scrollbar/div/div[1]/div[2]/div[2]/a').click()


})


})

