import App from './App.vue'
import Modal from './Modal.vue'
import { shallowMount } from '@vue/test-utils'

test('removes Modal when close-modal is emitted', () => {
  const wrapper = shallowMount(App)

  expect(wrapper.find(Modal).exists()).toBe(true)
  wrapper.find(Modal).vm.$emit('close-modal')
  expect(wrapper.find(Modal).exists()).toBe(false)
})
