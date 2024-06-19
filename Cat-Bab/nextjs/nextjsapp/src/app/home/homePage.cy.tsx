import Home from "./page";

describe('<Home/>', () => {
    it('render', () => {
        cy.mount(<Home/>)
        cy.wait(1000)
        cy.get('h1').should('exist').contains('homepage')
        cy.get('a[href="/login"]').should('exist').contains('go to loing')
    })
})