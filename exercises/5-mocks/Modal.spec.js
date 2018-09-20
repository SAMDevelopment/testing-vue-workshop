import { shallowMount } from '@vue/test-utils'
import Modal from './Modal.vue'

// Use jest.fn to create a mock function
test('calls onClose when close button is clicked', () => {
  const onCloseMock = jest.fn()
  const wrapper = shallowMount(Modal, {
    propsData: {
      onClose: onCloseMock
    }
  })

  wrapper.find('button').trigger('click')

  expect(onCloseMock).toHaveBeenCalled()
})
