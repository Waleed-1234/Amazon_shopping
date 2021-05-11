**Automation Project-Online_Shopping_Amazon**
**A project, automating a test scenario of online shopping experience as new Amazon user**
**Technologies/Frameworks/Tools used : Cypress, JavaScript**
The tasks being automated are as follows:
**1**.Navigating to Amazon shopping page as a new user.
**2**.Searching for Snickers/Skittles by typing "Snickers/Skittles" in the Search Text field
and then clicking the checkbox option to filter them on item page.
**3**.Sorting the Snickers/Skittles by price by using the 'Sort By' dropdown in asending order.
**4**.Adding the lowest priced Snickers/Skittles to the cart.
**5**.Verifying if the Item was added correctly to the cart by comparing actual value with the expected value of the item.
**6**. Clicking on Checkout button navigating to registeration page.

**Cypress Installation and Project Setup**
- Download Node & NPM
http://nodejs.org/en/download/

- **Set NODE_HOME Environment Variable**
Go to PC -> Properties -> Advance system settings -> New system variable -> Set variable name = 'NODE_Home' and value = 'C/Program Files/Node.JS' and click ok

- **Cypress installation**
For installing and executing cypress test case please refer to 'https://docs.cypress.io/guides/getting-started/installing-cypress#Switching-browsers'

- **install visual studio code editor**
https://code.visualstudio.com/download

**File Structure**

CypressAutomation/cypress/integration/amazon_shopping.js

