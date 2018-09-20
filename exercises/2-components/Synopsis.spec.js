import Synopsis from './Synopsis.vue'
import { shallowMount } from '@vue/test-utils'

// You can use the Vue Test Utils slots option to pass in a slot:
//
// const wrapper = shallowMount(Component, {
//   slots: {
//     foo: '<div />',
//     bar: 'bar',
//   }
// })
//
// https://vue-test-utils.vuejs.org/api/options.html#slots
test('renders short slot, and hides long slot, initially', () => {
  const wrapper = shallowMount(Synopsis, {
    slots: {
      short: '<p>Short!</p>',
      long: '<p>Long!</p>'
    }
  })

  expect(wrapper.text())
    .toContain('Short!')
  expect(wrapper.text())
    .not.toContain('Long!')
})

// You can use the Vue Test Utils find and trigger methods to trigger an event:
//
// const wrapper = shallowMount(Component)
// wrapper.find('button').trigger('click')
//
// https://vue-test-utils.vuejs.org/api/options.html#slots
test('renders long slot, and hides short slot, when button is clicked', () => {
  const wrapper = shallowMount(Synopsis, {
    slots: {
      short: '<p>Short!</p>',
      long: '<p>Long!</p>'
    }
  })

  wrapper.find('button')
    .trigger('click')

  expect(wrapper.text())
    .not.toContain('Short!')
  expect(wrapper.text())
    .toContain('Long!')
})

test('toggles "Show more/ show less" when button is clicked', () => {
  const wrapper = shallowMount(Synopsis, {
    slots: {
      short: '<p>Short!</p>',
      long: '<p>Long!</p>'
    }
  })
  const button = wrapper.find('button')

  expect(button.text())
    .toBe('Show more')

  wrapper.find('button')
    .trigger('click')

  expect(button.text())
    .toBe('Show less')
})
