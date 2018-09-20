import Modal from './Modal.vue'
import { shallowMount } from '@vue/test-utils'

test('emits on-close event when close button is clicked', () => {
  const wrapper = shallowMount(Modal)

  expect(wrapper.emitted('close-modal')).toBe(undefined)
  wrapper.find('button').trigger('click')
  expect(wrapper.emitted('close-modal')).toEqual([[]])
})
