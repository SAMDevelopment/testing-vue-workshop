import ProgressBar from './ProgressBar.vue'
import { shallowMount } from '@vue/test-utils'

jest.useFakeTimers()

test('increments width by 1% every 100ms', () => {
  const wrapper = shallowMount(ProgressBar)

  console.log(

  )
  expect(wrapper.element.style.width).toBe('0%;')

  jest.advanceTimersByTime(300)
  expect(wrapper.element.style.width).toBe('3%;')

  jest.advanceTimersByTime(100)
  expect(wrapper.element.style.width).toBe('4%;')
})
