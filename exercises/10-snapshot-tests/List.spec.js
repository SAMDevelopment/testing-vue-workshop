import { shallowMount } from '@vue/test-utils'
import List from './List.vue'

test('renders list of items correctly', () => {
  const wrapper = shallowMount(List, {
    propsData: {
      items: (new Array(5)).fill().map((value, index) => index)
    }
  })
  expect(wrapper.element).toMatchSnapshot()
})
