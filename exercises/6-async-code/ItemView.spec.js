import { fetchItems } from './api'
import ItemView from './ItemView.vue'
import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'

jest.mock('./api')

test('renders items resolved from fetchItems', async () => {
  // expect.assertions(2)
  fetchItems.mockResolvedValue(['item-1', 'item-2'])
  const wrapper = shallowMount(ItemView)

  await flushPromises()


})

test('renders error if fetchItems rejects', () => {

})
