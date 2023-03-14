class homePage{



clickOnTravelCardMenu(travelCardMenuLocator)
{
 return cy.get(travelCardMenuLocator).click();
}

}



export default homePage;