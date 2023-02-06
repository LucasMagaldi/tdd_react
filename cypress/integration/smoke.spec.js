describe("Smoke Test", () => {
    it("Test", () => {
        cy.visit("http://localhost:3000")
            .contains("Hello, world!")
    })
});