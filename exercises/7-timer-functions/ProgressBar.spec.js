import ProgressBar from './ProgressBar.vue'
import { shallowMount } from '@vue/test-utils'

jest.useFakeTimers()

test('increments width by 1% every 100ms', () => {
  const wrapper = shallowMount(ProgressBar)

  expect(wrapper.attributes('style')).toBe('width: 0%;')

  jest.advanceTimersByTime(300)
  expect(wrapper.attributes('style')).toBe('width: 3%;')

  jest.advanceTimersByTime(100)
  expect(wrapper.attributes('style')).toBe('width: 4%;')
})
