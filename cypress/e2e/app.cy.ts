describe('Navigation', () => {
	it('prompt the onboard modal if user has no previous preferences', () => {
		// Start from the index page
		cy.visit('/')

		const onBoardingModal = cy.get('.modal')

		// if the its the first time the user is visiting the site, the onboard modal should be visible
		onBoardingModal.should('be.visible')
	})
})
