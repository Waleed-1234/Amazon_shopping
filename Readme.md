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

**Implementation of an automation test, amazon shopping as a new user, according to this test case in Gherkin**
Feature: Insert searched item on Amazon shopping cart
 Scenario: Search for a Snickers/Skittles, and add the item successfully to the cart and on checkout navigate to reg. page 
 Given I am on the Amazon homepage

  And I enter "snickers" into the field "Search"

  And I click on the "Search" button

  And I select "Snickers" from the Marke options

  And I click on the "ascending order" button 

  And I select lowest price "Snicker" from item page

  And I click in the image of the lower price "Snickers" in the snicker search list result page

  And I click on the "One-time delivery Option" in the item page

  And I click in the button "Add to List" in the item page
 
  And I compare actual value of the item with the expected value

  And I click in the button "Checkout button" in the "Add to List" page

  Then I navigate to new user registration page


**System requirements**
Cypress is a desktop application that is installed on your computer. The desktop application supports these operating systems:

 **Operating System**
- macOS 10.9 and above (64-bit only)
- Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
- Windows 7 and above
 for more detail please refer to 'https://docs.cypress.io/guides/getting-started/installing-cypress#Switching-browsers'
 



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

Amazon_shopping/Integration/amazon_shopping.js

