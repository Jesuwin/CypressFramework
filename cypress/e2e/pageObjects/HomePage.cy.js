class HomePage{
///<reference types="Cypress"/>
//elements= {

   // registerBtn : ()=> cy.get('.box-body > .ng-star-inserted > .btn')

//}

clickOnRegister()
{
   // this.elements.registerBtn.click();
   cy.get('.box-body > .ng-star-inserted > .btn').click();
}

}



export default HomePage;