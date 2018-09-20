import mutations from './mutations'

test('adds filtered items to state', () => {
  let state = {items: []}

  expect(state.items).toHaveLength(0)
  mutations.setItems(state, {items: ['foo', undefined, 'bar']})
  expect(state.items).toHaveLength(2)
  expect(state.items).toContain('foo')
  expect(state.items).toContain('bar')
})
