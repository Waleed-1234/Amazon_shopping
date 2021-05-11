describe('My Test Suite ', function() {
    it('My Test case', function() {
        let brand_name = "skittles";
    
    // visiting to Amazon webpage
    cy.visit('https://www.amazon.de/')
    
    // searching for product by typing 'snickers' in search field
    cy.get('#twotabsearchtextbox').type(brand_name)
    
    // clicking on search button in amazon page to search product
    cy.get('#nav-search-submit-button').click()
    
    // clicking on 'amazon present' option on item page
    cy.get('#a-autoid-2-announce').click()
    
    // in brandrefinements clicking on "Snickers" checkbox option
    cy.get('#brandsRefinements').within(() => {
        cy.get("ul li").each(($el, i) => {
            Cypress.log({
                name: "abc",
                message: $el.text().trim() + " " + ($el.text().trim().toLowerCase() === brand_name)
            })
    
            if ($el.text().trim().toLowerCase() === brand_name) {
                Cypress.log({
                    name: "abc",
                    message: cy.children.toString()
                })
    
                cy.get(`ul li:nth-child(1)`).within(() => {
                    Cypress.log({
                        name: "abc",
                        message: cy.children.toString()
                    })
    
                    cy.get('[type="checkbox"]').check({
                        force: true
                    })
                })
            }
        })
    })
    
    // sorting products in asending order by using asending order option
    cy.get('select').eq(1).select('Preis: aufsteigend', {
        force: true
    })
    
    let selected_prod = "";
    
    // clicking on first product with price (chepaest) after sorting products in asending order 
    cy.get('.s-main-slot .s-result-item').each(($el, index, $list) => {
        if ($el.text().includes('€') && selected_prod === "") {
            let asin = $el.attr("data-asin")
            if (asin) {
                Cypress.log({
                    name: "asin",
                    message: asin
                })
                selected_prod = asin
                cy.get('[data-asin="' + selected_prod + '"]').click()
            }
        }
    })
    
    cy.get("body").then($body => {
        if ($body.find("#newBuyBoxPrice").length > 0) {   
            cy.get("#newBuyBoxPrice").then($header => {
              if ($header.is(':visible')){
    
                cy.get('#newBuyBoxPrice').click()
                
              } 
            });
        } })
     
    // clicking on Add to cart button to add product in bucket
    cy.get('#add-to-cart-button').click()
    
    // comparing expected price with actual price
    let prev_price = "";
    
    cy.get('.huc-subtotal .hlb-price').each(($el, index, $list) => {
        const price = $el.text()
        if (prev_price !== "") {
            expect(price).to.equal(prev_price)
        }
        prev_price = price
    })
    
    // clicking on checkout option redircting to registeration page
    cy.get('#hlb-ptc-btn-native').click()
        })
    })