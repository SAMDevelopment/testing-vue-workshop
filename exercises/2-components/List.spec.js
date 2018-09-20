import List from './List.vue'
import { shallowMount } from '@vue/test-utils'

test('renders "no items" if items prop is undefined', () => {
  const wrapper = shallowMount(List)

  expect(wrapper.text())
    .toContain('No items')
})

test('renders text using each item in items prop array', () => {
  const wrapper = shallowMount(List, {
    propsData: {
      items: ['foo', 'bar', 'baz']
    }
  })

  expect(wrapper.text()).toContain('foo')
  expect(wrapper.text()).toContain('bar')
  expect(wrapper.text()).toContain('baz')
})
