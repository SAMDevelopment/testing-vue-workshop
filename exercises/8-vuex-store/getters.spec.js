import getters from './getters'

test('returns first 20 items if state.page value is 1', () => {
  const state = {
    page: 1,
    items: (new Array(25)).fill().map((item, index) => index)
  }

  const displayedItems = getters.displayItems(state)

  expect(displayedItems).toHaveLength(20)
  displayedItems.forEach(item => {
    expect(item).toBeGreaterThan(-1)
    expect(item).toBeLessThan(20)
  })
  // Check if each item is present
})

test('returns items 21-40 if state.page value is 2', () => {

})
