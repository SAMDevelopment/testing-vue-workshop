import { shallowMount } from '@vue/test-utils'
import SubmitForm from './SubmitForm.vue'

test('calls onSubmit with value of input when form is submitted', () => {
  const onSubmitMock = jest.fn()
  const wrapper = shallowMount(SubmitForm, {
    propsData: {
      onSubmit: onSubmitMock
    }
  })

  // Prefer this over mutating the data directly to make sure it uses the value from the input.
  wrapper.find('[type="text"]').setValue('my-username')
  wrapper.find('form').trigger('submit')

  expect(onSubmitMock).toHaveBeenCalledWith('my-username')
})
